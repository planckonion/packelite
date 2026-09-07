import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/pack-elite-logo.png.asset.json";

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="bg-background text-foreground min-h-screen px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-2">
          <img src={logo.url} alt="Logo Pack Elite" className="h-9 w-9 rounded-full" />
          <span className="font-display text-primary text-2xl tracking-wide">PACK ELITE</span>
        </div>
        <h1 className="font-display text-gradient-gold mt-8 text-4xl uppercase sm:text-5xl">
          {title}
        </h1>
        <p className="text-muted-foreground mt-2 text-xs">
          Última atualização: setembro de 2026
        </p>
        <div className="text-foreground/85 mt-8 space-y-6 text-sm leading-relaxed">{children}</div>
        <div className="mt-12">
          <Link to="/" className="text-primary text-sm font-semibold hover:underline">
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-primary font-bold">{title}</h2>
      <div className="mt-2 space-y-2">{children}</div>
    </section>
  );
}
