# Spy — Funil Completo Elida Dias
**Data:** 2026-04-26  
**Domínio:** elidadias.com.br  
**Produto:** Sistema Milionário (Shopee/renda extra)

---

## ESTRUTURA DO FUNIL

```
[TRÁFEGO PAGO - Meta Ads]
         ↓
[VSL / PÁGINA DE VENDAS]
elidadias.com.br/googleads/
         ↓
[CHECKOUT FRONT-END]
pay.hub.la/pNvftlqYLpsT2RlpwLID
Preço: R$ 197 (parcelado em até 12x)
         ↓
[PÓS-COMPRA: QUIZ]
elidadias.com.br/vslquiz/
→ "Qual o seu perfil de resultados?"
→ Resultado: "Perfil Nível Diamante"
→ CTA: "Quero o Perfil Diamante"
         ↓
[UPSELL 1 — "Modo Dólar"]
elidadias.com.br/up1-dolar/
Preço: R$ 497
Checkout: pay.hub.la/pNvftlqYLpsT2RlpwLID/upsell
Produto: Modo Dólar Automático
→ US$60.000 validado, páginas em inglês prontas, atualiz. mensais
         ↓
    [Recusou U1?]
         ↓
[DOWNSELL 1 — Desconto U1]
elidadias.com.br/down1/
Preço: R$ 397 (desconto de R$100)
         ↓
    [Recusou D1?]
         ↓
[UPSELL 2 — "Sistema Milionário" high ticket ~R$2.000]
elidadias.com.br/up2-million/
Checkout: pay.hub.la/xDWnOm7zJfU1TwRdmlRK
Produto: Sistema Milionário Premium
         ↓
    [Recusou U2?]
         ↓
[DOWNSELL 2 — Última Chance R$150 desconto]
elidadias.com.br/down2-dolar/
Preço: R$ 449 (de R$597)
Checkout: pay.hub.la/xDWnOm7zJfU1TwRdmlRK/upsell
Hook: "Antes de fechar essa página... Eu preciso te mostrar uma última coisa"
"ou multiplicar TUDO ISSO em dólar também"
```

---

## PÁGINAS MAPEADAS (sitemap completo)

| Página | Função | URL |
|--------|--------|-----|
| `/googleads/` | VSL principal (tráfego pago) | Front-end da venda |
| `/vslquiz/` | Quiz pós-compra → upsell | Trigger: compra confirmada |
| `/up1-dolar/` | Upsell 1 — Modo Dólar R$497 | Pay: pNvftlqYLpsT2RlpwLID/upsell |
| `/down1/` | Downsell U1 — R$397 | R$100 de desconto no Modo Dólar |
| `/up2-million/` | Upsell 2 — Sistema Milionário HT | Pay: xDWnOm7zJfU1TwRdmlRK |
| `/down2-dolar/` | Downsell U2 — R$449 | Pay: xDWnOm7zJfU1TwRdmlRK/upsell |
| `/o-novo-jogo/` | CPL — Lançamento 3 dias ao vivo | Captação nome + telefone |
| `/o-novo-jogo-ads/` | Variante ads da CPL | — |
| `/presell/` | Pré-venda / recomendação | → checkout pay.hub.la/pNvftlqYLpsT2RlpwLID |

---

## ANÁLISE DA VSL PRINCIPAL (/googleads/)

**Plataforma:** INLEAD.DIGITAL  
**Formato:** VSL com player de vídeo + botão CTA abaixo

**Desqualificadores usados:**
- Sem aparecer nas redes
- Sem precisar falar com ninguém
- Sem seguidores
- Sem estoque
- Não é Shopee, não é X1, não é TikTok Shop (mecanismo diferenciado)

**Destaques de copy:**
- "R$325.000 faturados" (resultado real e específico)
- "Método testado em 30 mil alunas"
- Imagem de resultado no celular (screenshot de venda)

---

## ANÁLISE DO QUIZ PÓS-COMPRA (/vslquiz/)

**Mecanismo inteligente:** Quiz de "perfil" que serve como gancho emocional para o upsell.

