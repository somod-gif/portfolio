"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { TECH_STACK } from "@/lib/tech-stack";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.035, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function TechStack() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="tech-stack"
      className="relative overflow-hidden border-y bg-muted/20 py-20 sm:py-24"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/50 to-transparent"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-emerald/10 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="section-shell relative">
        <SectionHeading
          id="tech-stack"
          eyebrow="Toolbox"
          title="Tech stack"
          description="The languages, frameworks, and tools I use to design, build, and ship production software."
        />

        <motion.ul
          variants={container}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
        >
          {TECH_STACK.map((tech) => (
            <motion.li key={tech.name} variants={item} className="group">
              <div
                className="relative flex h-full flex-col items-center justify-center gap-2.5 rounded-2xl border border-black/5 bg-white px-2 py-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_var(--brand)] dark:border-white/10 dark:bg-white"
                style={{ "--brand": tech.color } as CSSProperties}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${tech.color}22, transparent 65%)`,
                  }}
                />
                <Image
                  src={tech.src}
                  alt=""
                  width={40}
                  height={40}
                  className="relative h-8 w-8 object-contain sm:h-9 sm:w-9"
                  unoptimized
                />
                <span className="relative text-[11px] font-medium leading-tight text-neutral-700 sm:text-xs">
                  {tech.name}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
