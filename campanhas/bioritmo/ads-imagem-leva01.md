---
tipo: campanha
produto: BioRitmo
fase: teste-inicial
data: 2026-04-14
status: pronto-para-subir
---

# BioRitmo — Ads de Imagem · Leva 01

## Estratégia de Teste

- **6 ads** no total
- **ABO 1-3-2** — 3 conjuntos, 2 criativos por conjunto
- **R$10/dia por conjunto** = R$30/dia
- **3 dias** = R$90 total
- Se tiver mais caixa → duplica em segunda conta + testa CBO e ABO

### Distribuição dos conjuntos

| Conjunto | Ad A | Ad B | Lógica |
|---|---|---|---|
| **Conjunto 1** | Ad 01 (prato+relógio) | Ad 05 (ovo+branco) | Dark vs Light |
| **Conjunto 2** | Ad 03 (caderno) | Ad 06 (stories nativo) | Orgânico vs Nativo |
| **Conjunto 3** | Ad 02 (tabela) | Ad 04 (bubbles) | Dados vs Visual |

### Métricas para acompanhar
- CTR acima de 1,5% = criativo chamando atenção
- CPL abaixo de R$3 = conjunto viável para escalar
- Se nenhum conjunto chegar em CPL aceitável → ajusta copy antes de escalar

---

## Fórmula Base (extraída do Criativo 01 — Dieta Carnívora)

> **Headline (mecanismo)** + **Promessa (resultado + personalização)** + **Elemento de segmentação** + **Imagem curiosa com crença subconsciente** + **CTA para quiz**

---

## AD 01 — Prato + Relógio (Dark)

**Formato:** 1080x1920px (Stories/Reels 9:16)
**Estética:** Dark, elegante, fundo preto

### Copy
- **Headline:** ELIMINE 7KG DA BARRIGA DA MENOPAUSA EM 21 DIAS
- **Subheadline:** de acordo com a sua fase hormonal
- **Segmentação:** Pré-menopausa · Menopausa · Pós-menopausa
- **Corpo:** Sem dieta. Sem academia. Descubra seu protocolo agora.
- **CTA:** CLIQUE EM "SAIBA MAIS" E RECEBA SEU DIAGNÓSTICO GRATUITO

### Prompt GPT (Imagem Hero)
```
Photorealistic close-up of a white ceramic plate on a 
pure matte black surface. In the exact center of the plate, 
placed like a meal being served, sits a vintage bronze 
analog clock face showing 8:00 AM, slightly tilted at 15 
degrees. Around the clock, carefully arranged on the plate: 
a small piece of grilled salmon, a few blueberries, three 
walnuts, and one sprig of fresh rosemary. Dramatic studio 
lighting from top-left creating soft shadows. The mood is 
elegant, mysterious and intriguing — high-end food 
photography with an unexpected twist. Pure matte black 
background. Camera angle: 40 degrees from above. 
Ultra-high definition, photorealistic, no text, no watermark.
```

### Prompt GPT (Ad Completo)
```
Generate a complete vertical social media advertisement 
image (1080x1920px, 9:16 ratio) ready to run on Meta 
Stories and Reels. No watermark, no extra elements. 
No white gaps or white areas anywhere in the image.

OVERALL STYLE:
Pure matte black background (#0a0a0a) everywhere. 
Zero white space. Color palette: black background, 
white text, orange (#f97316) accents, zinc gray (#a1a1aa) 
for secondary text. All fonts: Montserrat family.

TOP SECTION (top 30% of image):
Large bold white uppercase text centered:
"ELIMINE 7KG DA BARRIGA DA MENOPAUSA"
Below it, same size, bright orange, underlined:
"EM 21 DIAS"
Below that, smaller zinc gray text:
"de acordo com a sua fase hormonal"

MIDDLE SECTION (center 45% of image):
Photorealistic close-up of a dark matte black stone plate 
that blends completely into the black background. 
On the plate: a vintage aged-bronze analog clock, 
highly photorealistic, showing 8:00 AM, slightly tilted 
15 degrees, realistic glass and metal frame. Around the 
clock: grilled salmon on the left, blueberries scattered, 
three walnuts on the right, fresh rosemary sprig in front. 
Dramatic top-left golden studio lighting. The image fills 
the full width (1080px) with no margins. The image 
transitions seamlessly into the black background.

BOTTOM SECTION (bottom 25% of image):
Directly connected to the hero image with no gap, 
on pure black background:

Small zinc gray text centered: "Selecione sua fase:"

Three side-by-side boxes, transparent black background, 
2px solid orange (#f97316) border only, border-radius 8px:
[ Pré-menopausa ]  [ Menopausa ]  [ Pós-menopausa ]
White bold Montserrat text inside each box.

Large solid orange (#f97316) button, full width minus 40px 
margins, border-radius 14px, white Montserrat ExtraBold 
uppercase text:
"CLIQUE EM SAIBA MAIS E RECEBA SEU DIAGNÓSTICO GRATUITO"

Below button, small zinc gray text:
"🔒 Gratuito · Resultado em 2 minutos · Sem cadastro"
```

