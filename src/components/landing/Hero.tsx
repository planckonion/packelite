import { motion } from "motion/react";
import { Zap } from "lucide-react";
import { CtaButton } from "./shared";

const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 61) % 100,
  size: 2 + (i % 3),
  duration: 6 + (i % 5),
  delay: (i % 7) * 0.6,
}));

const PILLS = [
  "🎬 Pack CapCut +230GB",
  "🛍️ +3.000 Vídeos Shopee",
  "📱 +60.000 Vídeos Virais",
  "🏗️ +600 Projetos Metalon",
];

function item(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  };
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-28 pb-16 sm:pt-32 lg:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="bg-primary/10 absolute top-[-8rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-[110px]" />
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="bg-primary absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              opacity: 0.35,
              animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
          transition={{
            opacity: { duration: 0.5 },
            y: { duration: 0.5 },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="bg-accent text-accent-foreground inline-flex items-center rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.1em] uppercase"
        >
          🔥 Mais de 230GB de conteúdo
        </motion.div>

        <motion.h1
          {...item(0.12)}
          className="font-display mt-6 text-[52px] leading-[0.92] uppercase sm:text-7xl lg:text-[100px]"
        >
          <span className="block">O pack que</span>
          <span className="text-gradient-gold block">paga suas contas</span>
        </motion.h1>

        <motion.p {...item(0.24)} className="text-foreground/90 mx-auto mt-5 max-w-xl text-lg">
          +230GB de conteúdo digital premium para usar ou revender.
          <span className="text-muted-foreground block">
            De R$3.000 a R$10.000 por mês — você decide como usar.
          </span>
        </motion.p>

        <motion.ul {...item(0.36)} className="mt-7 flex flex-wrap justify-center gap-2">
          {PILLS.map((pill) => (
            <li
              key={pill}
              className="border-border bg-surface text-foreground/90 rounded-full border px-3 py-2 text-xs font-semibold sm:text-sm"
            >
              {pill}
            </li>
          ))}
        </motion.ul>

        <motion.div {...item(0.48)} className="mx-auto mt-9 max-w-md">
          <CtaButton />
          <p className="text-muted-foreground mt-3 flex items-center justify-center gap-1.5 text-sm">
            <Zap className="text-primary h-4 w-4" /> Entrega automática e imediata após o pagamento
          </p>
          <div className="mt-6 flex items-baseline justify-center gap-3">
            <span className="text-muted-foreground text-lg line-through">De R$97,00</span>
            <span className="font-display text-primary text-5xl">R$19,90</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
