import { useRef, useEffect, useState } from "react";
import { PERSON } from "../data/portfolio";

export default function Contact() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "";
          el.style.transform = "";
          el.classList.add("fade-up");
          obs.disconnect();
        }
      },
      { threshold: 0.07 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSON.socials.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section
      id="contact"
      className="px-[60px] max-[900px]:px-6 relative overflow-hidden"
      style={{ paddingTop: '10px', paddingBottom: '10px' }}
    >
      {/* Background blur accents */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-accent2/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[300px] rounded-full bg-accent1/[0.04] blur-[100px]" />

      <div ref={sectionRef}>
        {/* Section label */}
        <div className="pt-16">
          <div className="font-mono text-[16px] font-bold tracking-[0.4em] text-accent2 uppercase pb-14 border-b border-white/20 mb-24">
            // 04 — Contact
          </div>
        </div>

        {/* Big CTA heading */}
        <div className="max-w-3xl mb-20">
          <h2 className="font-display text-[clamp(36px,5vw,72px)] font-black leading-[0.9] tracking-[-0.03em] mb-8">
            <span className="block text-snow">LET’S</span>
            <span className="block stroke-pink">BUILD</span>
            <span className="block text-accent3">SOMETHING.</span>
          </h2>
          <p className="text-[17px] text-dim leading-[1.9] max-w-xl">
            Whether you have a wild idea, a role to fill, or just want to talk
            about AI, distributed systems, or the future —
            <span className="text-snow"> my inbox is always open.</span>
          </p>
        </div>

        {/* Contact layout: big email card left, github + linkedin stacked right */}
        <div className="grid desk:grid-cols-5 grid-cols-1 gap-4">
          {/* Email — big card, 3 cols */}
          <button
            onClick={copyEmail}
            className="contact-card group text-left bg-card border border-edge desk:col-span-3 p-12 transition-all duration-300 hover:-translate-y-1 hover:border-accent2/40 hover:shadow-[0_16px_48px_-12px_rgba(0,245,212,0.15)] cursor-none"
          >
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-dim mb-6">
              01 — Email
            </div>
            <div className="font-display text-[clamp(18px,2.2vw,28px)] font-bold text-snow mb-4 group-hover:text-accent2 transition-colors break-all">
              {PERSON.socials.email}
            </div>
            <div className="font-mono text-[12px] tracking-[0.15em] uppercase text-dim group-hover:text-accent2 transition-colors">
              {copied ? "✓ Copied to clipboard" : "Click to copy →"}
            </div>
          </button>

          {/* GitHub + LinkedIn stacked, 2 cols */}
          <div className="desk:col-span-2 flex flex-col gap-4">
            <a
              href={PERSON.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group bg-card border border-edge p-10 flex-1 transition-all duration-300 hover:-translate-y-1 hover:border-accent4/40 hover:shadow-[0_16px_48px_-12px_rgba(123,97,255,0.15)] cursor-none"
            >
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-dim mb-5">
                02 — GitHub
              </div>
              <div className="font-display text-[22px] font-bold text-snow mb-3 group-hover:text-accent4 transition-colors">
                @{PERSON.socials.github.split("/").pop()}
              </div>
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-dim group-hover:text-accent4 transition-colors">
                See the code ↗
              </div>
            </a>

            <a
              href={PERSON.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group bg-card border border-edge p-10 flex-1 transition-all duration-300 hover:-translate-y-1 hover:border-accent3/40 hover:shadow-[0_16px_48px_-12px_rgba(245,166,35,0.15)] cursor-none"
            >
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-dim mb-5">
                03 — LinkedIn
              </div>
              <div className="font-display text-[22px] font-bold text-snow mb-3 group-hover:text-accent3 transition-colors">
                Connect
              </div>
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-dim group-hover:text-accent3 transition-colors">
                Professional network ↗
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
