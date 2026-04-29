// Gerador de apresentação Monica — versão pptxgenjs
// Texto reescrito: mais humano, menos teoria, mais conversa real
const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE"; // 13.33" x 7.5"
pptx.defineLayout({ name: "LAYOUT_WIDE", width: 13.33, height: 7.5 });

// ─── PALETA ───────────────────────────────────────────────────────────────────
const BG       = "0a0a0a";
const BG_CARD  = "111111";
const BG_CARD2 = "161616";
const ACCENT   = "7c3aed";
const ACCENT_D = "1a0a2e";
const TEXT     = "FFFFFF";
const MUTED    = "9ca3af";
const DARK     = "374151";
const BORDER   = "1f1f1f";
const GREEN    = "059669";

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const W = 13.33;
const H = 7.5;

function bg(slide, glow = false) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: W, h: H,
    fill: { color: BG }, line: { color: BG }
  });
  if (glow) {
    slide.addShape(pptx.ShapeType.ellipse, {
      x: 8, y: -1.5, w: 7, h: 7,
      fill: { color: ACCENT_D, transparency: 60 },
      line: { color: ACCENT_D, transparency: 100 }
    });
  }
}

function bgAccent(slide) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: W, h: H,
    fill: { color: "5b21b6" }, line: { color: "5b21b6" }
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: W, h: H,
    fill: { color: "7c3aed", transparency: 30 }, line: { color: "7c3aed", transparency: 100 }
  });
}

function tag(slide, text, y = 0.5, align = "center") {
  slide.addText(text, {
    x: 1, y, w: W - 2, h: 0.3,
    fontSize: 9, color: ACCENT, bold: true,
    align, charSpacing: 3, fontFace: "Calibri"
  });
}

function h1(slide, text, y = 1.0, opts = {}) {
  slide.addText(text, {
    x: 1, y, w: W - 2, h: 1.8,
    fontSize: 52, color: TEXT, bold: true,
    align: "center", fontFace: "Calibri",
    lineSpacingMultiple: 1.1,
    ...opts
  });
}

function h2(slide, text, y = 1.0, opts = {}) {
  slide.addText(text, {
    x: 1, y, w: W - 2, h: 1.4,
    fontSize: 36, color: TEXT, bold: true,
    align: "center", fontFace: "Calibri",
    lineSpacingMultiple: 1.15,
    ...opts
  });
}

function body(slide, text, y = 3.0, opts = {}) {
  slide.addText(text, {
    x: 1.5, y, w: W - 3, h: 1.0,
    fontSize: 16, color: MUTED,
    align: "center", fontFace: "Calibri",
    lineSpacingMultiple: 1.5,
    ...opts
  });
}

function divider(slide, y = 2.8) {
  slide.addShape(pptx.ShapeType.rect, {
    x: (W / 2) - 0.4, y, w: 0.8, h: 0.04,
    fill: { color: ACCENT }, line: { color: ACCENT }
  });
}

function card(slide, x, y, w, h, accent = false) {
  slide.addShape(pptx.ShapeType.rect, {
    x, y, w, h,
    fill: { color: accent ? ACCENT_D : BG_CARD },
    line: { color: accent ? ACCENT : BORDER, pt: 1 },
    rectRadius: 0.15
  });
}