---

## AD 02 — Tabela Dark

**Formato:** 1080x1350px (Feed 4:5)
**Estética:** Dark, elegante, tabela de dados

### Copy
- **Headline:** JEJUM INTERMITENTE NA MENOPAUSA
- **Promessa:** COMO ELIMINAR 7KG DA BARRIGA SEM FAZER EXERCÍCIOS
- **Subheadline:** de acordo com a sua fase hormonal e peso atual
- **CTA:** CLIQUE EM "SAIBA MAIS" E DESCUBRA SEU PROTOCOLO GRATUITO

### Tabela
| Fase | Peso atual | Janela de jejum ideal |
|---|---|---|
| Pré-menopausa | 50-60kg | 14:10 |
| Pré-menopausa | 60-70kg | 16:8 |
| Pré-menopausa | 70-80kg | 16:8 |
| Pré-menopausa | 80kg+ | 18:6 |
| Menopausa | 50-60kg | 16:8 |
| Menopausa | 60-70kg | 18:6 |
| Menopausa | 70-80kg | 18:6 |
| Menopausa | 80kg+ | OMAD |
| Pós-menopausa | 50-60kg | 16:8 |
| Pós-menopausa | 60-70kg | 18:6 |
| Pós-menopausa | 70-80kg | OMAD |
| Pós-menopausa | 80kg+ | OMAD |

### Prompt GPT (Ad Completo)
```
Generate a complete vertical social media advertisement image 
(1080x1350px, 4:5 ratio) ready to run on Meta feed.
No watermark, no extra elements. No white gaps anywhere.

OVERALL STYLE:
Pure matte black background (#0a0a0a) everywhere.
Color palette: black background, white text, orange (#f97316) 
accents, zinc gray (#a1a1aa) secondary text.
All fonts: Montserrat family.

TOP SECTION (top 20% of image):
Line 1: "JEJUM INTERMITENTE NA MENOPAUSA"
Montserrat ExtraBold, 44px, white, center, uppercase
Line 2: "COMO ELIMINAR 7KG DA BARRIGA SEM FAZER EXERCÍCIOS"
Montserrat ExtraBold, 36px, orange #f97316, center, uppercase
Line 3: "de acordo com a sua fase hormonal e peso atual"
Montserrat Medium, 20px, zinc gray #a1a1aa, center

MIDDLE SECTION (center 60% of image):
Clean data table, full width minus 40px margins.
Table background: #111111, border-radius: 16px, padding: 16px

Header row: background #f97316 orange, white bold text 16px
Columns: "Fase" | "Peso Atual" | "Janela Ideal"

Rows alternating #1a1a1a and #111111, white SemiBold 15px:
Row 1:  Pré-menopausa | 50-60 kg | 14:10
Row 2:  Pré-menopausa | 60-70 kg | 16:8
Row 3:  Pré-menopausa | 70-80 kg | 16:8
Row 4:  Pré-menopausa | 80 kg+   | 18:6
Row 5:  Menopausa     | 50-60 kg | 16:8
Row 6:  Menopausa     | 60-70 kg | 18:6
Row 7:  Menopausa     | 70-80 kg | 18:6
Row 8:  Menopausa     | 80 kg+   | OMAD
Row 9:  Pós-menopausa | 50-60 kg | 16:8
Row 10: Pós-menopausa | 60-70 kg | 18:6
Row 11: Pós-menopausa | 70-80 kg | OMAD
Row 12: Pós-menopausa | 80 kg+   | OMAD

Add 2px orange left border on rows 1, 5, 9.

BOTTOM SECTION (bottom 20% of image):
Orange button full width minus 40px, height 72px, 
border-radius 14px, white ExtraBold 20px uppercase:
"CLIQUE EM SAIBA MAIS E DESCUBRA SEU PROTOCOLO GRATUITO"
Below: zinc gray 14px: "🔒 Gratuito · Resultado em 2 minutos · Sem cadastro"
```

