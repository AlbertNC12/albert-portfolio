import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Braces,
  Cloud,
  CloudRain,
  Code2,
  Flag,
  Github,
  Hand,
  Link2,
  Mail,
  Menu,
  Phone,
  ScanSearch,
  ShieldCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";


const projects = [
  {
    title: 'Isyaratku "KitaBisa"',
    tag: "AI · 2026",
    description:
      "AI sign-language learning platform with real-time gesture feedback. Built the full technical stack solo: a FastAPI + MediaPipe vision service for gesture-accuracy scoring, a Django/FastAPI backend for auth, progress tracking and community, and the Tailwind front end with dashboards and quizzes.",
    stack: ["FastAPI", "MediaPipe", "Django", "Tailwind"],
    url: "https://github.com/AlbertNC12/KitaBisa/",
    summary: "Learning sign language with live gesture feedback.",
    icon: Hand,
  },
  {
    title: "Weather App",
    tag: "NASA Space Apps",
    description:
      "Backend for a weather prediction app built on the NASA POWER API: data-range analysis, rainfall prediction logic and JSON export. Team handled the Leaflet.js front end and Vercel deployment.",
    stack: ["Python", "NASA POWER API", "Vercel"],
    url: "https://nasa-space-app-challenge-2025-3uon-i3esy99ej.vercel.app/",
    summary: "Weather predictions informed by NASA climate data.",
    icon: CloudRain,
  },
  {
    title: "Cancer Detection AI",
    tag: "Machine learning",
    description:
      "Skin lesion classification model using ResNet-50 with transfer learning and fine-tuning — 89.3% accuracy, 93.3% precision and 93.3% recall through image preprocessing, augmentation and model optimisation.",
    stack: ["ResNet-50", "Transfer learning", "Python"],
    url: "https://shorturl.at/IkdCw",
    summary: "Classifying skin lesions with computer vision.",
    icon: ScanSearch,
  },
  {
    title: "Phishing Detection",
    tag: "CNN–LSTM · 2026",
    description:
      "Hybrid CNN–LSTM model that detects phishing websites straight from HTML content, using separate word-level and character-level preprocessing to capture both semantic and structural patterns. 92.3% accuracy.",
    stack: ["CNN", "LSTM", "NLP"],
    url: "https://shorturl.at/3P3ZI",
    summary: "Spotting phishing websites from their HTML content.",
    icon: ShieldCheck,
  },
  {
    title: "Formula 1 API",
    tag: "API",
    description:
      "RESTful API serving structured Formula 1 data from 1950 to today — standings, drivers, teams, race results and championship statistics, with OpenAPI docs and normalised JSON responses.",
    stack: ["FastAPI", "Python", "OpenAPI"],
    url: "https://github.com/AlbertNC12/F1API",
    summary: "Seven decades of Formula 1 data in one API.",
    icon: Flag,
  },
  {
    title: "URL Shortener",
    tag: "Backend",
    description:
      "RESTful URL shortener API in Go with efficient link generation, storage and retrieval — containerised with Docker and backed by Redis for fast in-memory storage and caching.",
    stack: ["Go", "Redis", "Docker"],
    url: "https://github.com/AlbertNC12/urlshortener",
    summary: "Short links served quickly with Go and Redis.",
    icon: Link2,
  },
];

const capabilities = [
  { icon: Code2, title: "AI & Machine Learning", detail: "2 selected projects" },
  { icon: Braces, title: "Backend Development", detail: "Python · Go · APIs" },
  { icon: Cloud, title: "Cloud Engineering", detail: "Azure · Docker · Terraform" },
];

const certifications = [
  ["Python", "HackerRank", "Aug 2026", "https://shorturl.at/9cG0G"],
  ["AI for Business Professionals", "HP", "Jul 2026", "https://shorturl.at/OHfkM"],
  ["Databases for Developers: Foundations", "Oracle Dev Gyms", "Oct 2026", "https://shorturl.at/O9Z6j"],
  ["Go", "HackerRank", "Nov 2026", "https://shorturl.at/xGO2M"],
  ["AI for Beginners", "HP", "Jul 2026", "https://shorturl.at/L9EED"],
];

const awards = [
  {
    title: "NASA Space Apps Challenge",
    issuer: "NASA",
    date: "2022",
    url: "https://tinyurl.com/2efys3ax",
  },
];

