import { useRef, useEffect } from "react";
import { SKILLS, PERSON } from "../data/portfolio";

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
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
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export default function About() {
  const sectionRef = useReveal(0.05);

  return (
    <section
      id="about"
      className="px-[60px] max-[900px]:px-6"
      style={{ paddingTop: "10px", paddingBottom: "10px" }}
    >
      <div
        ref={sectionRef}
        className="grid desk:grid-cols-12 grid-cols-1 gap-12"
      >
        {/* Section label */}
        <div className="col-span-full pt-16">
          <div className="font-mono text-[16px] font-bold tracking-[0.4em] text-accent2 uppercase pb-14 border-b border-white/20 mb-24">
            // 02 — About Me
          </div>
        </div>

        {/* Left: big statement + bio + socials */}
        <div className="desk:col-span-7 col-span-full desk:pr-20 mb-12 desk:mb-0">
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-bold text-snow leading-[1.1] tracking-[-0.02em] mb-10">
            I don't just write code.
            <br />I build leverage.
          </h2>
          <p className="text-[16px] text-dim leading-[1.9] mb-7">
            {PERSON.bio}
          </p>
          <p className="text-[16px] text-dim leading-[1.9] mb-10">
            My focus is at the intersection of{" "}
            <span className="text-snow">beautiful UX</span> and{" "}
            <span className="text-snow">powerful AI backends</span> — systems
            that don't just work but feel inevitable once you use them.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap gap-3 mt-0">
            {[
              { label: "GitHub", href: PERSON.socials.github },
              { label: "LinkedIn", href: PERSON.socials.linkedin },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] tracking-[0.15em] uppercase text-dim border border-edge px-6 py-3 hover:text-snow hover:border-white/20 transition-all duration-200"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Right: skills grid */}
        <div className="desk:col-span-5 col-span-full">
          <div className="grid grid-cols-1 gap-4">
            {SKILLS.map((group, i) => (
              <div
                key={group.label}
                className="bg-card border border-edge p-8 skill-card"
              >
                <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-snow/80 mb-5">
                  {String(i + 1).padStart(2, "0")} — {group.label}
                </div>
                <div className="flex flex-wrap gap-[10px]">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[10px] px-[11px] py-[5px] border border-edge text-snow/70 tracking-[0.04em] rounded-sm hover:text-snow hover:border-white/20 transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