---

## AD 03 — Caderno Manuscrito

**Formato:** 1080x1350px (Feed 4:5)
**Estética:** Hand-drawn, caderno, orgânico

### Copy
- **Headline:** JEJUM INTERMITENTE NA MENOPAUSA
- **Promessa:** Como perder **7kg da barriga** sem fazer exercícios
- **Grid objetivo:** Perder de 1 a 5kg / **Perder de 5 a 10kg** (selecionado) / Perder mais de 10kg / Eliminar a barriga
- **Campos:** Sua fase: Menopausa · Seu peso: 78kg · Sua idade: 52 · Refeições diárias: 3
- **CTA:** FAÇA O TESTE

### Prompt GPT
```
Generate a vertical social media advertisement image 
(1080x1350px, 4:5 ratio) that looks EXACTLY like a 
hand-drawn sketch on white notepad paper. 
Organic, handmade, authentic — NOT a polished digital ad.

OVERALL STYLE:
The entire image background is pure white (#FFFFFF).
The notepad sits on pure white background — no dark surface.
White/cream paper texture for the notepad page.
Spiral binding at the top, drawn naturally.
All text and lines in black marker/pen, slightly imperfect.
Key words highlighted with yellow marker effect.
One grid cell highlighted with pink/coral marker effect.
Rough edges, natural ink texture.

TOP SECTION:
Hand-drawn black marker, bold, centered:
"JEJUM INTERMITENTE NA MENOPAUSA"
Below: "Como perder"
"7kg da barriga" — thick yellow highlighter behind these words
"sem fazer exercícios"

MIDDLE SECTION:
Label left-aligned: "Seu objetivo atual:"
2x2 hand-drawn grid:
Top-left: "Perder de 1 a 5kg"
Top-right: "Perder de 5 a 10kg" — pink/coral highlight fill
Bottom-left: "Perder mais de 10kg"
Bottom-right: "Eliminar a barriga"

Four hand-drawn form fields:
Field 1 (left): "Sua fase:" / "Menopausa"
Field 2 (right): "Seu peso:" / "78 kg"
Field 3 (left): "Sua idade:" / "52"
Field 4 (right): "Refeições diárias:" / "3"

BOTTOM SECTION:
Solid orange (#f97316) button, rounded corners, full width:
"FAÇA O TESTE" — white bold uppercase

Pure white background everywhere. No digital effects.
No watermark.
```

---

## AD 04 — Bubbles de Peso (Dark)

**Formato:** 1080x1350px (Feed 4:5)
**Estética:** Dark, food background, bubbles laranja

### Copy
- **Headline:** JEJUM IDEAL PARA A SUA FASE
- **Promessa:** Para eliminar até 7KG da barriga da menopausa sem restrições
- **Bubbles:** 60kg · 65kg · 70kg · 75kg · 80kg · 85kg · 90kg · 95kg
- **Texto:** Descubra em quanto tempo você pode eliminar até 7kg da barriga seguindo o protocolo ideal para o seu peso na menopausa
- **CTA:** CALCULAR

