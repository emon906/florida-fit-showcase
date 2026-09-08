import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Dumbbell,
  HeartPulse,
  Users,
  Activity,
  Timer,
  Flame,
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  Menu,
  X,
  Instagram,
  Facebook,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CircularGallery, type GalleryItem } from "@/components/ui/circular-gallery";
import { TestimonialsMarquee3D } from "@/components/ui/3d-testimonails";
import { useScrollReveal } from "@/hooks/use-reveal";

import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";
import team3 from "@/assets/team3.jpg";
import team4 from "@/assets/team4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Florida Fitness Trenton | Premium Gym & Personal Training" },
      {
        name: "description",
        content:
          "Florida Fitness in Trenton, FL — strength training, personal coaching, cardio and group fitness in a premium, community-driven gym. Start your free trial today.",
      },
      { property: "og:title", content: "Florida Fitness Trenton | Premium Gym & Training" },
      {
        property: "og:description",
        content:
          "Strength, cardio, personal training and group fitness in Trenton, FL. Train with purpose at Florida Fitness.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "+1 352-658-8040";
const PHONE_HREF = "tel:+13526588040";
const EMAIL = "floridafitnesstrenton@gmail.com";
const ADDRESS = "535 SE SR-26, Trenton, FL 32693";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    text: "Progressive barbell and dumbbell programming built to add real, measurable strength.",
  },
  {
    icon: Users,
    title: "Personal Training",
    text: "One-on-one coaching with a plan written around your body, schedule and goals.",
  },
  {
    icon: HeartPulse,
    title: "Cardio Performance",
    text: "Conditioning that builds engine and endurance without burning out your joints.",
  },
  {
    icon: Flame,
    title: "Group Fitness",
    text: "High-energy coached classes where the room pushes you further than you'd go alone.",
  },
  {
    icon: Activity,
    title: "Functional Fitness",
    text: "Mobility, stability and movement quality so you feel strong far outside the gym.",
  },
  {
    icon: Timer,
    title: "Transformation Programs",
    text: "Structured 12-week blocks combining training, accountability and habit coaching.",
  },
];

const galleryItems: GalleryItem[] = [
  { image: g1, title: "Strength Training", subtitle: "Build Power & Confidence" },
  { image: g2, title: "Personal Training", subtitle: "Train With Purpose" },
  { image: g3, title: "Cardio Performance", subtitle: "Push Your Limits" },
  { image: g4, title: "Group Fitness", subtitle: "Stronger Together" },
  { image: g5, title: "Gym Equipment", subtitle: "Built For Serious Work" },
  { image: g6, title: "Functional Fitness", subtitle: "Move Better Every Day" },
  { image: g1, title: "Weight Training", subtitle: "Own Every Rep" },
  { image: g4, title: "Fitness Community", subtitle: "Stronger Together" },
  { image: g3, title: "Performance Training", subtitle: "Outwork Yesterday" },
  { image: g6, title: "Transformation Programs", subtitle: "Twelve Weeks, New You" },
];

const benefits = [
  "24/7 member access with secure entry",
  "Free goal-setting and movement assessment",
  "Premium racks, plates and cardio floor",
  "Unlimited group fitness classes",
  "Personal training plans at member rates",
  "Progress tracking and monthly check-ins",
  "Clean locker rooms and recovery area",
  "No long-term contract required",
];

const team = [
  { img: team1, name: "Ryan Alvarez", role: "Head Strength Coach" },
  { img: team2, name: "Sofia Marin", role: "Personal Trainer" },
  { img: team3, name: "Dominic Hale", role: "Performance Coach" },
  { img: team4, name: "Erica Boone", role: "Group Fitness Lead" },
];

