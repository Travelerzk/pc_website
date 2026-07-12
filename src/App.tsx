import { lazy, Suspense, type ReactNode } from "react";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { AnimatedContent } from "./components/AnimatedContent";
import { BorderGlow } from "./components/BorderGlow";
import { GradientSplitText } from "./components/GradientSplitText";
import { SplitText } from "./components/SplitText";
import {
  education,
  experience,
  methodCards,
  metrics,
  profile,
  projects,
  skills
} from "./data/portfolio";

const SoftAurora = lazy(() =>
  import("./components/SoftAurora").then((module) => ({ default: module.SoftAurora }))
);

function GlowButton({
  children,
  href,
  variant = "primary",
  className = "",
  ariaLabel,
  animated = false
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
  animated?: boolean;
}) {
  const isPrimary = variant === "primary";
  return (
      <BorderGlow
        className={className}
        backgroundColor={isPrimary ? "rgba(124, 58, 237, 0.34)" : "rgba(21, 18, 37, 0.36)"}
      glowColor="270 92 76"
      borderRadius={8}
      glowRadius={24}
      glowIntensity={0.9}
      edgeSensitivity={26}
      coneSpread={22}
      fillOpacity={isPrimary ? 0.22 : 0.12}
      colors={["#7c3aed", "#c084fc", "#38bdf8"]}
      animated={animated}
    >
      <a
        className={`inline-flex h-full w-full items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-medium shadow-ambient backdrop-blur-2xl transition ${
          isPrimary ? "bg-violet/[0.55] text-white hover:bg-violet/70" : "bg-white/[0.08] text-white hover:bg-white/[0.12] hover:text-orchid"
        }`}
        href={href}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    </BorderGlow>
  );
}

function GlowCard({
  children,
  className = "",
  animated = false,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  animated?: boolean;
  delay?: number;
}) {
  return (
    <AnimatedContent distance={46} duration={0.78} threshold={0.16} delay={delay} scale={0.98} className={`w-full ${className}`}>
      <BorderGlow
        className="w-full"
        backgroundColor="rgba(25, 23, 42, 0.42)"
        glowColor="270 92 76"
        borderRadius={8}
        glowRadius={28}
        glowIntensity={0.78}
        edgeSensitivity={24}
        coneSpread={24}
        fillOpacity={0.14}
        colors={["#7c3aed", "#c084fc", "#38bdf8"]}
        animated={animated}
        tilt
        tiltAmplitude={4.5}
        tiltScale={1.025}
      >
        <div className="min-w-0 rounded-lg border border-white/15 bg-panelSoft/58 p-6 shadow-ambient backdrop-blur-2xl transition duration-300 ease-out hover:border-orchid/40 hover:bg-[#211d36]/68 sm:p-7">
          {children}
        </div>
      </BorderGlow>
    </AnimatedContent>
  );
}

function getSchoolLogo(school: string) {
  if (school.includes("Polytechnic")) {
    return {
      src: "/assets/logos/hong-kong-polyu.svg",
      alt: "The Hong Kong Polytechnic University logo"
    };
  }

  if (school.includes("Shenzhen University")) {
    return {
      src: "/assets/logos/shenzhen-university.svg",
      alt: "Shenzhen University logo"
    };
  }

  return null;
}

function getExperienceLogo(org: string) {
  if (org.includes("Midea")) {
    return {
      src: "/assets/logos/midea.svg",
      alt: "Midea logo"
    };
  }

  if (org.includes("NetEase")) {
    return {
      src: "/assets/logos/netease.svg",
      alt: "NetEase logo"
    };
  }

  return null;
}

function splitTimelineMeta(meta?: string) {
  if (!meta) {
    return { context: "", time: "" };
  }

  const parts = meta.split(" · ");
  const time = parts.pop() ?? "";

  return {
    context: parts.join(" · "),
    time
  };
}