const volunteering = [
  {
    name: "HIMTI — Bina Nusantara",
    period: "2024 — 2025",
    text: "Guided fellow students through exam preparation, course discussions and collaborative study sessions; also served as an MC.",
    url: "https://student-activity.binus.ac.id/himti/",
  },
  {
    name: "KMBD Dhammavaddhana",
    period: "2024 — 2025",
    text: "Taught Buddhist teachings and values, and helped coordinate preparation and activities for Waisak Day events.",
    url: "https://tinyurl.com/mrkx2ab5",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Albert Nicholas C — Computer Science Student & Developer" },
      { name: "description", content: "Computer Science student at Bina Nusantara building AI-powered apps, APIs and cloud systems." },
      { property: "og:title", content: "Albert Nicholas C — Computer Science Student & Developer" },
      { property: "og:description", content: "Computer Science student at Bina Nusantara building AI-powered apps, APIs and cloud systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState<(typeof projects)[number] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      <header className="absolute inset-x-0 top-0 z-30">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-10">
          <a href="#top" className="grid size-11 place-items-center bg-primary font-display text-lg font-bold text-primary-foreground" aria-label="Albert Nicholas Chandra home">
            A.
          </a>
          <div className="hidden items-center gap-9 text-sm font-medium md:flex">
            <a href="#about" className="nav-link">About</a>
            <a href="#work" className="nav-link">Works</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <Button variant="ghost" size="icon" className="text-foreground md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
        {menuOpen && (
          <div className="mx-6 grid border border-border bg-card p-5 text-sm md:hidden">
            {["about", "work", "experience", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="border-b border-border py-3 capitalize last:border-0">{item}</a>
            ))}
          </div>
        )}
      </header>

      <section id="top" className="relative border-b border-border bg-background pt-28 lg:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:min-h-[500px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-10 lg:py-20">
          <div className="relative z-10 self-center pt-4 lg:pt-0">
            <p className="eyebrow">Computer Science student</p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.95] md:text-7xl">Albert<br />Nicholas<br />Chandra.</h1>
            <span className="mt-6 block h-1 w-12 bg-primary" />
          </div>

          <div className="relative z-10 max-w-md self-center lg:justify-self-end">
            <p className="eyebrow">Introduction</p>
            <h2 className="mt-5 font-display text-2xl font-medium leading-tight md:text-3xl">Software engineer building AI products end to end.</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">I turn ideas into working products — from machine-learning models and APIs to interfaces people can use.</p>
            <a href="#about" className="action-link mt-7">My story <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="about" className="section-band">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="mt-5 max-w-sm font-display text-3xl font-medium leading-tight md:text-4xl">Curious about difficult problems. Serious about useful solutions.</h2>
            </div>
            <div>
              <p className="max-w-lg font-display text-xl leading-relaxed">I’m a Computer Science student at Bina Nusantara University with a 3.7 GPA, focused on AI, backend systems and cloud engineering.</p>
              <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">My recent work includes a real-time sign-language learning platform, medical-image classification and production-style APIs in Python and Go. I also enjoy mentoring peers and contributing to student communities.</p>
              <div className="mt-8 flex gap-12">
                <div><strong className="stat">6</strong><span className="stat-label">Projects<br />shipped</span></div>
                <div><strong className="stat">5</strong><span className="stat-label">Professional<br />certifications</span></div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, detail }, index) => (
              <div key={title} className={`capability ${index === 0 ? "capability-featured" : ""}`}>
                <Icon size={24} strokeWidth={1.5} />
                <div className="mt-12">
                  <h3 className="font-display text-xl font-medium">{title}</h3>
                  <p className="mt-2 text-xs opacity-60">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="eyebrow">Portfolio</p>
              <h2 className="mt-5 font-display text-3xl font-medium leading-tight md:text-4xl">Selected<br />projects.</h2>
              <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">A selection of practical AI, backend and data products.</p>
              <a href="https://github.com/AlbertNC12" target="_blank" rel="noreferrer" className="action-link mt-8">Explore GitHub <ArrowRight size={16} /></a>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project, index) => (
                <Button key={project.title} variant="project" size="project" type="button" onClick={() => setOpen(project)}>
                  <div className="flex w-full items-start justify-between gap-3">
                    <span className="text-xs font-semibold text-primary">0{index + 1} / 0{projects.length}</span>
                    <span className="text-right text-xs text-muted-foreground">{project.tag}</span>
                  </div>
                  <div className="w-full py-6">
                    <project.icon size={42} strokeWidth={1.15} className="mb-5 text-primary" aria-hidden="true" />
                    <h3 className="font-display text-xl font-medium leading-tight">{project.title}</h3>
                    <p className="mt-3 text-sm font-normal leading-6 text-muted-foreground">{project.summary}</p>
                  </div>
                  <span className="flex w-full items-center justify-between border-t border-border pt-4 text-xs font-semibold text-primary">
                    <span>View project</span><ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-band">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Credentials</p>
              <h2 className="mt-5 font-display text-3xl font-medium">Certifications.</h2>
              <div className="mt-8 border-t border-border">
                {certifications.map(([name, issuer, date, url]) => (
                  <a key={name} href={url} target="_blank" rel="noreferrer" className="row-link">
                    <span><strong>{name}</strong><small>{issuer} · {date}</small></span><ArrowRight size={16} />
                  </a>
                ))}
              </div>

              <div className="mt-12">
                <p className="eyebrow">Recognition</p>
                <h3 className="mt-3 font-display text-2xl font-medium">Awards.</h3>
                <div className="mt-6 border-t border-border">
                  {awards.map((award) => (
                    <a key={award.title} href={award.url} target="_blank" rel="noreferrer" className="row-link">
                      <span><strong>{award.title}</strong><small>{award.issuer} · {award.date}</small></span><ArrowRight size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow">Community</p>
              <h2 className="mt-5 font-display text-3xl font-medium">Volunteering.</h2>
              <div className="mt-8 space-y-10">
                {volunteering.map((item) => (
                  <article key={item.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <a href={item.url} target="_blank" rel="noreferrer" className="font-display text-lg font-medium hover:text-primary">{item.name}</a>
                      <span className="text-xs text-muted-foreground">{item.period}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                  </article>
                ))}
              </div>
              <div className="mt-12 border-t border-border pt-8">
                <p className="eyebrow">Languages & interests</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">Indonesian — Native · English — B2<br />Cloud engineering · Mobile development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-5 font-display text-4xl font-medium md:text-5xl">Have a project?<br />Let’s talk.</h2>
            <a href="mailto:albert.nicholaschandra@gmail.com" className="action-link mt-9">Send an email <ArrowRight size={16} /></a>
          </div>
          <div className="space-y-7">
            <a href="mailto:albert.nicholaschandra@gmail.com" className="contact-line"><Mail size={18} /><span>albert.nicholaschandra@gmail.com</span><ArrowRight size={16} /></a>
            <a href="tel:+628112078781" className="contact-line"><Phone size={18} /><span>08112078781</span><ArrowRight size={16} /></a>
            <a href="https://github.com/AlbertNC12" target="_blank" rel="noreferrer" className="contact-line"><Github size={18} /><span>github.com/AlbertNC12</span><ArrowRight size={16} /></a>
            <a href="/Albert-Nicholas-Chandra-CV.pdf" download="Albert-Nicholas-Chandra-CV.pdf" className="contact-line"><Code2 size={18} /><span>Download my CV</span><ArrowRight size={16} /></a>

          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 text-xs text-muted-foreground md:flex-row lg:px-10">
          <span className="grid size-9 place-items-center bg-primary font-display font-bold text-primary-foreground">A.</span>
          <span>© 2026 Albert Nicholas Chandra</span>
          <span>Jakarta, Indonesia</span>
        </div>
      </footer>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-overlay p-5 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && setOpen(null)}>
          <div role="dialog" aria-modal="true" aria-label={open.title} className="max-h-[calc(100dvh-2.5rem)] w-full max-w-xl overflow-y-auto border border-border bg-card p-7 shadow-2xl md:p-10">
            <div className="flex items-start justify-between gap-5">
              <div><p className="eyebrow">{open.tag}</p><h3 className="mt-3 font-display text-3xl font-medium">{open.title}</h3></div>
              <Button variant="ghost" size="icon" onClick={() => setOpen(null)} aria-label="Close project details"><X /></Button>
            </div>
            <p className="mt-7 text-sm leading-7 text-muted-foreground">{open.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {open.stack.map((item) => <span key={item} className="border border-border px-3 py-1.5 text-xs text-muted-foreground">{item}</span>)}
            </div>
            <a href={open.url} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">View project <ArrowRight size={16} /></a>
          </div>
        </div>
      )}
    </main>
  );
}