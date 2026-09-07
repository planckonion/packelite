import { motion } from "motion/react";
import { Check, Infinity as InfinityIcon, ShieldCheck, Smartphone, Star, Zap } from "lucide-react";
import { CtaButton, Reveal, SectionTitle } from "./shared";
import logo from "@/assets/pack-elite-logo.png.asset.json";

/* ---------------- Seção 2 — prova social ---------------- */

const PROOFS = [
  {
    top: <Star className="text-primary h-5 w-5 fill-current" />,
    stars: true,
    text: "“Uso o pack nos meus próprios vídeos, a qualidade subiu demais” — usuário",
  },
  { label: "💰 R$3k–R$10k/mês", text: "Possibilidade real de renda com os conteúdos do pack" },
  { label: "🏆 Produto validado", text: "Um dos packs mais vendidos do mercado digital" },
];

export function SocialProof() {
  return (
    <section className="bg-secondary/40 px-4 py-10">
      <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-3">
        {PROOFS.map((p, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="border-border bg-surface h-full rounded-2xl border p-5">
              <div className="mb-2 flex items-center gap-1">
                {p.stars ? (
                  Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="text-primary h-4 w-4 fill-current" />
                  ))
                ) : (
                  <span className="text-primary text-sm font-bold tracking-wide">{p.label}</span>
                )}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Seção 3 — produtos ---------------- */

const PRODUCTS = [
  {
    icon: "🎬",
    badge: "230GB",
    badgeClass: "bg-primary text-primary-foreground",
    title: "CAPCUT PACK COMPLETO",
    desc: "Arsenal completo de edição para TikTok, Reels e YouTube",
    items: [
      "+300 Animações 2D e 3D",
      "+3.000 Overlays Premium",
      "+800 Transições Cinematográficas",
      "+1.700 Efeitos Sonoros",
      "+2.700 Presets Prontos",
      "+1.000 Fontes Exclusivas",
      "Memes Virais, Ícones, Elementos 3D",
      "Plugins Exclusivos",
      "Compatível com CapCut, Premiere, After Effects, DaVinci, Alight Motion",
    ],
  },
  {
    icon: "🛍️",
    badge: "+3.000 Vídeos",
    badgeClass: "bg-accent text-accent-foreground",
    title: "ACHADINHOS SHOPEE",
    desc: "Biblioteca completa de vídeos prontos de produtos virais para afiliados",
    items: [
      "+3.000 Vídeos de Produtos Virais",
      "Produtos em Tendência Atualizados",
      "Links Premium Organizados",
      "Conteúdo Pronto para Postar",
      "Ideal para TikTok, Reels, Kwai",
      "Brinde Exclusivo Incluso",
    ],
  },
  {
    icon: "📱",
    badge: "+60.000 Vídeos",
    badgeClass: "bg-neon text-black",
    title: "VÍDEOS VIRAIS SEM ROSTO",
    desc: "A maior biblioteca para criar perfis dark, motivação, negócios e entretenimento",
    items: [
      "Cortes de Podcasts e Filmes",
      "Vídeos Motivacionais e de Negócios",
      "Fitness, Games, Marketing Digital",
      "Perfeito para perfis sem aparecer",
      "Brinde Exclusivo Incluso",
    ],
  },
  {
    icon: "🏗️",
    badge: "+600 Projetos",
    badgeClass: "bg-foreground text-background",
    title: "PROJETOS EM METALON PDF",
    desc: "Acervo completo de projetos profissionais para serralheiros e fabricantes",
    items: [
      "Mesas, Camas, Armários, Estantes",
      "Bancadas Industriais, Aparadores",
      "Móveis Residenciais e Comerciais",
      "PDF prontos com medidas e dimensões",
      "Uso Ilimitado",
    ],
  },
];

export function Products() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionTitle lines={["4 produtos poderosos", "em um só pack"]} />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4, borderColor: "rgba(255,215,0,0.5)" }}
                className="border-border bg-gradient-card h-full rounded-2xl border p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-4xl">{p.icon}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.1em] uppercase ${p.badgeClass}`}
                  >
                    {p.badge}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-3xl">{p.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{p.desc}</p>
                <ul className="mt-4 space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm">
                      <Check className="text-neon mt-0.5 h-4 w-4 shrink-0" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Seção 4 — como lucrar ---------------- */

export function Profit() {
  return (
    <section className="bg-secondary/40 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionTitle lines={["Duas formas de lucrar", "com um único investimento"]} />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="border-border bg-surface h-full rounded-2xl border p-6">
              <span className="text-4xl">🎨</span>
              <h3 className="font-display text-primary mt-3 text-3xl">Use pra criar</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Economize centenas de horas de produção. Use os overlays, transições, sons e presets
                pra elevar suas edições e criar conteúdo profissional no CapCut, Premiere ou
                qualquer editor.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="border-border bg-surface h-full rounded-2xl border p-6">
              <span className="text-4xl">💰</span>
              <h3 className="font-display text-primary mt-3 text-3xl">Revenda e lucre</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Compre por R$19,90 e revenda cada produto separadamente ou o pack completo.
                Afiliados e criadores relatam de R$3.000 a R$10.000/mês revendendo packs como esse
                com estratégias simples de tráfego no Instagram e TikTok.
              </p>
              <span className="bg-accent text-accent-foreground mt-4 inline-block rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.1em] uppercase">
                Potencial de R$3k–R$10k/mês
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Seção 5 — bônus ---------------- */

const SKILLS = [
  { title: "Desenvolvimento", text: "Supabase, Stripe, Auth, TypeScript no nível sênior" },
  { title: "Marketing & Vendas", text: "Copywriting, Ads, SEO, Growth sênior" },
  { title: "UI/UX & Design", text: "Padrões profissionais, Mobile First, Conversão" },
];

export function Bonus() {
  return (
    <section className="px-4 py-16 lg:py-24" style={{ backgroundColor: "#0F0F0F" }}>
      <Reveal>
        <div className="border-primary/40 mx-auto max-w-4xl rounded-3xl border p-6 text-center sm:p-10">
          <span className="bg-primary text-primary-foreground inline-block rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.1em] uppercase">
            🎁 Bônus exclusivo
          </span>
          <h2 className="font-display mt-5 text-4xl leading-[0.95] uppercase sm:text-5xl">
            <span className="block">Você também recebe</span>
            <span className="text-gradient-gold block">as skills sênior</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-sm">
            Mais de 60 skills profissionais para turbinar o Claude AI e o Lovable.dev — ferramentas
            que desenvolvedores e criadores pagam centenas de reais.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {SKILLS.map((s) => (
              <div key={s.title} className="border-border bg-surface rounded-2xl border p-5">
                <h3 className="text-primary text-sm font-bold tracking-wide uppercase">
                  {s.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="text-foreground/90 mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold">
            <span>✅ Skills para Claude AI</span>
            <span>✅ Skills para Lovable.dev</span>
            <span>✅ +60 skills detalhadas</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Seção 6 — entrega ---------------- */

const STEPS = [
  { title: "Clique em “Comprar”", text: "Você é redirecionado para o checkout seguro" },
  { title: "Confirme o pagamento", text: "R$19,90 — PIX, cartão ou boleto" },
  { title: "Acesso imediato", text: "Receba o link do pack na hora, sem espera" },
];

const GUARANTEES = [
  { icon: Zap, label: "Entrega Automática" },
  { icon: InfinityIcon, label: "Acesso Vitalício" },
  { icon: ShieldCheck, label: "Compra 100% Segura" },
  { icon: Smartphone, label: "Mobile e PC" },
];

export function Delivery() {
  return (
    <section className="bg-secondary/40 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionTitle lines={["Como funciona", "a entrega"]} />
        </Reveal>
        <ol className="mt-10 space-y-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <li className="border-border bg-surface flex gap-4 rounded-2xl border p-5">
                <span className="bg-gradient-gold font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl text-black">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {GUARANTEES.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.07}>
              <div className="border-border bg-surface flex h-full flex-col items-center gap-2 rounded-2xl border p-4 text-center">
                <Icon className="text-primary h-5 w-5" />
                <span className="text-xs font-semibold">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Seção 7 — CTA final ---------------- */

const INCLUDED = [
  "+230GB de conteúdo de edição profissional",
  "+3.000 vídeos de achadinhos Shopee",
  "+60.000 vídeos virais sem rosto",
  "+600 projetos de metalon em PDF",
  "Bônus: Skills Sênior para IA",
];

export function FinalCta() {
  return (
    <section
      className="px-4 py-16 lg:py-24"
      style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #1a1206 60%, #0A0A0A 100%)" }}
    >
      <Reveal>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-gradient-gold text-4xl leading-[0.95] uppercase sm:text-6xl">
            Não perca essa oportunidade
          </h2>
          <p className="text-foreground/90 mt-4 text-sm">
            Por apenas <span className="text-primary font-bold">R$19,90</span> você tem acesso a:
          </p>
          <ul className="mx-auto mt-4 space-y-2 text-left">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-2 text-sm">
                <Check className="text-neon mt-0.5 h-4 w-4 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaButton label="Quero o pack agora — R$19,90" />
          </div>
          <p className="text-muted-foreground mt-4 text-xs">
            ⚡ Entrega automática • ♾️ Acesso vitalício • 🔒 Compra 100% segura
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Seção 8 — rodapé ---------------- */

export function Footer() {
  return (
    <footer
      className="text-muted-foreground px-4 py-10 text-center text-xs"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="flex items-center justify-center gap-2">
        <img src={logo.url} alt="Logo Pack Elite" className="h-8 w-8 rounded-full" />
        <span className="font-display text-primary text-xl tracking-wide">PACK ELITE</span>
      </div>
      <p className="mt-3">© 2026 Pack Elite — Todos os direitos reservados</p>
      <p className="mt-1">Produto digital. Entrega automática após confirmação do pagamento.</p>
      <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <a href="/politica-de-privacidade" className="hover:text-primary underline-offset-2 transition-colors hover:underline">
          Política de Privacidade
        </a>
        <a href="/termos-de-uso" className="hover:text-primary underline-offset-2 transition-colors hover:underline">
          Termos de Uso
        </a>
        <a href="/politica-de-reembolso" className="hover:text-primary underline-offset-2 transition-colors hover:underline">
          Política de Reembolso
        </a>
      </nav>
      <p className="mx-auto mt-4 max-w-xl leading-relaxed opacity-70">
        Este site não é afiliado ao Facebook, Instagram, Meta ou Google. Os resultados mencionados
        são estimativas e variam de pessoa para pessoa; não garantimos ganhos financeiros.
      </p>
    </footer>
  );
}
