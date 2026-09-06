# Golden Pack Launcher

PROMPT MASTER — LANDING PAGE "PACK COMPLETO DIGITAL"
OBJETIVO GERAL

Crie uma landing page de vendas profissional, dark, animada, responsiva e focada 100% em conversão para um produto digital chamado "PACK COMPLETO DIGITAL". A página é para ser usada como link na bio do Instagram, então o design deve priorizar experiência em smartphone (mobile-first), mas funcionar perfeitamente também no desktop.

STACK TÉCNICA
Framework: React + TypeScript
Estilização: Tailwind CSS
Animações: Framer Motion (instale como dependência)
Ícones: Lucide React
Fontes: Google Fonts — Bebas Neue para headlines de impacto e Inter para corpo de texto
Sem backend: Página 100% estática, nenhum formulário, nenhum banco de dados
IDENTIDADE VISUAL
Paleta de Cores
--bg-primary:     #0A0A0A   (fundo principal — quase preto)
--bg-secondary:   #111111   (cards e seções alternadas)
--bg-card:        #161616   (cards internos)
--accent-gold:    #FFD700   (amarelo dourado — cor principal de destaque/CTA)
--accent-orange:  #FF6B00   (laranja vibrante — destaques secundários, badges)
--accent-green:   #00FF88   (verde neon — tags de sucesso/benefícios)
--text-primary:   #FFFFFF   (texto principal)
--text-secondary: #A0A0A0   (texto de apoio)
--gradient-hero:  linear-gradient(135deg, #FFD700 0%, #FF6B00 100%)
--gradient-card:  linear-gradient(180deg, #1A1A1A 0%, #111111 100%)
Psicologia das Cores aplicada
Preto dominante: autoridade, exclusividade, luxo, mistério — segura o olhar no conteúdo
Dourado: riqueza, valor, resultado financeiro, conquista — usado nos CTAs e preço
Laranja: urgência, ação imediata, energia — usado em badges e destaques
Verde neon: sucesso, validação, benefícios conquistados — checkmarks e ganhos
Contraste extremo: texto branco sobre fundo escuro = máxima legibilidade no celular ao sol
Tipografia
Headlines grandes (hero): Bebas Neue, tamanho 52-64px mobile / 80-100px desktop, uppercase, tracking normal
Subtítulos de seção: Inter 700, 22-28px
Corpo: Inter 400, 16px, line-height 1.6
Badges/labels: Inter 700, 11-13px, uppercase, letter-spacing 0.1em
ESTRUTURA DA PÁGINA (seção por seção)
SEÇÃO 1 — HERO (topo — impacto imediato)

Esta é a seção mais importante. O usuário deve entender tudo em 3 segundos.

Layout:

Fundo com efeito de partículas douradas animadas sutis (CSS puro ou canvas simples)
Badge animado no topo: 🔥 MAIS DE 230GB DE CONTEÚDO — pill com fundo 
#FF6B00, texto branco, animação pulse suave
Headline principal em 2 linhas (Bebas Neue, enorme):
  O PACK QUE
  PAGA SUAS CONTAS
Subtítulo imediato (Inter, branco, 18px mobile):
  +230GB de conteúdo digital premium para usar ou revender.
  De R$3.000 a R$10.000 por mês — você decide como usar.
Abaixo: mini-grid horizontal com 4 pills/ícones mostrando o que tem no pack:
🎬 Pack CapCut +230GB
🛍️ +3.000 Vídeos Shopee
📱 +60.000 Vídeos Virais
🏗️ +600 Projetos Metalon
CTA principal: botão grande, gradiente dourado→laranja, texto QUERO O PACK AGORA, link https://pay.cakto.com.br/3fmhdqr_1089720 — largura total no mobile, bordas arredondadas grandes (rounded-2xl), sombra brilhante dourada (box-shadow: 0 0 30px rgba(255,215,0,0.4))
Abaixo do botão: texto pequeno cinza — ⚡ Entrega automática e imediata após o pagamento
Preço em destaque: risco no preço antigo ~~De R$97,00~~ → Por apenas R$19,90

Animações do Hero:

Entrada com fade + slide-up suave (staggered: badge → headline → subtítulo → pills → botão)
Badge com animação de pulse infinito
Botão CTA com shimmer animado (brilho passando da esquerda pra direita, loop infinito)
Partículas ou glitter dourado muito sutil no background
SEÇÃO 2 — PROVA SOCIAL RÁPIDA (logo abaixo do hero)

Seção horizontal com scroll, fundo 
#111111, padding vertical pequeno.

3 cards lado a lado (ou scroll horizontal no mobile):

[⭐⭐⭐⭐⭐]  [💰 R$3k–R$10k/mês]  [⚡ Entrega Imediata]
"Comprei, vendi    "Possibilidade real     "Paguei e recebi
 3 packs no mesmo   de renda com os         acesso em menos
 dia" — usuário     conteúdos do pack"      de 1 minuto"
SEÇÃO 3 — O QUE TEM NO PACK (detalhamento dos 4 produtos)

Headline da seção:

4 PRODUTOS PODEROSOS
EM UM SÓ PACK

Para cada produto, crie um card com visual forte:

CARD 1 — CapCut Pack +230GB
Ícone: 🎬
Cor de destaque: dourado
Badge: 230GB
Título: CAPCUT PACK COMPLETO
Descrição curta: Arsenal completo de edição para TikTok, Reels e YouTube
Lista de itens (com ícone ✅ verde):
+300 Animações 2D e 3D
+3.000 Overlays Premium
+800 Transições Cinematográficas
+1.700 Efeitos Sonoros
+2.700 Presets Prontos
+1.000 Fontes Exclusivas
Memes Virais, Ícones, Elementos 3D
Plugins Exclusivos
Compatível com: CapCut, Premiere, After Effects, DaVinci, Alight Motion
CARD 2 — Achadinhos Shopee
Ícone: 🛍️
Cor de destaque: laranja
Badge: +3.000 VÍDEOS
Título: ACHADINHOS SHOPEE
Descrição: Biblioteca completa de vídeos prontos de produtos virais para afiliados
Lista ✅:
+3.000 Vídeos de Produtos Virais
Produtos em Tendência Atualizados
Links Premium Organizados
Conteúdo Pronto para Postar
Ideal para TikTok, Reels, Kwai
Brinde Exclusivo Incluso
CARD 3 — 60.000 Vídeos Virais Sem Rosto
Ícone: 📱
Cor de destaque: verde neon
Badge: +60.000 VÍDEOS
Título: VÍDEOS VIRAIS SEM ROSTO
Descrição: A maior biblioteca para criar perfis dark, motivação, negócios e entretenimento
Lista ✅:
Cortes de Podcasts e Filmes
Vídeos Motivacionais e de Negócios
Fitness, Games, Marketing Digital
Perfeito para perfis sem aparecer
Brinde Exclusivo Incluso
CARD 4 — Projetos Metalon
Ícone: 🏗️
Cor de destaque: branco/prata
Badge: +600 PROJETOS
Título: PROJETOS EM METALON PDF
Descrição: Acervo completo de projetos profissionais para serralheiros e fabricantes
Lista ✅:
Mesas, Camas, Armários, Estantes
Bancadas Industriais, Aparadores
Móveis Residenciais e Comerciais
PDF Prontos com Medidas e Dimensões
Uso Ilimitado

Design dos cards:

Fundo 
#161616, border 1px solid rgba(255,215,0,0.2) (dourado suave)
Badge no canto superior direito com a cor de destaque de cada produto
Animação: ao aparecer na tela (scroll reveal), slide-up com fade
SEÇÃO 4 — COMO GANHAR DINHEIRO COM O PACK

Headline:

DUAS FORMAS DE LUCRAR
COM UM ÚNICO INVESTIMENTO

Dois blocos lado a lado (ou empilhados no mobile):

Bloco A — USE O CONTEÚDO

Ícone: 🎨
Título: USE PRA CRIAR
Texto: Economize centenas de horas de produção. Use os overlays, transições, sons e presets pra elevar suas edições e criar conteúdo profissional no CapCut, Premiere ou qualquer editor.

Bloco B — REVENDA O PACK

Ícone: 💰
Título: REVENDA E LUCRE
Texto: Compre por R$19,90 e revenda cada produto separadamente ou o pack completo. Afiliados e criadores relatam de R$3.000 a R$10.000/mês revendendo packs como esse com estratégias simples de tráfego no Instagram e TikTok.
Badge: POTENCIAL DE R$3K–R$10K/MÊS
SEÇÃO 5 — BÔNUS ESPECIAL

Fundo levemente diferente (
#0F0F0F) com border dourado no container.

Headline com badge acima:

[🎁 BÔNUS EXCLUSIVO]

VOCÊ TAMBÉM RECEBE
AS SKILLS SÊNIOR

Subtítulo:

Mais de 60 skills profissionais para turbinar o Claude AI e o Lovable.dev
— ferramentas que desenvolvedores e criadores pagam centenas de reais.

Grid de 3 blocos:

Desenvolvimento: Supabase, Stripe, Auth, TypeScript no nível sênior
Marketing & Vendas: Copywriting, Ads, SEO, Growth sênior
UI/UX & Design: Padrões profissionais, Mobile First, Conversão

Rodapé da seção:

✅ Skills para Claude AI   ✅ Skills para Lovable.dev   ✅ +60 skills detalhadas
SEÇÃO 6 — ENTREGA E ACESSO

Headline: COMO FUNCIONA A ENTREGA

Timeline vertical simples com 3 passos:

Clique em "Comprar" → Você é redirecionado para o checkout seguro
Confirme o pagamento → R$19,90 — PIX, cartão ou boleto
Acesso imediato → Receba o link do pack na hora, sem espera

Abaixo: grid com 4 ícones de garantias:

⚡ Entrega Automática
♾️ Acesso Vitalício
🔄 Atualizações Mensais Grátis
📱 Mobile e PC
SEÇÃO 7 — CTA FINAL (repetição do call-to-action)

Seção com fundo gradiente sutil dourado→laranja (muito escuro, quase preto com tint dourado).

NÃO PERCA ESSA OPORTUNIDADE

Por apenas R$19,90 você tem acesso a:
- +230GB de conteúdo de edição profissional
- +3.000 vídeos de achadinhos Shopee
- +60.000 vídeos virais sem rosto
- +600 projetos de metalon em PDF
- Bônus: Skills Sênior para IA

[QUERO O PACK AGORA — R$19,90]

⚡ Entrega automática • ♾️ Acesso vitalício • 🔄 Atualizações mensais grátis

Botão CTA idêntico ao do hero — mesmo estilo dourado, shimmer, sombra brilhante.

SEÇÃO 8 — FOOTER

Simples e limpo. Fundo 
#080808.

© 2025 Pack Completo Digital — Todos os direitos reservados
Produto digital. Entrega automática após confirmação do pagamento.
COMPONENTES E ANIMAÇÕES GLOBAIS
Navbar (sticky, simples)
Fundo rgba(10,10,10,0.95) com backdrop-blur
Logo/nome: PACK COMPLETO em Bebas Neue dourado
Botão direito: COMPRAR — R$19,90 (pequeno, dourado outline) → link checkout
Aparece com animação slide-down ao scrollar para baixo, some ao scrollar para cima (hide-on-scroll-down, show-on-scroll-up)
Animações com Framer Motion
Scroll reveal: todas as seções entram com fadeInUp ao entrar no viewport (use whileInView + viewport={{ once: true }})
Stagger: listas de features com delay de 0.1s entre itens
Botão CTA: whileHover={{ scale: 1.03 }} + whileTap={{ scale: 0.97 }}
Cards: whileHover={{ y: -4, borderColor: 'rgba(255,215,0,0.5)' }}
Hero badge: animate={{ scale: [1, 1.05, 1] }} em loop com repeat: Infinity, duration: 2
Shimmer no botão: keyframe CSS com background-position animado
Efeito de fundo do Hero

Crie um componente de partículas simples: 20-30 pontos dourados pequenos (2-4px) com posições aleatórias, animação de float vertical suave e opacidade variando entre 0.2 e 0.6. Use position: absolute, pointer-events: none, z-index: 0 — o conteúdo fica em z-index: 1.

REGRAS DE RESPONSIVIDADE (mobile-first)
Breakpoints
Mobile (base): max-width 100%, padding horizontal 16px
Tablet (md: 768px): 2 colunas em grids
Desktop (lg: 1024px): layout expandido, fontes maiores
Específico para mobile
Botão CTA: width: 100%, altura mínima 56px, fonte 18px
Cards dos produtos: empilhados (1 coluna), sem scroll horizontal
Hero headline: 48-52px
Nenhum elemento com scroll horizontal acidental
Touch targets mínimo 44px de altura em todos os elementos clicáveis
Espaçamento generoso entre seções: py-16 mobile, py-24 desktop
GATILHOS MENTAIS APLICADOS (implementar explicitamente)
Escassez percebida: Badge no hero — 🔥 OFERTA ESPECIAL com risca no preço antigo
Prova social: Seção 2 com depoimentos/resultados
Autoridade: Números concretos (230GB, 60.000 vídeos, +3.000 presets)
Reciprocidade: Bônus das skills grátis incluso
Urgência: Botão com ícone ⚡ e texto "acesso imediato"
Ancoragem de preço: Mostrar preço antigo riscado antes do R$19,90
Simplicidade: Timeline de 3 passos na seção de entrega
FOMO: "Não perca essa oportunidade" no CTA final
LINKS E DADOS IMPORTANTES
URL do checkout: https://pay.cakto.com.br/3fmhdqr_1089720
Preço: R$19,90
Todos os botões CTA devem abrir esse link (pode ser window.open ou <a href> com target="_blank")
Não há página de obrigado: o checkout redireciona para lá sozinho
QUALIDADE E CHECKLIST FINAL

Antes de considerar pronto, verifique:

 Página carrega rápido (sem imports desnecessários)
 Todos os botões CTA funcionam e apontam para o link correto
 Fontes Google (Bebas Neue + Inter) importadas no index.html ou via CSS @import
 Nenhum scroll horizontal no mobile
 Animações com prefers-reduced-motion respeitado (opcional mas ideal)
 Cores com contraste suficiente (texto branco/dourado sobre fundo escuro ✅)
 Nenhum placeholder de imagem — use emojis grandes, gradientes ou ícones Lucide como elementos visuais
 Sticky navbar funcionando corretamente
 Shimmer no botão CTA animado em loop
OBSERVAÇÃO FINAL

Esta é uma landing page completa em um único arquivo de projeto React. Não crie rotas, não crie formulários, não integre APIs externas. O único link externo é o checkout da Cakto. Foque em beleza visual, performance de carregamento e máxima conversão para público brasileiro de 20 a 45 anos interessado em renda extra e criação de conteúdo digital.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://packvalidado.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/566c64e9-24f0-479f-8132-d83f7da7f734).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
