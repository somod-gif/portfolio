import { Banknote, Cloud, Database, FlaskConical, Layout, Megaphone, MessageSquare, Server } from "lucide-react";
import { SKILL_GROUPS } from "@/lib/profile";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const ICONS = {
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  megaphone: Megaphone,
  banknote: Banknote,
  message: MessageSquare,
  flask: FlaskConical,
} as const;

const TONES: Record<keyof typeof ICONS, string> = {
  layout: "from-cyan-400/20 to-blue-500/10 text-cyan-600 dark:text-cyan-400",
  server: "from-emerald-400/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400",
  database: "from-violet-400/20 to-purple-500/10 text-violet-600 dark:text-violet-400",
  cloud: "from-sky-400/20 to-indigo-500/10 text-sky-600 dark:text-sky-400",
  megaphone: "from-fuchsia-400/20 to-pink-500/10 text-fuchsia-600 dark:text-fuchsia-400",
  banknote: "from-lime-400/20 to-emerald-500/10 text-lime-600 dark:text-lime-400",
  message: "from-orange-400/20 to-amber-500/10 text-orange-600 dark:text-orange-400",
  flask: "from-rose-400/20 to-pink-500/10 text-rose-600 dark:text-rose-400",
};

export function Skills() {
  return (
    <section aria-labelledby="skills" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          id="skills"
          eyebrow="Capabilities"
          title="Skills & Tools"
          description="The technologies I work with daily."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => {
            const iconKey = group.icon as keyof typeof ICONS;
            const Icon = ICONS[iconKey] ?? Layout;
            const tone = TONES[iconKey] ?? TONES.layout;
            return (
              <Reveal key={group.id} delay={index * 0.05}>
                <div className="group h-full rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${tone}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold">{group.label}</h3>
                  </div>
                  <ul
                    className="flex flex-wrap gap-2"
                    aria-label={`${group.label} skills`}
                  >
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:bg-emerald/10 hover:text-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
