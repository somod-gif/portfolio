"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/config";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const CORE_STACK = [
  { name: "React", src: "/logos/react.svg" },
  { name: "Next.js", src: "/logos/nextjs.svg" },
  { name: "TypeScript", src: "/logos/typescript.svg" },
  { name: "Node.js", src: "/logos/nodejs.svg" },
  { name: "PostgreSQL", src: "/logos/postgresql.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden pt-28 pb-20 lg:pt-32">
      <div aria-hidden className="hero-grid absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-emerald/10 blur-[100px]" />
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]" />
      </div>

      <div className="section-shell relative grid w-full items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Available for full-time roles &amp; freelance
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Badmus Samad <span className="text-gradient-emerald">Eniola</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-base font-medium text-emerald sm:text-lg md:text-xl"
          >
            {SITE.role}{" "}
            <span className="text-muted-foreground">·</span>{" "}
            Web &amp; Mobile Products
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {SITE.subtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" variant="gradient">
              <Link href="/projects">
                View Work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="h-4 w-4 text-emerald" />
            Lagos, Nigeria · Open to remote &amp; on-site
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Core stack
            </span>
            <div className="flex -space-x-2">
              {CORE_STACK.map((tech) => (
                <span
                  key={tech.name}
                  title={tech.name}
                  className="grid h-9 w-9 place-items-center rounded-full border border-black/5 bg-white shadow-sm ring-2 ring-background transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="h-4 w-4 object-contain"
                    unoptimized
                  />
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={
            prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 24 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[24rem] sm:max-w-[26rem] lg:max-w-none"
        >
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[3rem] bg-[conic-gradient(from_140deg,#10b981,#06b6d4,#8b5cf6,#f59e0b,#10b981)] opacity-50 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -inset-[2px] rounded-[2.1rem] bg-[conic-gradient(from_140deg,#10b981,#06b6d4,#8b5cf6,#f59e0b,#10b981)] opacity-90"
            />

            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/30 bg-neutral-900 shadow-2xl shadow-emerald/10">
              <Image
                src="/profile/badmus-eniola.jpg"
                alt="Badmus Samad Eniola, full-stack software engineer"
                fill
                sizes="(max-width: 1024px) 88vw, 420px"
                className="object-cover object-center"
                preload
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-cyan-300/10"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(16,185,129,0.22),transparent_42%),radial-gradient(circle_at_82%_88%,rgba(139,92,246,0.28),transparent_46%)] mix-blend-screen"
              />

              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/35 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Badmus Samad Eniola
                    </p>
                    <p className="mt-0.5 text-[11px] text-white/70">
                      Full Stack Engineer · Lagos, Nigeria
                    </p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald/90 text-white shadow-lg shadow-emerald/30">
                    <Sparkles className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-6 hidden rounded-2xl border bg-card/90 px-3 py-2 shadow-lg backdrop-blur sm:block">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Experience
              </p>
              <p className="text-sm font-semibold">3+ years</p>
            </div>

            <div className="absolute -left-3 bottom-24 hidden rounded-2xl border bg-card/90 px-3 py-2 shadow-lg backdrop-blur sm:block">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Focus
              </p>
              <p className="text-sm font-semibold">Fintech · SaaS · AI</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
