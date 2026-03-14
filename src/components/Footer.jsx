import { PERSON } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-edge overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent2/[0.03] blur-[80px]" />

      {/* Main footer content */}
      <div className="px-[60px] pt-16 pb-10 max-[900px]:px-6 max-[900px]:pt-10">
        <div className="grid desk:grid-cols-12 grid-cols-1 gap-8 mb-14">
          {/* Left: name + tagline */}
          <div className="desk:col-span-5 col-span-full">
            <div className="font-display text-[clamp(36px,5vw,64px)] font-black text-snow tracking-[-0.04em] leading-[0.9] mb-4">
              {PERSON.name.split(" ")[0]}
              <span className="text-accent2">.</span>
            </div>
            <p className="text-[13px] text-dim leading-[1.75] max-w-xs">
              Building things that scale, think, and matter. Full-stack engineer
              based in {PERSON.location}.
            </p>
          </div>

          {/* Middle: navigation */}
          <div className="desk:col-span-3 col-span-full">
            <div className="font-mono text-[9px] tracking-[0.35em] uppercase text-dim mb-5">
              Navigate
            </div>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-[11px] tracking-[0.1em] text-dim hover:text-snow transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: socials + availability */}
          <div className="desk:col-span-4 col-span-full">
            <div className="font-mono text-[9px] tracking-[0.35em] uppercase text-dim mb-5">
              Connect
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "GitHub", href: PERSON.socials.github },
                { label: "LinkedIn", href: PERSON.socials.linkedin },
                {
                  label: PERSON.socials.email,
                  href: `mailto:${PERSON.socials.email}`,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-[0.1em] text-dim hover:text-snow transition-colors duration-200 w-fit"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-center items-center pt-8 border-t border-edge font-mono text-[10px] tracking-[0.15em] text-dim uppercase">
          <div className="flex items-center gap-2">
            <span className="available-dot" />
            Available for work
          </div>
        </div>
      </div>
    </footer>
  );
}
