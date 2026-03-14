import { useRef, useEffect } from "react";

const spanMap = {
  "span-4": "col-span-full desk:col-span-4",
  "span-5": "col-span-full desk:col-span-5",
  "span-6": "col-span-full desk:col-span-6",
  "span-7": "col-span-full desk:col-span-7",
  "span-8": "col-span-full desk:col-span-8",
  "span-12": "col-span-full",
};

const catClasses = {
  "cat-ai": "bg-[rgba(255,60,172,0.12)] text-accent1",
  "cat-infra": "bg-[rgba(0,245,212,0.12)] text-accent2",
  "cat-bio": "bg-[rgba(245,166,35,0.12)] text-accent3",
  "cat-social": "bg-[rgba(123,97,255,0.12)] text-accent4",
  "cat-data": "bg-[rgba(57,255,20,0.12)] text-accent5",
};

const statusStyle = {
  Shipped: "text-accent2 border-accent2/30 bg-accent2/[0.07]",
  Completed: "text-accent2 border-accent2/30 bg-accent2/[0.07]",
  "In Progress": "text-accent3 border-accent3/30 bg-accent3/[0.07]",
  Ongoing: "text-accent3 border-accent3/30 bg-accent3/[0.07]",
  Concept: "text-accent4 border-accent4/30 bg-accent4/[0.07]",
};

export default function Card({ card, onEnter, onLeave, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "";
          el.style.transform = "";
          el.style.animationDelay = delay + "s";
          el.classList.add("fade-up");
          obs.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`card-item ${card.color} ${spanMap[card.span]} bg-card border border-edge relative overflow-hidden transition-[border-color,transform,box-shadow] duration-300 cursor-none hover:-translate-y-[5px] hover:z-10 flex flex-col`}
      style={{ padding: "44px 44px 36px" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Colour glow overlay */}
      <div className="card-glow" />

      {/* Large background number */}
      <div className="absolute -right-[10px] -top-5 font-display text-[160px] font-black text-white/4 pointer-events-none leading-none tracking-[-0.05em] select-none">
        {card.id}
      </div>

      {/* Top row: index + category + status */}
      <div className="font-mono text-[11px] text-dim tracking-[0.2em] mb-8 flex justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="text-dim/50">{card.id}</span>
          <span
            className={`font-mono text-[9px] tracking-[0.3em] uppercase px-[10px] py-[4px] rounded-sm font-bold ${catClasses[card.catStyle]}`}
          >
            {card.category}
          </span>
        </div>
        {card.status && (
          <span
            className={`font-mono text-[8px] tracking-[0.2em] uppercase px-[8px] py-[3px] rounded-full border ${statusStyle[card.status] ?? "text-dim border-edge"}`}
          >
            {card.status}
          </span>
        )}
      </div>

      {/* Title */}
      <div className="font-display text-[clamp(20px,2.4vw,30px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-snow mb-2">
        {card.title}
      </div>
      {card.subtitle && (
        <div className="font-mono text-[11px] tracking-[0.15em] text-snow/70 uppercase mb-6">
          {card.subtitle}
        </div>
      )}

      {/* Description */}
      <div className="text-[14px] text-snow/90 leading-[1.85] mb-6 flex-1">
        {card.desc}
      </div>

      {/* Impact box */}
      {card.impact && (
        <div
          className={`card-impact font-mono text-xs text-snow bg-white/3 border border-edge px-[14px] py-[12px] mb-5 leading-[1.65] impact-${card.color}`}
        >
          <strong className="block text-[9px] tracking-[0.25em] uppercase text-snow/70 mb-[6px]">
            {card.impact.label}
          </strong>
          {card.impact.text}
        </div>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {card.tech.map((t) => (
          <span
            key={t}
            className="tech-tag font-mono text-[10px] px-[11px] py-[5px] border border-edge text-snow/80 tracking-[0.05em] rounded-sm transition-all duration-200"
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA row with links */}
      <div className="card-cta">
        <span>View Project</span>
        {card.github && (
          <a
            href={card.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 font-mono text-[9px] tracking-[0.15em] uppercase text-snow/80 hover:text-snow transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            ↗ GitHub
          </a>
        )}
      </div>
    </div>
  );
}
