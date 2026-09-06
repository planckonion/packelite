# Landing page "Pack Completo Digital"

Página única de vendas, tema escuro, animada e pensada primeiro para celular (link na bio do Instagram). Sem cadastro, sem formulário: todos os botões levam ao checkout da Cakto.

## O que a página terá

1. **Topo (hero)** — fundo preto com pontinhos dourados flutuando, selo laranja pulsante "🔥 Mais de 230GB de conteúdo", título gigante "O PACK QUE PAGA SUAS CONTAS", subtítulo, quatro pílulas com os produtos, botão dourado com brilho passando, aviso de entrega imediata e preço De R$97,00 riscado → Por apenas R$19,90.
2. **Prova social** — três cartões: avaliação 5 estrelas, faixa de ganhos R$3k–R$10k/mês e entrega imediata.
3. **O que tem no pack** — quatro cartões (CapCut 230GB, Achadinhos Shopee, 60.000 vídeos sem rosto, 600 projetos Metalon), cada um com ícone, selo colorido, descrição e lista de itens com check verde.
4. **Duas formas de lucrar** — usar o conteúdo / revender o pack, com selo de potencial de ganho.
5. **Bônus** — bloco com borda dourada apresentando as +60 Skills Sênior em três grupos.
6. **Entrega e acesso** — linha do tempo de 3 passos + quatro garantias (entrega automática, acesso vitalício, atualizações, mobile e PC).
7. **Chamada final** — resumo do que está incluso e o mesmo botão dourado.
8. **Rodapé** — direitos reservados e aviso de produto digital.

Uma barra fixa no topo mostra o nome "PACK COMPLETO" e um botão "Comprar — R$19,90"; ela some ao descer e reaparece ao subir.

## Detalhes técnicos

- Tudo em `src/routes/index.tsx` (substitui o conteúdo placeholder), com componentes de seção em `src/components/landing/`.
- Instalar `framer-motion`; `lucide-react` já disponível para ícones.
- Fontes Bebas Neue + Inter carregadas por `<link>` no `__root.tsx` e registradas como tokens em `src/styles.css`.
- Paleta e gradientes adicionados como tokens semânticos em `src/styles.css` (fundo #0A0A0A, cartões #161616, dourado #FFD700, laranja #FF6B00, verde #00FF88), sem cores fixas soltas nos componentes.
- Animações: entrada escalonada no hero, `whileInView` com `once: true` nas seções, hover/tap nos botões e cartões, shimmer via keyframe CSS, partículas em `div`s absolutas sem interação; tudo respeitando `prefers-reduced-motion`.
- Todos os CTAs: `<a href="https://pay.cakto.com.br/3fmhdqr_1089720" target="_blank" rel="noopener noreferrer">`, altura mínima 56px no celular.
- `head()` da rota inicial com título, descrição e tags sociais próprias do produto.
- Verificação final: sem rolagem horizontal no celular, contraste ok e links funcionando.
