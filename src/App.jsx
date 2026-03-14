import { PROJECTS } from "./data/portfolio";
import useCursor from "./hooks/useCursor";
import Card from "./components/Card";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { cursorRef, ringRef, grow, shrink } = useCursor();

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      {/* ── 01 HERO ── */}
      <Header />

      {/* Divider */}
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <div className="h-px bg-linear-to-r from-transparent via-edge to-transparent" />
      </div>

      {/* ── 02 ABOUT ── */}
      <About />

      {/* Divider */}
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <div className="h-px bg-linear-to-r from-transparent via-edge to-transparent" />
      </div>

      {/* ── 03 PROJECTS ── */}
      <section
        id="projects"
        className="px-[60px] max-[900px]:px-6"
        style={{ paddingTop: '10px', paddingBottom: '10px' }}
      >
        {/* Section label */}
        <div className="pt-16">
          <div className="font-mono text-[16px] font-bold tracking-[0.4em] text-accent2 uppercase pb-14 border-b border-white/20 mb-24">
            // 03 — Selected Projects
          </div>
        </div>

        <div className="grid desk:grid-cols-12 grid-cols-1 gap-4 mt-0">
          {PROJECTS.map((card, i) => (
            <Card
              key={card.id}
              card={card}
              delay={i * 0.07}
              onEnter={grow}
              onLeave={shrink}
            />
          ))}
        </div>
      </section>

      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <div className="h-px bg-linear-to-r from-transparent via-edge to-transparent" />
      </div>
      <Contact />

      {/* ── FOOTER ── */}
      <Footer />
    </>
  );
}