function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-night/80 backdrop-blur-2xl">
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-4 md:flex md:justify-between md:px-8" aria-label="Main navigation">
        <a className="min-w-0 truncate font-display text-base font-semibold text-white sm:text-lg" href="#top">
          PORTFOLIO
        </a>
        <div className="hidden items-center gap-8 text-sm text-mist md:flex">
          <a className="hover:text-orchid" href="#projects">Projects</a>
          <a className="hover:text-orchid" href="#experience">Experience</a>
          <a className="hover:text-orchid" href="#skills">Skills</a>
          <a className="hover:text-orchid" href="#contact">Contact</a>
        </div>
        <GlowButton href="#contact" className="hidden sm:inline-grid" ariaLabel="Contact">
          <Mail size={16} />
          <span>Contact</span>
        </GlowButton>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-night px-4 pt-24 sm:px-5 md:px-8 md:pt-24">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-screen max-w-full opacity-75">
        <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-violet/20 via-night to-orchid/15" />}>
          <SoftAurora
            speed={0.72}
            scale={1.7}
            brightness={1.65}
            color1="#8b5cf6"
            color2="#c084fc"
            noiseFrequency={2.1}
            noiseAmplitude={0.95}
            bandHeight={0.52}
            bandSpread={1.05}
            octaveDecay={0.14}
            layerOffset={0.42}
            colorSpeed={0.28}
            enableMouseInteraction={true}
            mouseInfluence={0.12}
          />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/74 to-night/42" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-night to-transparent" />
      <div className="relative z-10 mx-auto grid min-h-[760px] w-full max-w-7xl grid-cols-1 items-center gap-10 pb-16 md:grid-cols-[1.16fr_0.84fr] md:gap-8 md:pb-20">
        <AnimatedContent
          className="relative z-20 w-[calc(100vw-2rem)] min-w-0 overflow-hidden md:w-auto md:overflow-visible"
          distance={42}
          duration={1}
          threshold={0.05}
        >
          <div className="mb-5 flex flex-wrap items-center gap-3 font-body text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-orchid sm:text-xs">
            <span className="h-px w-10 bg-orchid/70" />
            <span>Data Analyst</span>
            <span className="text-white/35">Portfolio 2026</span>
          </div>
          <GradientSplitText
            text="Steven Chan"
            colors={["#ffffff", "#c084fc", "#7C3AED", "#c084fc", "#ffffff"]}
            animationSpeed={5}
            delay={36}
            duration={0.95}
            distance={38}
            className="hero-signature-name text-6xl leading-none sm:text-8xl md:text-9xl"
          />
          <SplitText
            tag="h1"
            text="Portfolio"
            className="mt-1 max-w-full whitespace-nowrap font-display text-[3.25rem] font-semibold uppercase leading-[0.82] text-white sm:text-[6rem] md:text-[6.4rem] lg:text-[7.2rem] xl:text-[8.35rem]"
            delay={48}
            duration={1.1}
            ease="expo.out"
            splitType="chars"
            from={{ opacity: 0, y: 72, scaleY: 0.82, filter: "blur(12px)" }}
            to={{ opacity: 1, y: 0, scaleY: 1, filter: "blur(0px)" }}
            threshold={0.05}
            rootMargin="0px"
            textAlign="left"
          />
          <div className="mt-7 grid max-w-3xl gap-5 border-t border-white/25 pt-6 md:grid-cols-[0.44fr_0.56fr]">
            <div>
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">Data Analyst</p>
            </div>
            <SplitText
              text={profile.headline}
              className="max-w-[21.5rem] break-words text-base leading-8 text-mist [word-break:break-all] md:max-w-none md:[word-break:normal] md:text-lg"
              delay={18}
              duration={0.9}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              threshold={0.05}
              rootMargin="0px"
              textAlign="left"
            />
          </div>
          <SplitText
            text={profile.summary}
            className="mt-5 max-w-[21.5rem] break-words text-sm leading-8 text-white/70 [word-break:break-all] sm:max-w-[34rem] sm:text-base md:max-w-3xl md:[word-break:normal]"
            delay={10}
            duration={0.75}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 16 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.05}
            rootMargin="0px"
            textAlign="left"
          />
          <div className="mt-8 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
            {profile.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="min-w-0 rounded-md bg-white/10 px-3 py-2 text-center text-sm text-white/75 sm:text-left">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <GlowButton href="#projects" animated>
              View Projects
              <ArrowUpRight size={18} />
            </GlowButton>
            <GlowButton href="#contact" variant="secondary">
              <Download size={18} />
              Get Resume
            </GlowButton>
          </div>
        </AnimatedContent>

        <div
          className="relative mx-auto w-[calc(100vw-2rem)] max-w-[680px] md:w-full md:translate-x-10 lg:translate-x-20"
        >
          <div className="group relative h-[500px] sm:h-[560px] md:h-[640px]">
            <div className="absolute left-1/2 top-[4%] z-0 h-[26rem] w-[26rem] -translate-x-[42%] sm:h-[31rem] sm:w-[31rem] md:h-[36rem] md:w-[36rem]">
            <AnimatedContent
              className="h-full w-full"
              distance={72}
              direction="horizontal"
              duration={1.15}
              delay={0.08}
              threshold={0.05}
              scale={0.94}
            >
            <div className="relative h-full w-full overflow-hidden rounded-full bg-orchid/[0.22] shadow-[0_34px_120px_rgba(0,0,0,0.42),0_0_110px_rgba(192,132,252,0.22)] backdrop-blur-sm">
              <div className="absolute inset-0 rounded-full bg-violet/[0.12]" />
              <svg
                className="absolute left-1/2 top-[3%] h-56 w-56 -translate-x-[15%] text-orchid/82 sm:h-64 sm:w-64 md:h-80 md:w-80"
                viewBox="0 0 240 240"
                aria-hidden="true"
              >
                <defs>
                  <path id="data-analyst-circle" d="M120,120 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
                </defs>
                <text className="fill-current font-body text-[13px] font-semibold uppercase tracking-[0.34em]">
                  <textPath href="#data-analyst-circle" startOffset="6%">
                    DATA ANALYST DATA ANALYST DATA ANALYST
                  </textPath>
                </text>
              </svg>
              <div className="absolute bottom-2 left-1/2 h-48 w-[72%] -translate-x-[43%] rounded-full bg-black/58 blur-3xl" />
              <div className="absolute inset-0 rounded-full bg-orchid/[0.08] mix-blend-screen" />
            </div>
            </AnimatedContent>
            </div>
            <div className="absolute left-1/2 top-[-12%] z-30 h-[112%] w-auto max-w-none -translate-x-[48%] sm:top-[-16%] sm:h-[120%] md:top-[-20%] md:h-[128%]">
            <AnimatedContent
              className="h-full w-auto"
              distance={90}
              direction="horizontal"
              duration={1.05}
              delay={0.18}
              threshold={0.05}
              scale={0.96}
            >
            <img
              src="/assets/images/avatar-hero-embedded.png"
              alt="Upper-body portrait of Zikang Chen"
              className="h-full w-auto max-w-none object-contain object-top opacity-95 brightness-[0.72] contrast-[1.2] saturate-[0.62] transition duration-500 ease-out [filter:drop-shadow(0_34px_86px_rgba(0,0,0,0.64))] group-hover:scale-[1.05]"
            />
            </AnimatedContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="bg-[#080611] px-4 py-20 sm:px-5 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedContent className="mb-12 max-w-2xl" distance={48}>
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-orchid">Method</p>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl">Turning Business Complexity into Data Products</h2>
        </AnimatedContent>
        <div className="grid gap-5 md:grid-cols-4">
          {methodCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <GlowCard key={card.label} animated={index === 0} delay={index * 0.08}>
                <div className="mb-5 flex items-center justify-between">
                  <Icon className="text-orchid" size={28} />
                  <span className="font-display text-4xl text-white/5">0{index + 1}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{card.label}</h3>
                <p className="mt-2 text-sm leading-6 text-mist">{card.text}</p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="bg-[#080611] px-4 py-12 text-white sm:px-5 md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
        {metrics.map((metric, index) => (
          <AnimatedContent key={metric.label} delay={index * 0.08} distance={38} scale={0.98} className="py-4">
            <div className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">{metric.value}</div>
            <div className="mt-3 text-sm font-medium text-white/90">{metric.label}</div>
            <div className="mt-1 text-xs text-mist">{metric.note}</div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-night px-4 py-20 sm:px-5 md:px-8 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0715] via-[#080611]/70 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <AnimatedContent className="mb-14 max-w-2xl" distance={48}>
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-orchid">Selected Work</p>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl">Selected Data Product Work</h2>
        </AnimatedContent>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <GlowCard key={project.id} delay={index * 0.1}>
                <article className="flex min-h-full min-w-0 flex-col">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <Icon className="text-orchid" size={34} />
                  <span className="rounded-md bg-white/10 px-3 py-1 text-xs text-mist">{project.period}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-orchid">{project.subtitle}</p>
                <p className="mt-5 text-sm leading-6 text-mist">{project.problem}</p>
                <div className="mt-6 space-y-3">
                  {project.actions.map((action) => (
                    <p key={action} className="text-sm leading-6 text-white/72">- {action}</p>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.impact.map((item) => (
                    <span key={item} className="rounded-md bg-white/10 px-3 py-2 text-xs text-white/80">{item}</span>
                  ))}
                </div>
                </article>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_14%_16%,rgba(124,58,237,0.24),transparent_30%),radial-gradient(circle_at_86%_42%,rgba(14,165,233,0.16),transparent_28%),linear-gradient(135deg,#080611_0%,#111827_48%,#090817_100%)] px-4 py-20 sm:px-5 md:px-8 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:88px_88px] opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-night via-[#0b0817]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-night via-[#090817]/70 to-transparent" />
      <div className="relative mx-auto max-w-7xl space-y-16">
        <div className="grid gap-10 md:grid-cols-[0.32fr_0.68fr]">
          <AnimatedContent distance={48}>
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-orchid">Career</p>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Work Experience</h2>
          </AnimatedContent>
          <div className="grid gap-6 lg:grid-cols-2">
            {experience.map((item, index) => {
              const logo = getExperienceLogo(item.org);
              const meta = splitTimelineMeta(item.meta);

              return (
                <GlowCard key={item.org} delay={index * 0.08}>
                  <article className="flex min-h-[238px] min-w-0 flex-col">
                    <div className="mb-7 flex min-h-12 items-start justify-between gap-4">
                      {logo ? (
                        <img
                          className="max-h-12 w-28 object-contain object-left opacity-90 drop-shadow-[0_0_18px_rgba(56,189,248,0.18)]"
                          src={logo.src}
                          alt={logo.alt}
                        />
                      ) : (
                        <span className="grid h-12 w-12 place-items-center rounded-md border border-orchid/35 bg-orchid/10 font-display text-lg font-semibold text-orchid">
                          {item.org.slice(0, 1)}
                        </span>
                      )}
                      {meta.time ? (
                        <span className="shrink-0 rounded-md border border-white/10 bg-white/10 px-3 py-1 text-right text-xs leading-5 text-mist">
                          {meta.time}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-white">{item.org}</h3>
                    {item.org !== item.title ? <p className="mt-2 text-sm font-medium text-orchid">{item.title}</p> : null}
                    {meta.context ? <p className="mt-2 text-sm text-mist">{meta.context}</p> : null}
                    {item.description ? <p className="mt-5 text-sm leading-6 text-white/72">{item.description}</p> : null}
                  </article>
                </GlowCard>
              );
            })}
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-[0.32fr_0.68fr]">
          <AnimatedContent distance={48}>
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">Academic</p>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Education</h2>
          </AnimatedContent>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item, index) => {
              const logo = getSchoolLogo(item.school);
              const meta = splitTimelineMeta(item.meta);

              return (
                <GlowCard key={item.school} delay={0.12 + index * 0.08}>
                  <article className="flex min-h-[238px] min-w-0 flex-col">
                    <div className="mb-7 flex min-h-16 items-start justify-between gap-4">
                      {logo ? (
                        <img
                          className="h-14 w-14 object-contain object-left opacity-85 drop-shadow-[0_0_18px_rgba(192,132,252,0.18)] sm:h-16 sm:w-16"
                          src={logo.src}
                          alt={logo.alt}
                        />
                      ) : null}
                      {meta.time ? (
                        <span className="shrink-0 rounded-md border border-white/10 bg-white/10 px-3 py-1 text-right text-xs leading-5 text-mist">
                          {meta.time}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">{item.school}</h3>
                    <p className="mt-2 text-sm font-medium text-orchid">{item.degree}</p>
                    {meta.context ? <p className="mt-2 text-sm text-mist">{meta.context}</p> : null}
                    {item.note ? <p className="mt-4 text-sm leading-6 text-white/70">{item.note}</p> : null}
                  </article>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-night px-4 py-20 sm:px-5 md:px-8 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#090817] via-night/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080611] via-night/75 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <AnimatedContent className="mb-12 max-w-2xl" distance={48}>
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-orchid">Capabilities</p>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Where Product Thinking Meets Data Execution</h2>
        </AnimatedContent>
        <div className="grid gap-6 md:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <GlowCard key={skill.title} delay={index * 0.08}>
              <article className="min-w-0">
                <Icon className="text-orchid" size={30} />
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{skill.title}</h3>
                <div className="mt-5 space-y-2">
                  {skill.items.map((item) => (
                    <p key={item} className="text-sm text-mist">{item}</p>
                  ))}
                </div>
              </article>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#080611] px-4 py-20 text-white sm:px-5 md:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-night via-[#080611]/80 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
        <AnimatedContent distance={48}>
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-orchid">Contact</p>
          <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
            Available for data product, BI product, and business analytics platform opportunities.
          </h2>
        </AnimatedContent>
        <AnimatedContent className="space-y-4 text-white/70" distance={48} delay={0.12}>
          <GlowButton href={`mailto:${profile.email}`} variant="secondary" className="w-full sm:w-auto">
            <Mail size={18} />
            {profile.email}
          </GlowButton>
          <p className="flex items-center gap-3">
            <MapPin size={18} />
            {profile.city}
          </p>
        </AnimatedContent>
      </div>
    </section>
  );
}

export function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Method />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