**Fluxo:**
1. Comprou → vai para o quiz
2. Responde perguntas sobre si mesma
3. Resultado: "Você tem perfil Nível Diamante"
4. Implicação: "Você tem potencial para resultados muito maiores"
5. CTA: aceitar o upgrade para desbloquear esse potencial

**Por que funciona:** A pessoa acabou de comprar (estado de compra ativo) + o quiz cria identidade de "alto potencial" + o upsell é apresentado como o desbloqueio desse potencial.

---

## ANÁLISE DA CPL (/o-novo-jogo/)

**Formato:** 3 dias de aula ao vivo — 17, 18 e 19 de março às 20h  
**Captação:** Nome + telefone (sem email)  
**Vagas:** 500 (437 preenchidas / 63 restantes — escassez visual)

**Headline:** "VOU REVELAR O JOGO QUE FAZ A NOSSA OPERAÇÃO LUCRAR R$100 MIL TODO DIA."

**Bio Elida (copy de autoridade):**
- De casa de um cômodo na periferia de Belém do Pará
- Aos 22 anos fez o primeiro milhão
- Com os últimos R$200 no cartão → R$1.000 de vendas no mesmo dia
- +30 mil alunas formadas
- Operação de +R$20 milhões

**Urgência:** "Essa aula não ficará gravada e não terá Replay"  
**Desqualificadores:** mesmos da VSL principal

---

## ANÁLISE DO DOWNSELL 2 (/down2-dolar/)

**Hook de abertura:**  
"Antes de você fechar essa página... Eu preciso te mostrar uma última coisa"

**Objeções tratadas explicitamente:**
- "Será que é só mais uma oferta?"
- "Já gastei com o Sistema Milionário, será que agora é o melhor momento?"
- "Será que eu realmente preciso disso?"

**Argumento central:** "Você já deu o passo mais difícil. Você já DECIDIU entrar pro Sistema Milionário. Você já confiou. Você já investiu. Você já começou."

**Preço:** R$449 (de R$597 — R$150 de desconto)  
**Urgência:** Barra vermelha no topo: "ÚLTIMA CHANCE: R$150 de desconto • Essa página não volta mais"

---

## CHECKOUTS (Hub.la)

| Produto | ID Hub.la |
|---------|-----------|
| Front-end (Sistema Milionário) | `pNvftlqYLpsT2RlpwLID` |
| Upsell 1 (Modo Dólar R$497) | `pNvftlqYLpsT2RlpwLID/upsell` |
| Upsell 2 / Downsell 2 | `xDWnOm7zJfU1TwRdmlRK` |
| Downsell 2 checkout | `xDWnOm7zJfU1TwRdmlRK/upsell` |

---

## STACK DE VALOR TOTAL (se comprar tudo)

| Produto | Preço |
|---------|-------|
| Sistema Milionário (front) | R$ 197 |
| Modo Dólar (U1) | R$ 497 |
| Sistema Milionário Premium (U2) | ~R$ 2.000 |
| **Total máximo** | **~R$ 2.694** |

---

## INSIGHTS PARA NOSSA OPERAÇÃO

1. **Quiz como gatilho de upsell** — mecanismo elegante. A pessoa se auto-qualifica como "alto potencial" e o upsell se apresenta como desbloqueio. Dá pra replicar.

2. **CPL antes do VSL** — a Elida roda lançamento (CPL 3 dias) paralelo à operação de tráfego pago direto. Dois canais de entrada para o mesmo produto.

3. **Desqualificadores como diferenciação** — "Não é Shopee, não é X1, não é TikTok Shop" funciona porque reposiciona o mecanismo em relação ao que o mercado já conhece.

4. **Downsell com reconhecimento de objeção** — a copy do down2 lista literalmente o que a pessoa está pensando e valida antes de rebater. Técnica de Voss (tactical empathy) aplicada em copy.

5. **Escassez visual na CPL** — barra de vagas (437/500) sem cronômetro. Escassez social, não temporal. Funciona bem para captação.

6. **Produto de dólar como upsell** — o front-end é em real (Shopee), o upsell é em dólar. Amplia o sonho sem mudar o mecanismo principal.