const stats = [
  { value: "1200+", label: "Members Trained" },
  { value: "15+", label: "Weekly Classes" },
  { value: "24/7", label: "Member Access" },
  { value: "10", label: "Expert Coaches" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#programs", label: "Programs" },
    { href: "#showcase", label: "Gallery" },
    { href: "#membership", label: "Membership" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-navy-deep/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary">
            <Dumbbell className="size-5 text-primary-foreground" />
          </span>
          <span className="font-display text-lg leading-none tracking-wider">
            Florida<span className="text-primary"> Fitness</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="hero" size="lg" className="hidden sm:inline-flex">
            <a href="#contact">Join Now</a>
          </Button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-white/15 p-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-deep/98 px-5 py-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-white/5 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" size="lg" className="mt-3">
              <a href="#contact" onClick={() => setOpen(false)}>
                Join Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-primary uppercase">
      <span className="h-px w-8 bg-primary" />
      {children}
    </span>
  );
}

function Index() {
  useScrollReveal();

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background">
      <Nav />

      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={hero}
          alt="Athlete lifting a heavy barbell at Florida Fitness in Trenton"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-navy-deep/70" />
        <div
          className="float-slow absolute -right-24 bottom-10 hidden size-80 rounded-full bg-primary/20 blur-[110px] lg:block"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 sm:px-8">
          <div className="max-w-3xl">
            <div className="reveal">
              <SectionLabel>Trenton, Florida</SectionLabel>
            </div>
            <h1 className="reveal mt-6 text-5xl leading-[0.92] font-normal sm:text-7xl lg:text-8xl">
              Train Hard.
              <br />
              <span className="text-gradient-red">Live Stronger.</span>
            </h1>
            <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Florida Fitness is a premium strength and performance gym built for people who are
              done settling. Expert coaching, serious equipment and a community that shows up.
            </p>
            <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href="#contact">
                  Start Free Trial <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href="#programs">View Programs</a>
              </Button>
            </div>

            <div className="reveal mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl text-foreground sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROGRAMS ---------------- */}
      <section id="programs" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
              Programs Built <span className="text-primary">For Results</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Every program is coached, progressive and measurable — no guesswork, no wasted
              sessions.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <article
                key={p.title}
                className="reveal surface-card group relative overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute -top-16 -right-16 size-32 rounded-full bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/25" />
                <span className="relative flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="size-6" />
                </span>
                <h3 className="relative mt-6 text-xl tracking-wide">{p.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
                <span className="relative mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-primary uppercase opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- VISUAL SHOWCASE ---------------- */}
      <section
        id="showcase"
        className="relative overflow-hidden border-y border-white/10 bg-navy-deep py-24 sm:py-32"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,oklch(0.568_0.221_28.1/0.18),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
          <div className="reveal flex flex-col items-center">
            <SectionLabel>Inside The Gym</SectionLabel>
            <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
              The Florida Fitness <span className="text-primary">Experience</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Drag, scroll or just watch — a look at the training floor, the coaching and the energy
              that keeps members coming back.
            </p>
          </div>
        </div>
        <div className="reveal mt-14">
          <CircularGallery items={galleryItems} />
        </div>
      </section>

      {/* ---------------- MEMBERSHIP / BENEFITS ---------------- */}
      <section id="membership" className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <SectionLabel>Membership</SectionLabel>
            <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
              Everything You Need <span className="text-primary">Included</span>
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              One membership, full access. No hidden add-ons, no pressure upsells — just a serious
              training environment and coaches who know your name.
            </p>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Check className="size-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal surface-card relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="pointer-events-none absolute -top-20 -right-20 size-56 rounded-full bg-primary/25 blur-[90px]" />
            <p className="relative text-xs font-bold tracking-[0.28em] text-primary uppercase">
              Most Popular
            </p>
            <h3 className="relative mt-3 text-3xl">Unlimited Membership</h3>
            <div className="relative mt-6 flex items-end gap-2">
              <span className="font-display text-6xl text-foreground">$49</span>
              <span className="mb-2 text-sm text-muted-foreground">/ month</span>
            </div>
            <p className="relative mt-3 text-sm text-muted-foreground">
              Full gym access, all classes included, cancel anytime.
            </p>
            <div className="relative mt-8 space-y-3">
              {[
                "7-day free trial for new members",
                "Free movement assessment",
                "Discounted personal training",
              ].map((x) => (
                <p key={x} className="flex items-center gap-3 text-sm">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {x}
                </p>
              ))}
            </div>
            <Button asChild variant="hero" size="xl" className="relative mt-9 w-full">
              <a href="#contact">
                Claim Your Free Week <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section
        id="testimonials"
        className="relative overflow-hidden border-y border-white/10 py-24 sm:py-32"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.294_0.066_238.5/0.8),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <SectionLabel>Member Stories</SectionLabel>
            <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
              Real People. <span className="text-primary">Real Progress.</span>
            </h2>
          </div>
          <div className="reveal mt-10">
            <TestimonialsMarquee3D />
          </div>
        </div>
      </section>

      {/* ---------------- TEAM ---------------- */}
      <section id="team" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <SectionLabel>Our Team</SectionLabel>
            <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
              Coaches Who <span className="text-primary">Show Up</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {team.map((m, i) => (
              <div
                key={m.name}
                className="reveal group relative overflow-hidden rounded-2xl border border-white/10"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.role} at Florida Fitness`}
                  loading="lazy"
                  width={700}
                  height={800}
                  className="aspect-[7/8] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="block h-0.5 w-8 bg-primary transition-all duration-500 group-hover:w-14" />
                  <h3 className="mt-3 text-base tracking-wide sm:text-lg">{m.name}</h3>
                  <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="border-t border-white/10 bg-navy-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <SectionLabel>Visit Us</SectionLabel>
            <h2 className="mt-5 text-4xl leading-[0.95] sm:text-6xl">
              Your First Session <span className="text-primary">Is On Us</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Stop by, call, or send us a message — we'll get you set up with a free week and a plan
              that fits your goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            <div className="reveal grid gap-4 lg:col-span-2">
              {[
                { icon: Phone, label: "Call Us", value: PHONE, href: PHONE_HREF },
                { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: MapPin, label: "Location", value: ADDRESS },
                { icon: Clock, label: "Hours", value: "Staffed daily · 24/7 member access" },
              ].map((c) => {
                const inner = (
                  <>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <c.icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                        {c.label}
                      </span>
                      <span className="mt-1 block text-sm font-semibold break-words">{c.value}</span>
                    </span>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="surface-card group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={c.label}
                    className="surface-card group flex items-center gap-4 rounded-2xl p-5"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="reveal overflow-hidden rounded-2xl border border-white/10 lg:col-span-3">
              <iframe
                title="Florida Fitness location map"
                src="https://www.google.com/maps?q=535+SE+SR-26,+Trenton,+FL+32693&output=embed"
                loading="lazy"
                className="h-80 w-full lg:h-full"
                style={{ border: 0, filter: "grayscale(0.4) contrast(1.1)" }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="reveal surface-card mt-6 flex flex-col items-center justify-between gap-5 rounded-2xl p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-2xl">Ready when you are</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Call {PHONE} or walk in — no appointment needed.
              </p>
            </div>
            <Button asChild variant="hero" size="xl" className="pulse-ring">
              <a href={PHONE_HREF}>
                <Phone className="size-4" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-white/10 bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-md bg-primary">
                <Dumbbell className="size-5 text-primary-foreground" />
              </span>
              <span className="font-display text-lg tracking-wider">
                Florida<span className="text-primary"> Fitness</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A premium strength, cardio and personal training gym in Trenton, Florida — built
              around real coaching and a community that pushes each other forward.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.2em]">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[
                ["#programs", "Programs"],
                ["#showcase", "Gallery"],
                ["#membership", "Membership"],
                ["#testimonials", "Reviews"],
                ["#team", "Our Team"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.2em]">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={PHONE_HREF} className="transition-colors hover:text-primary">
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-words transition-colors hover:text-primary"
                >
                  {EMAIL}
                </a>
              </li>
              <li>{ADDRESS}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-6 sm:px-8">
          <p className="mx-auto max-w-7xl text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Florida Fitness. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