// Tenta carregar foto ou retorna null
function loadPhoto(filepath) {
  if (fs.existsSync(filepath)) {
    return filepath;
  }
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 1 — CAPA
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bg(s, true);

  // Linha decorativa topo
  s.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: W, h: 0.06,
    fill: { color: ACCENT }, line: { color: ACCENT }
  });

  tag(s, "PARA MONICA DE OLIVEIRA · @MONICADEOLIVEIRA.PSI", 1.0);

  s.addText("Monica, você passa anos\najudando mulheres a se entenderem.", {
    x: 1, y: 1.5, w: W - 2, h: 2.2,
    fontSize: 48, color: TEXT, bold: true,
    align: "center", fontFace: "Calibri",
    lineSpacingMultiple: 1.1
  });

  divider(s, 3.8);

  s.addText("Eu vou te mostrar como isso pode gerar dinheiro\nenquanto você descansa.", {
    x: 1.5, y: 3.95, w: W - 3, h: 0.9,
    fontSize: 20, color: MUTED, align: "center", fontFace: "Calibri",
    lineSpacingMultiple: 1.4
  });

  s.addText("Em 30 minutos.", {
    x: 1.5, y: 4.95, w: W - 3, h: 0.4,
    fontSize: 16, color: ACCENT, bold: true, align: "center", fontFace: "Calibri"
  });

  // Linha rodapé
  s.addShape(pptx.ShapeType.rect, {
    x: 0, y: H - 0.06, w: W, h: 0.06,
    fill: { color: BORDER }, line: { color: BORDER }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 2 — VALIDAÇÃO ("Por que você")
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bg(s);

  tag(s, "POR QUE VOCÊ", 0.5);
  s.addText("Você tem o ativo mais raro\ndo mercado digital.", {
    x: 1, y: 0.85, w: W - 2, h: 1.55,
    fontSize: 46, color: TEXT, bold: true,
    align: "center", fontFace: "Calibri", lineSpacingMultiple: 1.1
  });
  divider(s, 2.55);

  // 3 motivos em cards horizontais
  const razoes = [
    {
      titulo: "Autoridade Real",
      desc: "Você não ensina psicanálise como teoria.\nVocê fala como quem viveu.\nIsso cria confiança que não se compra.",
    },
    {
      titulo: "Audiência que Converte",
      desc: "Mulheres que se perdem, se anulam e buscam se reconstruir.\nO público que mais compra infoproduto no Brasil.",
    },
    {
      titulo: "Nicho sem Teto",
      desc: "Autoconhecimento feminino é um dos mercados\nque mais cresce no digital. Você está\nexatamente no centro dele.",
    },
  ];

  razoes.forEach((r, i) => {
    const x = 0.5 + i * 4.3;
    card(s, x, 2.75, 4.0, 4.3, i === 1);

    s.addText(r.titulo, {
      x: x + 0.15, y: 2.95, w: 3.7, h: 0.5,
      fontSize: 16, color: i === 1 ? ACCENT : TEXT,
      bold: true, fontFace: "Calibri", align: "center"
    });
    s.addShape(pptx.ShapeType.rect, {
      x: x + 1.5, y: 3.5, w: 1.0, h: 0.03,
      fill: { color: ACCENT }, line: { color: ACCENT }
    });
    s.addText(r.desc, {
      x: x + 0.15, y: 3.65, w: 3.7, h: 2.8,
      fontSize: 13, color: MUTED, fontFace: "Calibri",
      align: "center", lineSpacingMultiple: 1.55
    });
  });

  s.addText("Tudo que falta é a engrenagem certa para isso gerar dinheiro enquanto você dorme.", {
    x: 1.5, y: 7.1, w: W - 3, h: 0.35,
    fontSize: 13, color: ACCENT, bold: true,
    align: "center", fontFace: "Calibri"
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 3 — O MODELO (sem jargão)
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bg(s);

  tag(s, "O MODELO · EM 3 LINHAS", 0.5);

  s.addText("Você grava.\nEu cuido do resto.\nNo fim do mês, você recebe sua parte.", {
    x: 1, y: 0.9, w: W - 2, h: 2.0,
    fontSize: 44, color: TEXT, bold: true,
    align: "center", fontFace: "Calibri",
    lineSpacingMultiple: 1.15
  });

  divider(s, 3.05);

  // 3 cards simples
  const cards = [
    { icon: "01", title: "Você grava as aulas", desc: "Fala o que você já sabe.\nSua voz, sua história,\ndo jeito que você fala." },
    { icon: "02", title: "Eu estruturo tudo", desc: "Produto, funil, anúncios,\ncopy, páginas, suporte.\nZero preocupação pra você." },
    { icon: "03", title: "Dividimos o resultado", desc: "50/50 do que entrar.\nVocê vê os números\nem tempo real." },
  ];

  cards.forEach((c, i) => {
    const x = 0.7 + i * 4.2;
    card(s, x, 3.2, 3.9, 3.6, i === 1);

    s.addText(c.icon, {
      x, y: 3.35, w: 3.9, h: 0.5,
      fontSize: 10, color: ACCENT, bold: true,
      align: "center", fontFace: "Calibri", charSpacing: 2
    });
    s.addText(c.title, {
      x: x + 0.1, y: 3.85, w: 3.7, h: 0.5,
      fontSize: 18, color: TEXT, bold: true,
      align: "center", fontFace: "Calibri"
    });
    s.addText(c.desc, {
      x: x + 0.2, y: 4.45, w: 3.5, h: 1.8,
      fontSize: 14, color: MUTED, align: "center",
      fontFace: "Calibri", lineSpacingMultiple: 1.5
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 4 — O FUNIL VISUAL
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bg(s);

  tag(s, "DO ANÚNCIO AO ALTO TICKET — TUDO AUTOMÁTICO", 0.4);
  h2(s, "Uma pessoa clica no anúncio às 3h da manhã.\nVocê está dormindo. O funil vende.", 0.85, { fontSize: 30 });

  divider(s, 2.2);

  // Funil steps
  const steps = [
    { label: "ANÚNCIO", sub: "tráfego pago", accent: false },
    { label: "VSL", sub: "vídeo de vendas\n(sua voz)", accent: false },
    { label: "CHECKOUT", sub: "produto\nprincipal", accent: false },
    { label: "UPSELL 1", sub: "R$ 599", accent: true },
    { label: "UPSELL 2", sub: "R$ 2.000", accent: true },
    { label: "WEBNÁRIO", sub: "ao vivo\nmensalmente", accent: false },
    { label: "HIGH TICKET", sub: "10k · 20k · 50k", accent: true },
    { label: "LANÇA-\nMENTO", sub: "anual", accent: false },
  ];

  const boxW = 1.35;
  const boxH = 1.6;
  const startX = 0.3;
  const y = 2.45;

  steps.forEach((step, i) => {
    const x = startX + i * (boxW + 0.28);

    card(s, x, y, boxW, boxH, step.accent);

    s.addText(step.label, {
      x: x + 0.05, y: y + 0.15, w: boxW - 0.1, h: 0.6,
      fontSize: 10, color: step.accent ? ACCENT : TEXT,
      bold: true, align: "center", fontFace: "Calibri"
    });
    s.addText(step.sub, {
      x: x + 0.05, y: y + 0.78, w: boxW - 0.1, h: 0.75,
      fontSize: 9, color: MUTED, align: "center",
      fontFace: "Calibri", lineSpacingMultiple: 1.3
    });

    // Arrow
    if (i < steps.length - 1) {
      const arrowX = x + boxW + 0.04;
      s.addText("→", {
        x: arrowX, y: y + 0.5, w: 0.22, h: 0.5,
        fontSize: 13, color: ACCENT, align: "center", fontFace: "Calibri"
      });
    }
  });

  s.addText("Você cria uma vez. O funil vende todos os dias.", {
    x: 1, y: 4.3, w: W - 2, h: 0.4,
    fontSize: 15, color: MUTED, align: "center",
    fontFace: "Calibri", italic: true
  });

  // Seta final para evento presencial
  s.addShape(pptx.ShapeType.rect, {
    x: 0.3, y: 5.0, w: W - 0.6, h: 0.04,
    fill: { color: BORDER }, line: { color: BORDER }
  });
  s.addText("Depois do funil validado: Lançamento → Evento Presencial → Novo Produto", {
    x: 1, y: 5.1, w: W - 2, h: 0.35,
    fontSize: 11, color: DARK, align: "center", fontFace: "Calibri"
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 5 — A ESTRATÉGIA (como funciona na prática)
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bg(s);

  tag(s, "A ESTRATÉGIA — DO ZERO AO PERPÉTUO", 0.4);
  s.addText("90 dias para o funil rodar.\nDepois, ele vende sozinho.", {
    x: 1, y: 0.75, w: W - 2, h: 1.3,
    fontSize: 36, color: TEXT, bold: true,
    align: "center", fontFace: "Calibri", lineSpacingMultiple: 1.2
  });
  divider(s, 2.15);

  const fases = [
    { num: "01", titulo: "Diagnóstico\n+ Posicionamento", desc: "Mapeamos sua audiência.\nDefinimos o produto, o preço\ne o ângulo da VSL.", tempo: "Semanas 1–2" },
    { num: "02", titulo: "Criação\n+ Produção", desc: "Você grava as aulas.\nEu produzo a VSL, as páginas,\nos emails e os anúncios.", tempo: "Semanas 3–5" },
    { num: "03", titulo: "Lançamento\n+ Validação", desc: "Subimos com budget pequeno.\nTestamos. Medimos.\nAjustamos com dado real.", tempo: "Semanas 6–8" },
    { num: "04", titulo: "Escala\nPerpétua", desc: "Com ROAS validado, escalamos.\nO funil roda 24h sem você.\nNovos produtos na esteira.", tempo: "Mês 3 em diante" },
  ];

  fases.forEach((f, i) => {
    const x = 0.35 + i * 3.22;
    card(s, x, 2.35, 3.0, 4.7, i === 3);

    s.addText(f.num, {
      x, y: 2.5, w: 3.0, h: 0.35,
      fontSize: 10, color: ACCENT, bold: true,
      align: "center", charSpacing: 3, fontFace: "Calibri"
    });
    s.addText(f.titulo, {
      x: x + 0.1, y: 2.9, w: 2.8, h: 0.75,
      fontSize: 16, color: TEXT, bold: true,
      align: "center", fontFace: "Calibri", lineSpacingMultiple: 1.2
    });
    s.addShape(pptx.ShapeType.rect, {
      x: x + 1.1, y: 3.72, w: 0.8, h: 0.03,
      fill: { color: ACCENT }, line: { color: ACCENT }
    });
    s.addText(f.desc, {
      x: x + 0.1, y: 3.85, w: 2.8, h: 2.1,
      fontSize: 12, color: MUTED, align: "center",
      fontFace: "Calibri", lineSpacingMultiple: 1.55
    });
    s.addText(f.tempo, {
      x, y: 6.65, w: 3.0, h: 0.25,
      fontSize: 9, color: i === 3 ? ACCENT : DARK,
      align: "center", fontFace: "Calibri", bold: i === 3
    });

    // Seta entre fases
    if (i < fases.length - 1) {
      s.addText("→", {
        x: x + 3.02, y: 3.7, w: 0.2, h: 0.4,
        fontSize: 14, color: ACCENT, align: "center", fontFace: "Calibri"
      });
    }
  });

  s.addText("Você aparece. Eu opero. O funil vende enquanto você dorme.", {
    x: 1, y: 7.1, w: W - 2, h: 0.3,
    fontSize: 13, color: DARK, italic: true,
    align: "center", fontFace: "Calibri"
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 5b — O GAP (mais pessoal, menos teoria)
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bg(s);

  tag(s, "O QUE EU VI NO SEU PERFIL", 0.5);

  s.addText("Você tem 12 mil mulheres que confiam em você.\nE zero produto escalável.", {
    x: 1, y: 0.9, w: W - 2, h: 1.7,
    fontSize: 40, color: TEXT, bold: true,
    align: "center", fontFace: "Calibri",
    lineSpacingMultiple: 1.15
  });

  divider(s, 2.7);

  // Antes / Depois
  const colW = 5.5;
  const colH = 3.6;
  const colY = 3.0;

  // ANTES
  card(s, 0.5, colY, colW, colH, false);
  s.addText("HOJE", {
    x: 0.5, y: colY + 0.2, w: colW, h: 0.35,
    fontSize: 9, color: DARK, bold: true, align: "center",
    charSpacing: 3, fontFace: "Calibri"
  });
  const antesItems = [
    "Atendimento individual — caro e limitado",
    "Você para → a renda para",
    "Crescer = mais horas de trabalho",
    "12k seguidores vendo conteúdo de graça",
    "Potencial enorme. Sem canal de venda.",
  ];
  antesItems.forEach((item, i) => {
    s.addText("— " + item, {
      x: 0.8, y: colY + 0.7 + i * 0.52, w: colW - 0.6, h: 0.45,
      fontSize: 13, color: DARK, fontFace: "Calibri",
      lineSpacingMultiple: 1.2
    });
  });

  // DEPOIS
  card(s, 6.8, colY, colW, colH, true);
  s.addText("COM ESTRUTURA", {
    x: 6.8, y: colY + 0.2, w: colW, h: 0.35,
    fontSize: 9, color: ACCENT, bold: true, align: "center",
    charSpacing: 3, fontFace: "Calibri"
  });
  const depoisItems = [
    "Produto digital vendendo 24h/dia",
    "Você dorme → o funil vende",
    "Crescer = ajustar os anúncios",
    "12k seguidores virando clientes reais",
    "Renda que escala sem você estar presente.",
  ];
  depoisItems.forEach((item, i) => {
    s.addText("→ " + item, {
      x: 7.1, y: colY + 0.7 + i * 0.52, w: colW - 0.6, h: 0.45,
      fontSize: 13, color: TEXT, fontFace: "Calibri",
      lineSpacingMultiple: 1.2
    });
  });

  s.addText("Isso não é falta de competência. É falta de estrutura. E estrutura eu tenho.", {
    x: 1, y: colY + colH + 0.1, w: W - 2, h: 0.4,
    fontSize: 13, color: DARK, align: "center",
    italic: true, fontFace: "Calibri"
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 6 — PROVA (experts reais)
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bg(s);

  tag(s, "QUEM JÁ FEZ ISSO ANTES DE VOCÊ", 0.5);
  s.addText("Não é teoria. São pessoas reais com histórias verificáveis.", {
    x: 1, y: 0.85, w: W - 2, h: 0.55,
    fontSize: 28, color: TEXT, bold: true,
    align: "center", fontFace: "Calibri"
  });
  divider(s, 1.55);

  const experts = [
    {
      handle: "@elidadiasv",
      name: "Elida Dias",
      result: "R$ 20M+",
      resultSub: "com tráfego direto",
      story: "Jovem aprendiz da periferia de Belém.\nSem capital, sem contato.\nUsou o próprio conhecimento como produto.\nHoje tem +30 mil alunos.",
      follow: "350k seguidores · verificada",
      foto: loadPhoto("c:/Users/Desktop/Downloads/grupoaura/operacoes/apresentacoes/monica/foto-elida.jpg"),
    },
    {
      handle: "@lucasramos1_",
      name: "Lucas Ramos",
      result: "8 dígitos",
      resultSub: "faturados como produtor",
      story: "Sócio 50/50 dos maiores experts do Brasil.\n6 dígitos de lucro por dia no modelo perpétuo.\nNão é expert — é o cara que opera os bastidores.\nExatamente o que eu faço.",
      follow: "Produtor referência em DR com expert",
      foto: loadPhoto("c:/Users/Desktop/Downloads/grupoaura/operacoes/apresentacoes/monica/foto-lucas.jpg"),
    },
    {
      handle: "@enzoneto",
      name: "Enzo Neto — Chef",
      result: "1,1M",
      resultSub: "seguidores · funil ativo",
      story: "Transformou conhecimento de cozinha no\ncurso mais escolhido do Brasil.\nNicho que parecia impossível de escalar.\nFunciona quando a estrutura está certa.",
      follow: "1,1 milhão de seguidores · verificado",
      foto: loadPhoto("c:/Users/Desktop/Downloads/grupoaura/operacoes/apresentacoes/monica/foto-enzo.jpg"),
    },
  ];

  experts.forEach((e, i) => {
    const x = 0.5 + i * 4.3;
    const y = 1.85;
    const cW = 4.0;
    const cH = 5.3;

    card(s, x, y, cW, cH, i === 1);

    // Foto de perfil
    if (e.foto) {
      s.addImage({ path: e.foto, x: x + 0.15, y: y + 0.15, w: 0.65, h: 0.65,
        sizing: { type: "cover", w: 0.65, h: 0.65 } });
    }
    s.addText(e.handle, {
      x: x + (e.foto ? 0.88 : 0.15), y: y + 0.2, w: cW - (e.foto ? 1.0 : 0.3), h: 0.3,
      fontSize: 10, color: ACCENT, bold: true, fontFace: "Calibri", charSpacing: 1
    });
    s.addText(e.name, {
      x: x + (e.foto ? 0.88 : 0.15), y: y + 0.52, w: cW - (e.foto ? 1.0 : 0.3), h: 0.32,
      fontSize: 14, color: TEXT, bold: true, fontFace: "Calibri"
    });
    s.addText(e.result, {
      x: x + 0.15, y: y + 1.0, w: cW - 0.3, h: 0.7,
      fontSize: 36, color: ACCENT, bold: true, fontFace: "Calibri"
    });
    s.addText(e.resultSub, {
      x: x + 0.15, y: y + 1.68, w: cW - 0.3, h: 0.25,
      fontSize: 10, color: MUTED, fontFace: "Calibri"
    });
    s.addShape(pptx.ShapeType.rect, {
      x: x + 0.15, y: y + 1.98, w: 0.5, h: 0.03,
      fill: { color: ACCENT }, line: { color: ACCENT }
    });
    s.addText(e.story, {
      x: x + 0.15, y: y + 2.1, w: cW - 0.3, h: 2.4,
      fontSize: 12, color: MUTED, fontFace: "Calibri", lineSpacingMultiple: 1.55
    });
    s.addText(e.follow, {
      x: x + 0.15, y: y + 4.85, w: cW - 0.3, h: 0.3,
      fontSize: 9, color: DARK, fontFace: "Calibri"
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 7 — PROVA B (Prisciane + Fe Alves) + fechamento emocional
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bg(s);

  tag(s, "O MODELO FUNCIONA EM QUALQUER NICHO", 0.5);

  const experts2 = [
    {
      handle: "@priscianepereira",
      name: "Prisciane Pereira",
      result: "953k",
      resultSub: "seguidores em escala",
      story: "Ensina renda extra com Shopee.\nCriou um funil de VSL que vende\ntodos os dias, com tráfego pago.\nO mesmo sistema que seria aplicado aqui.",
      follow: "953 mil seguidores · verificada",
      foto: loadPhoto("c:/Users/Desktop/Downloads/grupoaura/operacoes/apresentacoes/monica/foto-prisciane.jpg"),
    },
    {
      handle: "@fealvessn",
      name: "Felipe Alves",
      result: "6,9M",
      resultSub: "seguidores · múltiplos produtos",
      story: "Desenvolvimento pessoal e autoconhecimento.\nNicho muito próximo ao seu.\nAutoridade construída com conteúdo —\nfunil estruturado multiplica o orgânico.",
      follow: "6,9 milhões de seguidores · verificado",
      foto: loadPhoto("c:/Users/Desktop/Downloads/grupoaura/operacoes/apresentacoes/monica/foto-fealves.jpg"),
    },
  ];

  const colW = 5.6;
  experts2.forEach((e, i) => {
    const x = 0.8 + i * 6.8;
    const y = 1.1;
    const cH = 5.2;

    card(s, x, y, colW, cH, i === 0);

    // Foto de perfil
    if (e.foto) {
      s.addImage({ path: e.foto, x: x + 0.2, y: y + 0.15, w: 0.65, h: 0.65,
        sizing: { type: "cover", w: 0.65, h: 0.65 } });
    }
    s.addText(e.handle, {
      x: x + (e.foto ? 0.95 : 0.2), y: y + 0.2, w: colW - (e.foto ? 1.1 : 0.4), h: 0.3,
      fontSize: 10, color: ACCENT, bold: true, fontFace: "Calibri", charSpacing: 1
    });
    s.addText(e.name, {
      x: x + (e.foto ? 0.95 : 0.2), y: y + 0.52, w: colW - (e.foto ? 1.1 : 0.4), h: 0.38,
      fontSize: 18, color: TEXT, bold: true, fontFace: "Calibri"
    });
    s.addText(e.result, {
      x: x + 0.2, y: y + 1.0, w: colW - 0.4, h: 0.8,
      fontSize: 48, color: ACCENT, bold: true, fontFace: "Calibri"
    });
    s.addText(e.resultSub, {
      x: x + 0.2, y: y + 1.8, w: colW - 0.4, h: 0.3,
      fontSize: 11, color: MUTED, fontFace: "Calibri"
    });
    s.addShape(pptx.ShapeType.rect, {
      x: x + 0.2, y: y + 2.15, w: 0.5, h: 0.03,
      fill: { color: ACCENT }, line: { color: ACCENT }
    });
    s.addText(e.story, {
      x: x + 0.2, y: y + 2.3, w: colW - 0.4, h: 2.4,
      fontSize: 14, color: MUTED, fontFace: "Calibri",
      lineSpacingMultiple: 1.55
    });
    s.addText(e.follow, {
      x: x + 0.2, y: y + 4.7, w: colW - 0.4, h: 0.3,
      fontSize: 9, color: DARK, fontFace: "Calibri"
    });
  });

  s.addText("Todos começaram onde você está agora.", {
    x: 1, y: 6.5, w: W - 2, h: 0.4,
    fontSize: 15, color: MUTED, italic: true,
    align: "center", fontFace: "Calibri"
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 8 — QUEM É O KAUÃ (mais vulnerável, mais real)
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bg(s);

  // Lado esquerdo — FOTO PLACEHOLDER
  s.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 5.5, h: H,
    fill: { color: ACCENT_D }, line: { color: ACCENT_D }
  });

  // Tentar carregar foto do Kauã
  const fotoKaua = loadPhoto("c:/Users/Desktop/Downloads/grupoaura/operacoes/apresentacoes/monica/kaua-palco.jpg")
    || loadPhoto("c:/Users/Desktop/Downloads/grupoaura/operacoes/apresentacoes/monica/kaua.jpg")
    || loadPhoto("c:/Users/Desktop/Downloads/491211111_3466720810130264_3807635024903484999_n.jpg")
    || loadPhoto("c:/Users/Desktop/Downloads/492974033_122179994108342720_7808352670886967956_n.jpg");

  if (fotoKaua) {
    s.addImage({
      path: fotoKaua,
      x: 0, y: 0, w: 5.5, h: H,
      sizing: { type: "cover", w: 5.5, h: H }
    });
    // Overlay gradiente
    s.addShape(pptx.ShapeType.rect, {
      x: 0, y: 0, w: 5.5, h: H,
      fill: { type: "solid", color: "000000", transparency: 40 },
      line: { color: "000000", transparency: 100 }
    });
  } else {
    s.addText("[ Foto do palco\nOuro Digital ]", {
      x: 0, y: 2.5, w: 5.5, h: 2.0,
      fontSize: 16, color: ACCENT, align: "center",
      fontFace: "Calibri", transparency: 50
    });
    s.addText("OURO DIGITAL · DIRECTADS", {
      x: 0.3, y: H - 0.5, w: 4.9, h: 0.3,
      fontSize: 9, color: MUTED, fontFace: "Calibri"
    });
  }

  // Lado direito — Texto
  tag(s, "QUEM SOU EU", 0.55, "left");
  s.addText("Kauã\nRodriguez", {
    x: 6.0, y: 0.85, w: 6.8, h: 1.6,
    fontSize: 52, color: TEXT, bold: true,
    fontFace: "Calibri", lineSpacingMultiple: 1.05
  });
  s.addText("Direct Response · Coprodução com Experts", {
    x: 6.0, y: 2.5, w: 6.8, h: 0.4,
    fontSize: 14, color: ACCENT, bold: true, fontFace: "Calibri"
  });

  // Divider
  s.addShape(pptx.ShapeType.rect, {
    x: 6.0, y: 3.0, w: 6.5, h: 0.03,
    fill: { color: BORDER }, line: { color: BORDER }
  });

  const creds = [
    { b: "+7 dígitos faturados", r: " em coproduções com experts." },
    { b: "6 anos no digital.", r: " Construindo antes de virar tendência." },
    { b: "Escalei mais de 3 experts", r: " a múltiplos 6 dígitos por mês." },
    { b: "Convidado a palestrar no Ouro Digital", r: " — um dos maiores eventos de performance do Brasil." },
  ];

  creds.forEach((c, i) => {
    s.addText([
      { text: "→ ", options: { color: ACCENT, bold: true } },
      { text: c.b, options: { color: TEXT, bold: true } },
      { text: c.r, options: { color: MUTED } },
    ], {
      x: 6.0, y: 3.15 + i * 0.88, w: 6.8, h: 0.75,
      fontSize: 14, fontFace: "Calibri", lineSpacingMultiple: 1.4
    });

    if (i < creds.length - 1) {
      s.addShape(pptx.ShapeType.rect, {
        x: 6.0, y: 3.85 + i * 0.88, w: 6.5, h: 0.02,
        fill: { color: BORDER }, line: { color: BORDER }
      });
    }
  });
}

// SLIDE 9 — removido conforme solicitado

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 10 — A DIVISÃO (muito simples, muito claro)
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bg(s);

  tag(s, "A PARCERIA", 0.5);
  s.addText("Você faz o que só você pode fazer.\nEu faço todo o resto.", {
    x: 1, y: 0.85, w: W - 2, h: 1.5,
    fontSize: 38, color: TEXT, bold: true,
    align: "center", fontFace: "Calibri", lineSpacingMultiple: 1.2
  });

  divider(s, 2.45);

  // Monica col
  card(s, 0.5, 2.65, 5.8, 4.4, false);
  s.addText("VOCÊ FAZ", {
    x: 0.5, y: 2.8, w: 5.8, h: 0.35,
    fontSize: 9, color: MUTED, bold: true, align: "center",
    charSpacing: 3, fontFace: "Calibri"
  });
  const monicaDo = [
    "Gravar as aulas com sua voz e sua história",
    "Ser a autoridade do produto ao público",
    "Participar das sessões de alto ticket",
  ];
  monicaDo.forEach((item, i) => {
    s.addText("— " + item, {
      x: 0.9, y: 3.3 + i * 0.72, w: 5.0, h: 0.6,
      fontSize: 15, color: MUTED, fontFace: "Calibri", lineSpacingMultiple: 1.3
    });
  });
  s.addText("≈ 4 a 8 horas por semana", {
    x: 0.5, y: 6.55, w: 5.8, h: 0.35,
    fontSize: 12, color: DARK, bold: true, align: "center", fontFace: "Calibri"
  });

  // Kauã col
  card(s, 7.0, 2.65, 5.8, 4.4, true);
  s.addText("EU FAÇO", {
    x: 7.0, y: 2.8, w: 5.8, h: 0.35,
    fontSize: 9, color: ACCENT, bold: true, align: "center",
    charSpacing: 3, fontFace: "Calibri"
  });
  const kauaDo = [
    "Posicionamento e criação do produto",
    "Copy completa: VSL, páginas, anúncios, emails",
    "Criação e gestão diária dos anúncios pagos",
    "Operação completa do funil de vendas",
    "Suporte ao cliente e reembolsos",
    "Relatório semanal de performance",
  ];
  kauaDo.forEach((item, i) => {
    s.addText("→ " + item, {
      x: 7.3, y: 3.3 + i * 0.55, w: 5.1, h: 0.48,
      fontSize: 13, color: TEXT, fontFace: "Calibri", lineSpacingMultiple: 1.2
    });
  });
  s.addText("40+ horas por semana", {
    x: 7.0, y: 6.55, w: 5.8, h: 0.35,
    fontSize: 12, color: ACCENT, bold: true, align: "center", fontFace: "Calibri"
  });

  s.addText("Você traz o ativo mais valioso: sua autoridade. Eu trago a engrenagem que a converte em receita.", {
    x: 0.5, y: 7.15, w: W - 1, h: 0.3,
    fontSize: 12, color: DARK, italic: true,
    align: "center", fontFace: "Calibri"
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 11 — PROJEÇÃO FINANCEIRA
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bg(s);

  tag(s, "O QUE ISSO REPRESENTA PARA VOCÊ", 0.4);
  s.addText("Em 90 dias, o que sua audiência pode gerar.", {
    x: 1, y: 0.75, w: W - 2, h: 0.85,
    fontSize: 34, color: TEXT, bold: true,
    align: "center", fontFace: "Calibri"
  });

  // Tabela manual
  const rows = [
    { scenario: "Conservador", ads: "R$ 5k/mês", gross: "R$ 30–60k/mês", share: "R$ 15–30k/mês", accent: false },
    { scenario: "Moderado",    ads: "R$ 20k/mês", gross: "R$ 100–200k/mês", share: "R$ 50–100k/mês", accent: false },
    { scenario: "Escala",      ads: "R$ 50k/mês", gross: "R$ 400k+/mês", share: "R$ 200k+/mês", accent: true },
  ];

  const headers = ["Cenário", "Invest. em Ads", "Receita Bruta", "Seu Share (50%)"];
  const cols = [1.5, 4.2, 7.0, 10.0];
  const colWidths = [2.4, 2.5, 2.7, 2.8];

  // Header
  headers.forEach((h, i) => {
    s.addText(h, {
      x: cols[i], y: 1.75, w: colWidths[i], h: 0.45,
      fontSize: 10, color: MUTED, bold: true,
      align: "center", charSpacing: 1, fontFace: "Calibri"
    });
  });
  s.addShape(pptx.ShapeType.rect, {
    x: 1.5, y: 2.2, w: 10.8, h: 0.03,
    fill: { color: BORDER }, line: { color: BORDER }
  });

  // Rows
  rows.forEach((r, ri) => {
    const rowY = 2.3 + ri * 0.75;
    if (r.accent) {
      s.addShape(pptx.ShapeType.rect, {
        x: 1.3, y: rowY, w: 11.2, h: 0.65,
        fill: { color: ACCENT_D }, line: { color: ACCENT, pt: 1 }, rectRadius: 0.08
      });
    }
    const vals = [r.scenario, r.ads, r.gross, r.share];
    vals.forEach((v, i) => {
      s.addText(v, {
        x: cols[i], y: rowY + 0.1, w: colWidths[i], h: 0.45,
        fontSize: 14, color: r.accent ? (i === 0 ? ACCENT : TEXT) : (i === 0 ? TEXT : MUTED),
        bold: r.accent, align: "center", fontFace: "Calibri"
      });
    });
  });

  // Big number
  s.addText("R$ 15.000", {
    x: 1, y: 4.15, w: W / 2 - 1, h: 1.1,
    fontSize: 68, color: ACCENT, bold: true,
    align: "center", fontFace: "Calibri"
  });
  s.addText("SEU SHARE · MÊS 1\nCENÁRIO CONSERVADOR", {
    x: 1, y: 5.25, w: W / 2 - 1, h: 0.55,
    fontSize: 9, color: MUTED, bold: true,
    align: "center", charSpacing: 1, fontFace: "Calibri", lineSpacingMultiple: 1.4
  });

  // Divisor vertical
  s.addShape(pptx.ShapeType.rect, {
    x: W / 2 - 0.02, y: 4.1, w: 0.04, h: 1.8,
    fill: { color: BORDER }, line: { color: BORDER }
  });

  s.addText("R$ 1,2M+", {
    x: W / 2 + 0.5, y: 4.15, w: W / 2 - 1.2, h: 1.1,
    fontSize: 68, color: ACCENT, bold: true,
    align: "center", fontFace: "Calibri"
  });
  s.addText("SEU SHARE · ANO 1\nCENÁRIO MODERADO", {
    x: W / 2 + 0.5, y: 5.25, w: W / 2 - 1.2, h: 0.55,
    fontSize: 9, color: MUTED, bold: true,
    align: "center", charSpacing: 1, fontFace: "Calibri", lineSpacingMultiple: 1.4
  });

  s.addText("Baseado em funis ativos com públicos similares. Começamos conservador, escalamos com dado real.", {
    x: 1.5, y: 6.05, w: W - 3, h: 0.35,
    fontSize: 11, color: DARK, italic: true,
    align: "center", fontFace: "Calibri"
  });
  s.addText("Você não investe um centavo — eu coloco o capital de ads e recupero do resultado.", {
    x: 1.5, y: 6.45, w: W - 3, h: 0.35,
    fontSize: 13, color: TEXT, bold: true,
    align: "center", fontFace: "Calibri"
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 12 — PROTEÇÃO (pessoal, não jurídico)
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bg(s);

  tag(s, "SUA SEGURANÇA", 0.5);
  s.addText([
    { text: "Tudo que eu prometo,\n", options: { color: TEXT } },
    { text: "eu assino.", options: { color: ACCENT } },
  ], {
    x: 1, y: 0.85, w: W - 2, h: 1.6,
    fontSize: 52, bold: true, align: "center",
    fontFace: "Calibri", lineSpacingMultiple: 1.1
  });

  divider(s, 2.55);

  s.addText("Tudo que combinamos entra no contrato.\nNada fica só na palavra.", {
    x: 1.5, y: 2.75, w: W - 3, h: 0.85,
    fontSize: 18, color: MUTED, align: "center",
    fontFace: "Calibri", lineSpacingMultiple: 1.45
  });

  const items = [
    { bold: "Divisão de receita clara e verificável", rest: " — você acompanha em tempo real." },
    { bold: "Seu conteúdo permanece seu", rest: " — nada é usado fora desta parceria sem sua autorização." },
    { bold: "Sem exclusividade", rest: " — você mantém todos os seus projetos e atendimentos." },
    { bold: "Saída garantida", rest: " — se quiser sair, a operação tem transição estruturada." },
  ];

  items.forEach((item, i) => {
    s.addText("✓", {
      x: 1.5, y: 3.75 + i * 0.72, w: 0.4, h: 0.55,
      fontSize: 18, color: ACCENT, bold: true, fontFace: "Calibri"
    });
    s.addText([
      { text: item.bold, options: { color: TEXT, bold: true } },
      { text: item.rest, options: { color: MUTED } },
    ], {
      x: 2.05, y: 3.75 + i * 0.72, w: W - 3.6, h: 0.55,
      fontSize: 15, fontFace: "Calibri", lineSpacingMultiple: 1.3
    });
  });

  s.addText("Você não precisa acreditar na minha palavra.\nVocê vai ter tudo escrito, assinado e verificável.", {
    x: 1.5, y: 6.65, w: W - 3, h: 0.65,
    fontSize: 15, color: TEXT, bold: true,
    align: "center", fontFace: "Calibri", lineSpacingMultiple: 1.4
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 13 — CTA (a pergunta impossível de dizer não)
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bgAccent(s);

  s.addText("O que te impediria\nde tentar?", {
    x: 1, y: 0.8, w: W - 2, h: 2.2,
    fontSize: 64, color: TEXT, bold: true,
    align: "center", fontFace: "Calibri",
    lineSpacingMultiple: 1.1
  });

  s.addText("Você tem a autoridade. Eu tenho a operação.\nFalta apenas decidir se você quer ver isso funcionando.", {
    x: 1.5, y: 3.1, w: W - 3, h: 0.85,
    fontSize: 22, color: "E9D5FF", // lilás claro
    align: "center", fontFace: "Calibri", lineSpacingMultiple: 1.45
  });

  s.addShape(pptx.ShapeType.rect, {
    x: 3.5, y: 4.1, w: 6.3, h: 0.03,
    fill: { color: "6d28d9" }, line: { color: "6d28d9" }
  });

  s.addText([
    { text: "Esta call de 30 minutos não é para te vender nada.\n", options: { color: "C4B5FD" } },
    { text: "É para você entender, com todos os dados na mesa, se faz sentido.\n\n", options: { color: "C4B5FD" } },
    { text: "Se fizer — avançamos.\n", options: { color: TEXT, bold: true } },
    { text: "Se não fizer — você sai com clareza do que é possível para o seu negócio.\n\n", options: { color: "C4B5FD" } },
    { text: "Nos dois casos, você ganha.", options: { color: TEXT, bold: true } },
  ], {
    x: 1.5, y: 4.3, w: W - 3, h: 2.5,
    fontSize: 17, fontFace: "Calibri", align: "center",
    lineSpacingMultiple: 1.7
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 14 — CONTATO
// ─────────────────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide();
  bg(s, true);

  // Linha topo
  s.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: W, h: 0.06,
    fill: { color: ACCENT }, line: { color: ACCENT }
  });

  tag(s, "A PRÓXIMA JOGADA É SUA", 1.3);

  s.addText("Kauã Rodriguez", {
    x: 1, y: 1.75, w: W - 2, h: 0.5,
    fontSize: 18, color: MUTED, align: "center", fontFace: "Calibri"
  });
  s.addText("@okauarodriguez", {
    x: 1, y: 2.2, w: W - 2, h: 1.5,
    fontSize: 80, color: ACCENT, bold: true,
    align: "center", fontFace: "Calibri"
  });
  s.addText("DIRECT RESPONSE  ·  COPRODUÇÃO COM EXPERTS", {
    x: 1, y: 3.85, w: W - 2, h: 0.4,
    fontSize: 11, color: MUTED, align: "center",
    charSpacing: 3, fontFace: "Calibri"
  });

  s.addShape(pptx.ShapeType.rect, {
    x: 4, y: 4.5, w: 5.33, h: 0.04,
    fill: { color: BORDER }, line: { color: BORDER }
  });

  s.addText("A próxima jogada é sua.", {
    x: 1, y: 4.75, w: W - 2, h: 0.5,
    fontSize: 22, color: DARK, bold: true,
    align: "center", fontFace: "Calibri"
  });

  // Linha rodapé
  s.addShape(pptx.ShapeType.rect, {
    x: 0, y: H - 0.06, w: W, h: 0.06,
    fill: { color: ACCENT }, line: { color: ACCENT }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SALVAR
// ─────────────────────────────────────────────────────────────────────────────
const outputPath = "c:/Users/Desktop/Downloads/grupoaura/operacoes/apresentacoes/monica/Pitch-Monica.pptx";

pptx.writeFile({ fileName: outputPath })
  .then(() => {
    console.log("✅ Pitch-Monica.pptx gerado com sucesso!");
    console.log("📁", outputPath);
  })
  .catch(err => {
    console.error("❌ Erro:", err);
    process.exit(1);
  });
