import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const baseUrl = import.meta.env.BASE_URL;

const protocolLayers = [
  {
    label: "Why",
    title: "Value creation thesis",
    copy: "Define the investment thesis, market position, growth targets, and the KPIs portfolio leadership commits to for every portfolio company.",
  },
  {
    label: "How",
    title: "Ontology & org design",
    copy: "Build the interconnected ontology binding org structure, roles for human leaders and AI agents, governance, capital, and metrics across the portfolio.",
  },
  {
    label: "What",
    title: "Ecosystem execution",
    copy: "Run AI-powered digital org twins and human-AI agent teams that execute go-to-market, operations, and customer engagement inside each company's market ecosystem.",
  },
];

const operatingLoops = [
  "Model every portfolio company as an interconnected ontology of org structure, roles, workflows, and its surrounding market ecosystem.",
  "Instantiate AI-powered digital org twins that mirror each company and simulate scaling decisions before they're executed.",
  "Deploy human leaders and AI agents together to execute against the KPIs leadership sets, across sales, operations, supply chain, and customer ecosystems.",
  "Close the loop: measure outcomes against KPIs, regenerate the ontology and org twin, and redeploy, continuously, across the entire portfolio.",
];

const audiences = [
  "private equity operating partners",
  "portfolio company CEOs and executive teams",
  "deal teams driving value creation",
  "PE-backed enterprise leadership",
  "multi-billion dollar portfolio companies",
  "institutional investment groups",
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
    title: "Ecosystem of Agents",
    links: [
      { label: "Why", href: "#protocol" },
      { label: "How", href: "#protocol" },
      { label: "What", href: "#protocol" },
      { label: "Regeneration loops", href: "#system" },
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
          <h1>The Portfolio Operating System for Private Equity.</h1>
          <p className="hero-copy">
            a64z gives operating partners and portfolio leadership a shared,
            interconnected ontology and AI-powered digital org twins to build
            and scale portfolios of multi-billion dollar enterprises, coordinating
            human leaders and AI agents across every company's market ecosystem.
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
            operating partner
          </div>
          <div>
            <span>20+</span>
            portfolio companies
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
          <h2>A portfolio operating system, not another dashboard.</h2>
          <p>
            The old value-creation model assumes every portfolio company runs
            on its own tools, its own org chart, and years of manual
            coordination between deal teams and management. AI changes the
            leverage curve. The bottleneck becomes how fast leadership can
            model, deploy, and regenerate operating structure across an
            entire portfolio of already-large enterprises.
          </p>
          <p>
            a64z gives PE leadership a central command layer built on
            interconnected ontologies: a shared model of org structure, market
            ecosystems, and KPIs that AI-powered digital org twins and human-AI
            agent teams execute against, company by company.
          </p>
        </div>
      </section>

      <section className="protocol" id="protocol">
        <div className="section-heading">
          <div className="section-kicker">Ecosystem of Agents Protocol</div>
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
          <h2>One operating partner can run a multi-billion dollar portfolio.</h2>
          <p>
            a64z is built for portfolio-scale value creation: interconnected
            ontologies, AI-powered digital org twins, human-AI agent teams, and
            closed-loop regeneration that keep every portfolio company legible
            to leadership without forcing every company to operate the same way.
          </p>
        </div>
        <div className="loop-list" aria-label="Regeneration loops">
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
          <h2>Between operating partners, value creation consultancies, and an agent platform.</h2>
        </div>
        <div className="comparison-table">
          <div>
            <span>Operating partners</span>
            <p>Manual playbooks and spreadsheet-heavy value creation.</p>
          </div>
          <div>
            <span>Value creation consultancies</span>
            <p>Point-in-time engagements with no persistent ontology.</p>
          </div>
          <div>
            <span>Enterprise agent platforms</span>
            <p>Task automation without a portfolio-wide operating model.</p>
          </div>
          <div>
            <span>a64z</span>
            <p>Interconnected ontologies, digital org twins, and closed-loop regeneration across the portfolio.</p>
          </div>
        </div>
      </section>

      <section className="fit" id="fit">
        <div className="section-heading">
          <div className="section-kicker">Designed For</div>
          <h2>Leadership compounding value across a portfolio.</h2>
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
          <h2>Scale from a single portfolio company to full portfolio regeneration.</h2>
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
            An AI-powered operating system for building and scaling private
            equity portfolios of multi-billion dollar enterprises through
            interconnected ontologies, digital org twins, and human-AI agent teams.
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
