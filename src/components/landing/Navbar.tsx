import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { CHECKOUT_URL } from "./shared";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 120);
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="border-border/60 fixed inset-x-0 top-0 z-50 border-b bg-[rgba(10,10,10,0.95)] backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <span className="font-display text-primary text-2xl tracking-wide sm:text-3xl">
          PACK COMPLETO
        </span>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex min-h-[44px] items-center rounded-xl border px-4 text-xs font-bold tracking-wider uppercase transition-colors"
        >
          Comprar — R$19,90
        </a>
      </nav>
    </motion.header>
  );
}
