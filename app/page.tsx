import Link from "next/link";
import Script from "next/script";
import { projects } from "./projects";

function Signal({ values }: { values: number[] }) {
  return <div className="signal" aria-hidden="true">{values.map((value, index) => <i key={index} style={{ height: `${value}%` }} />)}</div>;
}

export default function Home() {
  return <main>
    <header className="nav shell">
      <Link className="wordmark" href="/" aria-label="Lev home">LB<span>/data</span></Link>
      <nav aria-label="Main navigation">
        <a href="#work">Projects</a>
        <a href="#approach">Approach</a>
        <a href="#profile">LinkedIn</a>
        <a className="nav-cta" href="https://github.com/BytecodeBrewer" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </header>

    <section className="hero shell" id="top">
      <div className="eyebrow"><span /> Informatics · Data · Systems</div>
      <h1>I turn messy data<br />into <em>useful systems.</em></h1>
      <div className="hero-bottom">
        <p>I’m Lev, an Informatics student in Leipzig building practical projects at the intersection of data engineering, analytics, automation and AI-enabled workflows.</p>
        <a className="round-link" href="#work" aria-label="Explore selected projects">↓</a>
      </div>
      <div className="hero-grid" aria-hidden="true">
        <div><b>INGEST</b><span>APIs · files · events</span></div>
        <div><b>TRANSFORM</b><span>clean · model · validate</span></div>
        <div><b>DELIVER</b><span>insight · tools · action</span></div>
      </div>
    </section>

    <section className="work shell" id="work">
      <div className="section-head">
        <p>Selected work</p>
        <span>Projects with a data story — not just a dependency list.</span>
      </div>
      <div className="project-list">
        {projects.map((project) => <article className={`project ${project.tone}`} key={project.name}>
          <div className="project-index">{project.index}</div>
          <div className="project-main">
            <div className="project-title">
              <div><p>{project.label}</p><h2>{project.name}</h2></div>
              <Signal values={project.signal} />
            </div>
            <p className="project-copy">{project.summary}</p>
            <p className="contribution">{project.contribution}</p>
            <div className="project-foot">
              <ul aria-label={`${project.name} technologies`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <div className="project-actions">
                <Link href={`/projects/${project.slug}`}>Open case <span>→</span></Link>
                <a href={project.href} target="_blank" rel="noreferrer">Repository <span>↗</span></a>
              </div>
            </div>
          </div>
        </article>)}
      </div>
    </section>

    <section className="approach shell" id="approach">
      <div className="section-head light">
        <p>How I frame projects</p>
        <span>Less dependency list. More system understanding.</span>
      </div>
      <div className="approach-grid">
        <div className="approach-intro">
          <h2>Useful products need a readable system story.</h2>
          <p>The goal is to make every project understandable at three levels: the user problem, the data or automation flow, and the next practical step.</p>
        </div>
        <ol>
          <li><span>01</span><div><b>Start with the workflow</b><p>What is manual, fragmented, slow or hard to trust?</p></div></li>
          <li><span>02</span><div><b>Show the data path</b><p>Where does input enter, how is it normalized, and what result reaches the user?</p></div></li>
          <li><span>03</span><div><b>State the product direction</b><p>Roadmaps matter when they explain how a prototype becomes more useful.</p></div></li>
        </ol>
      </div>
    </section>

    <section className="profile-badge shell" id="profile">
      <Script src="https://platform.linkedin.com/badges/js/profile.js" strategy="lazyOnload" />
      <div className="section-head">
        <p>Profile</p>
        <span>Work history, studies and project context in one place.</span>
      </div>
      <div className="profile-badge-grid">
        <div>
          <h2>LinkedIn profile</h2>
          <p>For a compact view of my current role, studies and project direction. The portfolio shows the work; LinkedIn keeps the formal context close by.</p>
        </div>
        <div className="linkedin-card" aria-label="LinkedIn profile badge">
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="lev-gusiev"
            data-version="v1"
          >
            <a className="badge-base__link LI-simple-link" href="https://de.linkedin.com/in/lev-gusiev/en?trk=profile-badge">Lev G.</a>
          </div>
        </div>
      </div>
    </section>

    <footer className="shell">
      <div><p>Interested in data, systems, or a useful collaboration?</p><h2>Let&apos;s talk.</h2></div>
      <a href="https://github.com/BytecodeBrewer" target="_blank" rel="noreferrer">github.com/BytecodeBrewer ↗</a>
      <small>© {new Date().getFullYear()} Lev · Built with curiosity and an unreasonable number of tabs.</small>
    </footer>
  </main>;
}
