const projects = [
  { index:"01", name:"ARGUS", label:"Market analytics platform", description:"A Python market-data system growing from an FX utility into a layered analytics and monitoring platform. Live and historical data move through clients, services and reusable metric layers before reaching the interface.", contribution:"Independent project · active development", tags:["Python","pandas","NumPy","yfinance","pytest"], href:"https://github.com/BytecodeBrewer/argus", tone:"cyan", signal:[32,44,38,57,52,73,68,88] },
  { index:"02", name:"Q-Bet", label:"Quant engine architecture", description:"A modular Python quant engine for matched betting, sports arbitrage and strategy simulation. Its typed domain layer models events, markets, offers, opportunities and controlled execution plans as the foundation for later data collection and capital orchestration.", contribution:"Independent project · core domain stage", tags:["Python","Pydantic","pytest","Quant modeling","Data pipelines"], href:"https://github.com/BytecodeBrewer/Q-Bet", tone:"green", signal:[26,35,46,42,59,66,73,91] },
  { index:"03", name:"S.M.A.R.T.", label:"AI-assisted test infrastructure", description:"A team project with CHECK24 combining natural-language Playwright generation, deterministic mock data and execution feedback. My work crossed UI, prompt validation, S3-connected flows and system documentation.", contribution:"Student team · frontend, workflow & validation", tags:["TypeScript","Go","S3","Parquet","Redis","Docker"], href:"https://github.com/BytecodeBrewer/smart-showcase", tone:"violet", signal:[28,40,48,43,65,58,77,84] },
  { index:"04", name:"Notion Sync", label:"Workflow automation", description:"A desktop automation that mirrors tasks from multiple module databases into one central Notion database, with persistent mappings, deletion tracking, status UI and background tray operation.", contribution:"Independent project · working prototype", tags:["Electron","Node.js","Notion API","JSON","Automation"], href:"https://github.com/BytecodeBrewer/notion-sync", tone:"amber", signal:[24,34,42,55,47,62,74,80] },
];

function Signal({ values }: { values:number[] }) { return <div className="signal" aria-hidden="true">{values.map((value,index)=><i key={index} style={{height:`${value}%`}} />)}</div>; }

export default function Home() {
  return <main>
    <header className="nav shell">
      <a className="wordmark" href="#top" aria-label="Lev home">LB<span>/data</span></a>
      <nav aria-label="Main navigation"><a href="#work">Projects</a><a href="#approach">Approach</a><a className="nav-cta" href="https://github.com/BytecodeBrewer" target="_blank" rel="noreferrer">GitHub ↗</a></nav>
    </header>
    <section className="hero shell" id="top">
      <div className="eyebrow"><span /> Informatics · Data · Systems</div>
      <h1>I turn messy data<br />into <em>useful systems.</em></h1>
      <div className="hero-bottom"><p>I’m Lev, an Informatics student in Leipzig building practical projects at the intersection of data engineering, analytics, automation and AI-enabled workflows.</p><a className="round-link" href="#work" aria-label="Explore selected projects">↓</a></div>
      <div className="hero-grid" aria-hidden="true"><div><b>INGEST</b><span>APIs · files · events</span></div><div><b>TRANSFORM</b><span>clean · model · validate</span></div><div><b>DELIVER</b><span>insight · tools · action</span></div></div>
    </section>
    <section className="work shell" id="work">
      <div className="section-head"><p>Selected work</p><span>Projects with a data story — not just a dependency list.</span></div>
      <div className="project-list">{projects.map(project=><article className={`project ${project.tone}`} key={project.name}>
        <div className="project-index">{project.index}</div><div className="project-main">
          <div className="project-title"><div><p>{project.label}</p><h2>{project.name}</h2></div><Signal values={project.signal}/></div>
          <p className="project-copy">{project.description}</p><p className="contribution">{project.contribution}</p>
          <div className="project-foot"><ul aria-label={`${project.name} technologies`}>{project.tags.map(tag=><li key={tag}>{tag}</li>)}</ul><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}>View repository <span>↗</span></a></div>
        </div></article>)}</div>
    </section>
    <section className="approach shell" id="approach">
      <div className="section-head light"><p>How I build</p><span>Architecture is a means. The outcome still has to be useful.</span></div>
      <div className="approach-grid"><div className="approach-intro"><h2>From raw input<br />to a reliable result.</h2><p>I’m developing toward data engineering and analytics by building complete, testable paths — then expanding them deliberately.</p></div>
      <ol><li><span>01</span><div><b>Understand the flow</b><p>Start with the decision, user or workflow the data should support.</p></div></li><li><span>02</span><div><b>Separate responsibilities</b><p>Keep ingestion, validation, transformation and presentation independently testable.</p></div></li><li><span>03</span><div><b>Ship a real slice</b><p>Prefer a small working system over an impressive architecture diagram with no pulse.</p></div></li></ol></div>
    </section>
    <section className="more shell"><div className="section-head"><p>Also in the lab</p><span>Foundations and focused experiments.</span></div><a className="more-card" href="https://github.com/BytecodeBrewer/advanced-database-systems" target="_blank" rel="noreferrer"><div><span>DATABASE FOUNDATIONS</span><h3>Advanced Database Systems</h3></div><p>Oracle · PL/SQL · JDBC · JPA · object-relational mapping</p><b>↗</b></a></section>
    <footer className="shell"><div><p>Interested in data, systems, or a useful collaboration?</p><h2>Let’s talk.</h2></div><a href="https://github.com/BytecodeBrewer" target="_blank" rel="noreferrer">github.com/BytecodeBrewer ↗</a><small>© {new Date().getFullYear()} Lev · Built with curiosity and an unreasonable number of tabs.</small></footer>
  </main>;
}
