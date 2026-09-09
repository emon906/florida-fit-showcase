"use client";

import type { ComponentPropsWithoutRef } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
            "animate-marquee flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
          })}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export interface Testimonial {
  name: string;
  role: string;
  body: string;
  img: string;
}

export const floridaFitnessTestimonials: Testimonial[] = [
  {
    name: "Marcus Reed",
    role: "Member since 2022",
    body: "Added 90 lbs to my deadlift in eight months. The coaching here is on another level — every session has a purpose.",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Danielle Carter",
    role: "Weight loss program",
    body: "Down 38 pounds and I've kept it off. Nobody let me quit, and that made all the difference.",
    img: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Tyler Nguyen",
    role: "Personal training",
    body: "My trainer rebuilt my form from scratch. Zero knee pain now and I'm squatting heavier than ever.",
    img: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Alyssa Brooks",
    role: "Group fitness",
    body: "I used to be terrified of the weight floor. Six months in, I walk in like I own it. Confidence changed everything.",
    img: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Jordan Ellis",
    role: "Cardio performance",
    body: "Shaved four minutes off my 5K. The conditioning work here translated straight into race day.",
    img: "https://i.pravatar.cc/150?img=52",
  },
  {
    name: "Priya Raman",
    role: "Member since 2023",
    body: "The community is the reason I stay. People notice when you miss a week, and they cheer for every PR.",
    img: "https://i.pravatar.cc/150?img=26",
  },
  {
    name: "Chris Whitaker",
    role: "Strength program",
    body: "Best equipped gym in Trenton, hands down. Clean, never overcrowded, and the racks are always available.",
    img: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Monica Vaughn",
    role: "Transformation program",
    body: "Twelve weeks completely reset my habits. Stronger, leaner, sleeping better — and I actually enjoy training now.",
    img: "https://i.pravatar.cc/150?img=31",
  },
  {
    name: "Devon Miller",
    role: "Functional fitness",
    body: "At 52 I move better than I did at 35. The mobility and functional work is worth the membership alone.",
    img: "https://i.pravatar.cc/150?img=60",
  },
  {
    name: "Kayla Simmons",
    role: "Personal training",
    body: "My coach tracks every lift and adjusts weekly. It feels like a program built for me, not a template.",
    img: "https://i.pravatar.cc/150?img=44",
  },
  {
    name: "Andre Foster",
    role: "Member since 2021",
    body: "Started barely able to run a lap. Last month I finished my first half marathon. Florida Fitness got me there.",
    img: "https://i.pravatar.cc/150?img=59",
  },
  {
    name: "Hannah Boyd",
    role: "Weight training",
    body: "First gym where I never felt judged. Supportive people, serious training, zero ego.",
    img: "https://i.pravatar.cc/150?img=25",
  },
];

function TestimonialCard({ name, role, body, img }: Testimonial) {
  return (
    <Card className="w-64 gap-0 rounded-xl border-white/10 bg-navy/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_50px_-20px_rgba(219,26,26,0.5)] sm:w-72">
      <div className="flex items-center gap-3">
        <Avatar className="size-10 ring-2 ring-primary/60">
          <AvatarImage src={img} alt={name} loading="lazy" />
          <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <figcaption className="truncate text-sm font-semibold text-foreground">{name}</figcaption>
          <p className="truncate text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
        “{body}”
      </blockquote>
    </Card>
  );
}

export function TestimonialsMarquee3D({
  testimonials = floridaFitnessTestimonials,
  className,
}: {
  testimonials?: Testimonial[];
  className?: string;
}) {
  const size = Math.ceil(testimonials.length / 4);
  const columns: Testimonial[][] = [
    testimonials.slice(0, size),
    testimonials.slice(size, size * 2),
    testimonials.slice(size * 2, size * 3),
    testimonials.slice(size * 3),
  ];
  const [col0 = [], col1 = [], col2 = [], col3 = []] = columns;


  return (
    <div
      className={cn(
        "relative flex h-[520px] w-full flex-row items-center justify-center gap-3 overflow-hidden sm:h-[620px]",
        className,
      )}
    >
      <div
        className="flex flex-row items-center gap-3"
        style={{
          transform:
            "translateX(-40px) translateY(0px) translateZ(-90px) rotateX(14deg) rotateY(-8deg) rotateZ(16deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:34s]">
          {columns[0].map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:28s]">
          {columns[1].map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="hidden [--duration:38s] md:flex">
          {columns[2].map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="hidden [--duration:30s] lg:flex">
          {columns[3].map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

export default TestimonialsMarquee3D;
