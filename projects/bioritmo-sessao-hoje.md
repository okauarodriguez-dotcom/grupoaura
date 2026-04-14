---
tipo: plano-sessao
produto: BioRitmo
data: 2026-04-13
status: em-andamento
---

# BioRitmo — Sessão de Hoje

## Pendências para finalizar hoje

- [ ] Finalizar PV no Inlead (todos os blocos)
  - [x] Headline
  - [x] Vídeo VTurb (embed)
  - [x] Script delay (525s = 8:45)
  - [x] CTA com classe `esconder`
  - [x] Prova social com foto (antes/depois)
  - [ ] Urgência + preço (com classe `esconder`)
  - [ ] Stack de entregáveis
  - [ ] Bônus (4 presentes)
  - [ ] Mais depoimentos
  - [ ] Garantia + preço final
  - [ ] FAQ
- [ ] Testar a PV (aba anônima — verificar delay funcionando)
- [ ] Instalar webhook no Inlead
- [ ] Finalizar ads

---

## Estrutura da PV (copy pronta — v3.0 baseada no C03)

### Bloco de delay
```html
<style>.esconder { display: none; }</style>
<script>
  var delaySeconds = 525;
  var player = document.querySelector("vturb-smartplayer");
  player.addEventListener("player:ready", function() {
    player.displayHiddenElements(delaySeconds, [".esconder"], { persist: true });
  });
</script>
```

### Ordem dos blocos no Inlead
1. Headline
2. Vídeo VTurb
3. HTML (script delay)
4. Botão CTA — classe `esconder` — "QUERO MEU ACESSO AO BIORITMO AGORA →"
5. Texto — "ALGUMAS MULHERES QUE JÁ RESSINCRONIZARAM O RELÓGIO METABÓLICO"
6. Imagem — foto antes/depois
7. Texto — Depoimento Rosana F. (7kg em 21 dias, São Paulo)
8. Texto — Depoimento Ana Paula R. (7 dias, Curitiba)
9. Urgência + preço — classe `esconder` — 94% OFF, R$29,90
10. Botão CTA 2 — classe `esconder`
11. Texto — Stack de entregáveis
12. Botão CTA 3
13. Texto — 4 presentes (bônus)
14. Botão CTA 4
15. Texto — Depoimentos extras (Cristina, Vera, Margarida)
16. Texto — Garantia + preço final
17. Botão CTA principal
18. Texto — FAQ

---

## Copy completa disponível em
`produtos/bioritmo/pv-bioritmo.md` (v2.0)