### Prompt GPT
```
Generate a complete vertical social media advertisement 
image (1080x1350px, 4:5 ratio) ready to run on Meta feed.
No watermark, no extra elements. Portrait orientation.

OVERALL STYLE:
Dark overlay on top of a food background.
Background: photorealistic top-down shot of colorful healthy 
meal — grilled salmon, blueberries, walnuts, avocado, 
fresh vegetables — filling entire image.
Dark semi-transparent overlay (#000000 at 65% opacity).
All fonts: Montserrat family.
Colors: white text, orange (#f97316) accents.

TOP SECTION:
"JEJUM IDEAL PARA A SUA FASE"
Montserrat ExtraBold, 52px, white, center, uppercase

"Para eliminar até 7KG da barriga da menopausa"
Montserrat Bold, 28px, orange #f97316, center

"sem restrições"
Montserrat Bold, 28px, orange #f97316, center

MIDDLE SECTION:
8 circular bubbles, 2 rows of 4, centered, equal spacing.
Each bubble: perfect circle, diameter 160px,
background #000000 at 70%, border 2px solid #f97316,
text Montserrat ExtraBold 26px white centered.
Row 1: 60 kg · 65 kg · 70 kg · 75 kg
Row 2: 80 kg · 85 kg · 90 kg · 95 kg

BOTTOM SECTION:
White Montserrat Medium 20px centered:
"Descubra em quanto tempo você pode eliminar até 7kg 
da barriga seguindo o protocolo ideal para o seu peso 
na menopausa"

Orange button (#f97316), centered, width 400px, 
height 64px, border-radius 32px:
"CALCULAR" — Montserrat ExtraBold 22px white uppercase
```

---

## AD 05 — Ovo + Idades (Fundo Branco)

**Formato:** 1080x1080px (Feed quadrado 1:1)
**Estética:** Clean, branco, orgânico

### Copy
- **Headline:** COMO FAZER O JEJUM INTERMITENTE COM BASE NA SUA IDADE PARA ELIMINAR A BARRIGA DA MENOPAUSA?
- **Idades:** 40-45 · 45-50 · 50-55 · 55-65
- **Imagem:** Ovo frito centralizado em círculo verde
- **CTA:** CALCULAR (verde)

### Prompt GPT
```
Generate a complete square social media advertisement image
(1080x1080px, 1:1 ratio) ready to run on Meta feed.
No watermark, no extra elements.

OVERALL STYLE:
Pure white (#FFFFFF) background — clean, minimal, bright.
No textures, no gradients, no dark overlay.
Color palette: black text, green (#22c55e) accents.
All fonts: Montserrat family.

TOP SECTION:
"COMO FAZER O JEJUM INTERMITENTE
COM BASE NA SUA IDADE PARA
ELIMINAR A BARRIGA DA MENOPAUSA?"
Montserrat ExtraBold, 38px, black, center, uppercase

MIDDLE SECTION:
Photorealistic fried egg, perfectly round, sunny side up,
bright orange yolk. Egg sits inside perfect circle with 
solid green (#22c55e) background. Circle diameter: 420px.
Centered horizontally.

Four age labels in the corners:
Top-left: "Idade:" SemiBold 22px black / "40 - 45" ExtraBold 28px black
Top-right: "Idade:" SemiBold 22px black / "45 - 50" ExtraBold 28px black
Bottom-left: "Idade:" SemiBold 22px black / "50 - 55" ExtraBold 28px black
Bottom-right: "Idade:" SemiBold 22px black / "55 - 65" ExtraBold 28px black

BOTTOM SECTION:
Solid green (#22c55e) button, centered, width 360px, 
height 64px, border-radius 32px:
"CALCULAR" — Montserrat ExtraBold 24px white uppercase
```

---

## AD 06 — Stories Nativo (Pergunta + Resposta)

**Formato:** 1080x1920px (Stories 9:16)
**Estética:** Nativo Instagram Stories — parece conteúdo orgânico

### Copy

**Caixinha de pergunta:**
> "Jejum intermitente funciona para quem está na menopausa?"

**Resposta:**
> Claro que funciona, é o método mais eficaz justamente para a menopausa.
>
> O problema é que a maioria das mulheres faz jejum genérico, que não foi feito para o relógio metabólico da menopausa.
>
> Quer descobrir o por que tudo que você tentou nunca te ajudou a emagrecer?
>
> Clica no link abaixo e faça o diagnóstico gratuito

**Visual:** Foto antes/depois de paciente real (-14kg / 3 meses / 49 anos) na parte inferior

---

## Checklist antes de subir

- [ ] Ad 01 — imagem gerada e salva
- [ ] Ad 02 — imagem gerada e salva
- [ ] Ad 03 — imagem gerada e salva
- [ ] Ad 04 — imagem gerada e salva
- [ ] Ad 05 — imagem gerada e salva
- [ ] Ad 06 — foto antes/depois + montagem pronta
- [ ] Links de checkout da Greenn prontos
- [ ] UTMs configurados por ad
- [ ] Conjuntos criados no Meta (ABO 1-3-2)
- [ ] Budget: R$10/dia por conjunto
