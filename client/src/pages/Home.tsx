import { ArrowDown, ArrowUpRight, Menu, Play, X } from "lucide-react";
import { useState } from "react";

const logoSrc = "/manus-storage/logo-little-wild-films_ab28ea8f.png";
const heroSrc = "/manus-storage/hero-film-still_04dfca7c.jpg";
const cardSrc = "/manus-storage/film-card-still_16d5ff5a.jpg";

const films = [
  {
    title: "Mosslight",
    detail: "Animated short · In development",
    description: "A forest remembers the people who pass through it.",
    tone: "feature-film",
  },
  {
    title: "After the Rain",
    detail: "Live-action study · Coming soon",
    description: "A city becomes strange when the last light goes out.",
    tone: "card-film",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <main className="site-shell">
      <header className={`site-nav ${menuOpen ? "is-open" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="Little Wild Films home">
          <img src={logoSrc} alt="Little Wild Films logo" />
          <span>Little Wild<br />Films</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <button onClick={() => handleNav("films")}>Films</button>
          <button onClick={() => handleNav("studio")}>Studio</button>
          <button onClick={() => handleNav("journal")}>Journal</button>
        </nav>
        <button className="nav-contact" onClick={() => handleNav("contact")}>
          Start a conversation <ArrowUpRight size={15} strokeWidth={1.5} />
        </button>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <button onClick={() => handleNav("films")}>Films</button>
            <button onClick={() => handleNav("studio")}>Studio</button>
            <button onClick={() => handleNav("journal")}>Journal</button>
            <button onClick={() => handleNav("contact")}>Contact <ArrowUpRight size={15} /></button>
          </nav>
        )}
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-image" role="img" aria-label="A tiny warm light over a mossy valley at blue hour" style={{ backgroundImage: `url(${heroSrc})` }} />
        <div className="hero-scrim" />
        <div className="hero-grid" />
        <div className="hero-meta meta-left">Independent production house<br />Est. 2026 · India</div>
        <div className="hero-meta meta-right">Scroll to enter <ArrowDown size={14} strokeWidth={1.2} /></div>
        <div className="hero-copy">
          <p className="eyebrow"><span className="signal-dot" /> Animation · live action · almost-real cinema</p>
          <h1 id="hero-title">Stories from<br /><em>the edge</em> of what’s possible.</h1>
          <p className="hero-subtitle">Little Wild Films is an independent studio making animated, live-action, and AI-assisted films for strange times.</p>
          <button className="text-link" onClick={() => handleNav("films")}>Enter the films <ArrowUpRight size={17} strokeWidth={1.4} /></button>
        </div>
        <div className="hero-mark">01 / 04</div>
      </section>

      <section className="intro section-light" id="studio" aria-labelledby="intro-title">
        <div className="section-kicker">[ 01 — The studio ]</div>
        <div className="intro-content">
          <h2 id="intro-title">Small films.<br /><span>Wild imaginations.</span></h2>
          <div className="intro-body">
            <p>We are a small independent studio with a large sense of possibility. We build intimate worlds, strange futures, and ordinary moments that become magical when you look at them long enough.</p>
            <p className="muted-copy">AI is part of the process — not the point. The point is the feeling a film leaves behind.</p>
            <button className="dark-link" onClick={() => handleNav("journal")}>Read the studio notes <ArrowUpRight size={16} strokeWidth={1.4} /></button>
          </div>
        </div>
      </section>

      <section className="films section-dark" id="films" aria-labelledby="films-title">
        <div className="section-heading">
          <div className="section-kicker">[ 02 — Selected work ]</div>
          <h2 id="films-title">Worlds in<br /><em>the making.</em></h2>
          <p>Short films, animated worlds, and visual experiments made between intuition and invention.</p>
        </div>
        <div className="film-list">
          <article className="film-item large-film">
            <div className="film-placeholder feature-placeholder">
              <div className="placeholder-signal">visual / 01</div>
              <div className="film-title-overlay"><span>Film 01</span><h3>Mosslight</h3></div>
            </div>
            <div className="film-caption"><div><h3>Mosslight</h3><p>{films[0].description}</p></div><span>{films[0].detail}</span></div>
          </article>
          <article className="film-item card-film">
            <div className="film-placeholder card-placeholder" style={{ backgroundImage: `url(${cardSrc})` }}>
              <div className="placeholder-signal">visual / 02</div>
              <button className="play-button" aria-label="Play After the Rain preview"><Play size={18} fill="currentColor" strokeWidth={1.3} /></button>
              <div className="film-title-overlay"><span>Film 02</span><h3>After the Rain</h3></div>
            </div>
            <div className="film-caption"><div><h3>After the Rain</h3><p>{films[1].description}</p></div><span>{films[1].detail}</span></div>
          </article>
        </div>
        <div className="film-footer"><span>Archive 01—02</span><span>More films arriving soon <ArrowUpRight size={15} strokeWidth={1.4} /></span></div>
      </section>

      <section className="manifesto" id="journal" aria-labelledby="manifesto-title">
        <div className="manifesto-orbit orbit-one" />
        <div className="manifesto-orbit orbit-two" />
        <div className="section-kicker">[ 03 — A working belief ]</div>
        <h2 id="manifesto-title">Technology expands<br />the frame. <em>Taste gives it meaning.</em></h2>
        <div className="manifesto-bottom"><span>Field notes · 001</span><p>We believe a film can be small and still feel enormous. We believe new tools deserve old-fashioned attention.</p></div>
      </section>

      <section className="contact section-light" id="contact" aria-labelledby="contact-title">
        <div className="section-kicker">[ 04 — Make something ]</div>
        <div className="contact-layout">
          <div><h2 id="contact-title">Have a story<br /><em>looking for a world?</em></h2><p>We are open to films, collaborations, music videos, visual development, and carefully chosen commissions.</p></div>
          <a className="contact-button" href="mailto:hello@littlewildfilms.com">Start a conversation <ArrowUpRight size={18} strokeWidth={1.4} /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><img src={logoSrc} alt="" /><span>Little Wild Films</span></div>
        <span>Independent cinema for an almost-real world.</span>
        <span>© 2026 Little Wild Films</span>
      </footer>
    </main>
  );
}
