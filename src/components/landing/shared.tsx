import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const CHECKOUT_URL = "https://pay.cakto.com.br/3fmhdqr_1089720";

export function CtaButton({
  label = "QUERO O PACK AGORA",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <motion.a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`shimmer shadow-gold bg-gradient-gold flex min-h-[56px] w-full items-center justify-center rounded-2xl px-6 text-center text-[17px] font-extrabold tracking-wide text-black uppercase sm:text-lg ${className}`}
    >
      {label}
    </motion.a>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ lines }: { lines: [string, string] }) {
  return (
    <h2 className="font-display text-center text-4xl leading-[0.95] uppercase sm:text-5xl lg:text-6xl">
      <span className="block text-foreground">{lines[0]}</span>
      <span className="text-gradient-gold block">{lines[1]}</span>
    </h2>
  );
}
