# gabriel.os — PRD

Escrito em 2026-08-19. Substitui a abordagem anterior (landing de scroll), que
foi descartada por não atender ao briefing.

## 1. Por que a v1 falhou

O briefing em `PRD-portifolio/ideias do meu port.txt` pedia quatro coisas.
A entrega anterior não atendeu nenhuma:

| Pedido | Entregue |
| --- | --- |
| "uma espécie de intranet minha" | Landing page de scroll vertical |
| "tudo que envolve a minha pessoa" | Só tese de engenharia |
| "ui/ux diferenciado" | O layout de portfólio mais convencional que existe |
| "usar e **abusar** de animações, efeitos, premium" | Fade-ins discretos |

Causa raiz: o canvas `Portfolio Gabriel Arantes v2.dc.html` foi tratado como
especificação, quando o próprio autor avisou que era só exemplo. O esforço foi
todo para auditar a veracidade do conteúdo — necessário — e nada para o produto.

Métricas de manutenção do vault (notas órfãs, links quebrados) foram ao ar como
destaque. Isso é diagnóstico interno de processo, não argumento para quem
contrata. Sai da vitrine.

## 2. A tensão central

**Intranet** e **portfólio** têm usuários opostos:

| | Intranet | Portfólio |
| --- | --- | --- |
| Para quem | O dono | O visitante |
| Frequência | Volta sempre | Uma vez, talvez |
| Tempo disponível | Ilimitado | ~30 segundos |
| Densidade ideal | Alta | Baixa na entrada |
| Recompensa | Exploração | Resposta rápida |

Um desktop metafórico puro serve ao primeiro e hostiliza o segundo. A maior
parte do tráfego virá do LinkedIn, **em celular**, de alguém decidindo em
segundos se continua lendo.

**Decisão:** o OS é a experiência, mas nunca é o pedágio. Toda substância tem
um caminho que não exige descobrir como operar a interface.

## 3. Público e trabalho a ser feito

| Público | O que precisa em 30s | Prioridade |
| --- | --- | --- |
| Recrutador / tech lead | Ele sabe construir? Que stack? Está disponível? | 1 |
| Cliente de freelance | Ele já entregou algo parecido com o que preciso? | 2 |
| Par / comunidade | Como ele pensa e trabalha? | 3 |
| O próprio Gabriel | Um lugar que é dele e dá gosto de mostrar | 4 |

O público 4 é o que justifica o conceito. Os públicos 1 e 2 são os que pagam a
conta. A arquitetura precisa servir os dois sem pedir licença.

## 4. Arquitetura — boot com resposta, desktop com exploração

O visitante nunca cai num desktop vazio.

**Boot (3–4s, pulável, uma vez por sessão).** Sequência animada curta que já
responde as três perguntas do recrutador enquanto "liga a máquina": nome, o que
faz, disponibilidade. Quem tem pressa já saiu daqui informado. Quem tem
curiosidade continua.

**Estado inicial do desktop: já povoado.** Duas janelas abertas de saída —
`sobre` e `projetos`. Ninguém precisa descobrir que dá para abrir coisa: já
está aberto, e a descoberta é sobre o *resto*.

**Dock.** Sempre visível, com rótulo. É o menu, não um easter egg.

**Mobile: não é desktop.** A metáfora vira pilha de cards em tela cheia com o
dock como barra inferior — linguagem que o celular já tem. O OS não é
"desktop encolhido"; é o mesmo conteúdo em outra gramática.

**Rota por app.** Cada app tem URL própria (`/projetos`, `/cerebro`). Isso dá
link compartilhável, botão voltar funcionando e conteúdo indexável.

## 5. Inventário de apps

| App | Conteúdo | Público | Fase |
| --- | --- | --- | --- |
| `sobre` | Trajetória: Formiga/037, 4 anos estudando, 3 profissionais, 1 na Origami | 1, 3 | v1 |
| `projetos` | Os 8 projetos, com detalhe, stack e link quando público | 1, 2 | v1 |
| `codigo` | Trecho real e comentado de domínio tipado | 1, 3 | v1 |
| `cerebro` | O vault como grafo navegável — método, não métrica de manutenção | 3 | v1 |
| `contato` | E-mail, GitHub, LinkedIn, disponibilidade | 1, 2 | v1 |
| `consumo` | Música, jogos, filmes, livros, o que estuda agora | 3, 4 | v2 |
| `videos` | Vídeos sobre ele | 3, 4 | v3, condicional |

## 6. Escopo

**v1 — o portfólio funciona.** Boot, desktop, dock, janelas, rotas, os cinco
apps de cima, pt/en, mobile. Critério de saída: um recrutador em celular
descobre stack, projetos e contato em menos de 30 segundos.

**v2 — o portfólio é seu.** App `consumo`, wallpaper vivo, atalhos de teclado,
command palette, mais textura pessoal.

**v3 — condicional.** `videos`. Ver seção 8.

## 7. Riscos

| Risco | Severidade | Mitigação |
| --- | --- | --- |
| Recrutador não entende a interface e sai | Alta | Boot que informa; desktop já povoado; dock rotulado |
| Metáfora de desktop quebra no celular | Alta | Gramática mobile própria, não desktop encolhido |
| Conteúdo atrás de interação não indexa | Média | Rota por app com conteúdo real no HTML |
| Animação pesada trava em aparelho fraco | Média | Orçamento de performance; `prefers-reduced-motion` já resolvido |
| Ficar bonito e vazio | Alta | Nenhum app entra sem conteúdo real pronto |
| Virar projeto infinito | Média | v1 fechado acima; o resto é depois |

## 8. `videos` — hipótese, não feature

O próprio autor marcou como não validada. Tratamento de PM: não se constrói
infraestrutura para conteúdo que não existe.

Teste barato antes: gravar **um** vídeo de 60s e publicar. Se ele existir e
prestar, o app se justifica. Se não existir em duas semanas, a resposta já veio.

O que a v1 faz por ele: nada além de não impedir. A arquitetura de apps aceita
um app novo sem reescrita.

## 9. Pendências de conteúdo

Nada disso está no código, no GitHub ou no vault — só o Gabriel tem:

1. **Trajetória** — como entrou em TI, o que fez de freelance em 2024/25, o que
   faz na Origami hoje. Sem isso o app `sobre` não existe.
2. **Headline e experiências do LinkedIn** — bloqueado por HTTP 999, não dá
   para puxar.
3. **Consumo** — música, jogos, filmes, livros. Define se o app `consumo` é uma
   lista estática ou integra API (Spotify, Letterboxd).
4. **Revisão das descrições** de `bot`, `DEV-Junior`, `EnemzaMVP` e `vpn-rede`,
   que não têm README e foram escritas a partir da estrutura de pastas.

## 10. Critério de sucesso

1. Um recrutador em celular descobre stack, projetos e contato em menos de 30s.
2. Um par abre o app `cerebro` e entende o método sem ler documentação.
3. O Gabriel tem vontade de mandar o link.

O item 3 sozinho não é sucesso — foi o erro da v1.
