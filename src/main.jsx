import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const baseUrl = import.meta.env.BASE_URL;

const protocolLayers = [
  {
    label: "Why",
    title: "Thesis and intent",
    copy: "Define the market belief, customer problem, ambition, constraints, and reason a venture should exist.",
  },
  {
    label: "How",
    title: "Operating design",
    copy: "Compose agent roles, human roles, workflows, governance, metrics, capital allocation, and escalation paths.",
  },
  {
    label: "What",
    title: "Decentralized execution",
    copy: "Ship products, campaigns, services, experiments, content, sales motions, and customer outcomes across ventures.",
  },
];

const operatingLoops = [
  "Launch ventures from reusable theses, playbooks, and agent teams.",
  "Manage each company independently while sharing standards and learning.",
  "Coordinate cofounders, contractors, partners, employees, and AI agents.",
  "Track portfolio health, attention, capital, risks, velocity, and upside.",
];

const audiences = [
  "solo technical founders",
  "AI-native entrepreneurs",
  "startup studio operators",
  "indie hackers",
  "creators with distribution",
  "small investment groups",
];

const footerGroups = [
  {
    title: "Platform",
    links: [
      { label: "Protocol", href: "#protocol" },
      { label: "Operating model", href: "#system" },
      { label: "Who it is for", href: "#fit" },
      { label: "Early access", href: "mailto:hello@a64z.com" },
    ],
  },
  {
    title: "Venture of Agents",
    links: [
      { label: "Why", href: "#protocol" },
      { label: "How", href: "#protocol" },
      { label: "What", href: "#protocol" },
      { label: "Portfolio loops", href: "#system" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "hello@a64z.com", href: "mailto:hello@a64z.com" },
      { label: "GitHub", href: "https://github.com/amitrathore/a64z-web" },
      { label: "Request access", href: "mailto:hello@a64z.com" },
    ],
  },
];

function App() {
  return (
    <main>
      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="a64z home">
          <span className="brand-mark">64</span>
          <span>a64z</span>
        </a>
        <nav>
          <a href="#protocol">Protocol</a>
          <a href="#system">System</a>
          <a href="#fit">Who it is for</a>
        </nav>
        <a className="header-cta" href="mailto:hello@a64z.com">Request access</a>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src={`${baseUrl}assets/a64z-hero.png`} alt="" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Now in 64 bits</p>
          <h1>The Venture Operating System for the Age of Agents.</h1>
          <p className="hero-copy">
            a64z helps one human launch and operate a portfolio of AI-native
            businesses through agents, collaborators, and a shared Venture of
            Agents Protocol.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="mailto:hello@a64z.com">
              Request access
            </a>
            <a className="secondary-button" href="#protocol">
              Explore the protocol
            </a>
          </div>
        </div>
        <div className="hero-signal" aria-label="Platform signals">
          <div>
            <span>1</span>
            operator
          </div>
          <div>
            <span>100+</span>
            ventures
          </div>
          <div>
            <span>24/7</span>
            agents
          </div>
        </div>
      </section>

      <section className="positioning">
        <div className="section-kicker">Category</div>
        <div className="positioning-grid">
          <h2>An AI venture operating system, not another task board.</h2>
          <p>
            The old startup model assumes every company needs a dedicated team,
            a narrow operating surface, and years of manual coordination. AI
            changes the leverage curve. The bottleneck becomes intent,
            delegation, governance, and learning across many parallel ventures.
          </p>
          <p>
            a64z gives founders a central command layer for deciding what should
            exist, why it should exist, how it should operate, and where human
            judgment belongs.
          </p>
        </div>
      </section>

      <section className="protocol" id="protocol">
        <div className="section-heading">
          <div className="section-kicker">Venture of Agents Protocol</div>
          <h2>Centralize why and how. Decentralize what gets done.</h2>
        </div>
        <div className="protocol-grid">
          {protocolLayers.map((layer) => (
            <article className="protocol-card" key={layer.label}>
              <div className="protocol-label">{layer.label}</div>
              <h3>{layer.title}</h3>
              <p>{layer.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="system" id="system">
        <div className="system-copy">
          <div className="section-kicker">Operating Model</div>
          <h2>One founder can manage a venture network.</h2>
          <p>
            a64z is built for portfolio creation: reusable theses, agent crews,
            venture scorecards, collaboration boundaries, and management loops
            that keep every business legible without forcing every business to
            operate the same way.
          </p>
        </div>
        <div className="loop-list" aria-label="Operating loops">
          {operatingLoops.map((loop, index) => (
            <div className="loop-row" key={loop}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{loop}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="comparison">
        <div>
          <div className="section-kicker">Differentiation</div>
          <h2>Between a venture studio, an agent platform, and a fund.</h2>
        </div>
        <div className="comparison-table">
          <div>
            <span>Venture studios</span>
            <p>Service-heavy and team-heavy.</p>
          </div>
          <div>
            <span>VC funds</span>
            <p>Capital allocation without an operating layer.</p>
          </div>
          <div>
            <span>Agent platforms</span>
            <p>Workers without a venture-building protocol.</p>
          </div>
          <div>
            <span>a64z</span>
            <p>Portfolio logic, operating discipline, and agent leverage.</p>
          </div>
        </div>
      </section>

      <section className="fit" id="fit">
        <div className="section-heading">
          <div className="section-kicker">Designed For</div>
          <h2>High-agency operators compounding venture creation.</h2>
        </div>
        <div className="audience-grid">
          {audiences.map((audience) => (
            <span key={audience}>{audience}</span>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <div className="section-kicker">Early Access</div>
          <h2>Build from solo founder to venture network.</h2>
        </div>
        <a className="primary-button" href="mailto:hello@a64z.com">
          Request access
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-lead">
          <a className="brand footer-brand" href="#top" aria-label="a64z home">
            <span className="brand-mark">64</span>
            <span>a64z</span>
          </a>
          <p>
            An AI venture operating system for launching, coordinating, and
            managing portfolios of agent-powered businesses.
          </p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          {footerGroups.map((group) => (
            <div className="footer-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <a key={`${group.title}-${link.label}`} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>Now in 64 bits.</p>
          <p>© {new Date().getFullYear()} a64z. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
