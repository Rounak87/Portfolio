import { PERSON } from "../data/portfolio";
import { Github, Linkedin, Download } from "lucide-react";

export default function Header() {
  return (
    <header className="relative px-[60px] pt-[150px] pb-[160px] max-[900px]:px-6 max-[900px]:pt-24 max-[900px]:pb-24 overflow-hidden">
      {/* Subtle top-right blob glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent1/4 blur-[120px] translate-x-1/3 -translate-y-1/3" />
      <div className="pointer-events-none absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-accent4/4 blur-[100px]" />

      {/* Top Row: Name + Socials */}
      <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
        {/* Name */}
        <div
          className="fade-up font-display text-[clamp(24px,3.5vw,36px)] font-bold text-snow tracking-[-0.01em] uppercase"
          style={{ animationDelay: "0.08s" }}
        >
          {PERSON.name}
          <span className="blink-cursor text-accent2 ml-2">▋</span>
        </div>

        {/* Socials & Resume CTA */}
        <div
          className="fade-up flex items-center gap-4"
          style={{ animationDelay: "0.15s" }}
        >
          <a
            href={PERSON.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-dim hover:text-snow transition-colors p-2 border border-edge rounded-full hover:border-white/20"
          >
            <Github size={22} />
          </a>
          <a
            href={PERSON.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-dim hover:text-snow transition-colors p-2 border border-edge rounded-full hover:border-white/20"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="/Resume_RounakSingh.pdf"
            download
            className="flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-snow border border-edge px-4 py-2 rounded-full hover:border-accent2 hover:text-accent2 transition-all"
          >
            <Download size={18} /> Resume
          </a>
        </div>
      </div>

      {/* Hero headline — each word staggers */}
      <h1
        className="font-display font-black leading-[0.88] tracking-[-0.03em]"
        style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
      >
        {PERSON.tagline.split("\n").map((line, i) => (
          <span
            key={i}
            className={`block fade-up ${i === 0 ? "text-snow" : i === 1 ? "stroke-pink" : "text-accent3"}`}
            style={{ animationDelay: `${0.18 + i * 0.14}s` }}
          >
            {line}
          </span>
        ))}
      </h1>

      {/* Role + bio */}
      <div className="mt-28 max-w-xl">
        <p
          className="fade-up font-mono text-[11px] tracking-[0.2em] text-accent3 uppercase mb-16"
          style={{ animationDelay: "0.52s" }}
        >
          {PERSON.role}
        </p>
      </div>

      {/* CTA row */}
      <div
        className="fade-up flex flex-wrap items-center gap-4 mt-20"
        style={{ animationDelay: "0.75s" }}
      >
        <a
          href="#projects"
          className="hero-cta-primary font-mono text-[13px] tracking-[0.15em] uppercase px-8 py-[14px]"
        >
          View My Work →
        </a>
        <a
          href="#contact"
          className="hero-cta-secondary font-mono text-[13px] tracking-[0.15em] uppercase px-8 py-[14px]"
        >
          Get In Touch
        </a>
      </div>

      {/* Stats row */}
      <div
        className="fade-up flex flex-wrap gap-10 pt-10 border-t border-edge"
        style={{ animationDelay: "0.88s", marginTop: "50px" }}
      >
        <div>
          <div className="font-display text-[clamp(28px,3.5vw,42px)] font-black text-accent3 leading-none">
            Full‑Stack
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-dim uppercase mt-2">
            + AI
          </div>
        </div>
        <div>
          <div className="font-display text-[clamp(28px,3.5vw,42px)] font-black text-accent3 leading-none">
            {PERSON.location}
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-dim uppercase mt-2">
            Based in
          </div>
        </div>
      </div>
    </header>
  );
}
