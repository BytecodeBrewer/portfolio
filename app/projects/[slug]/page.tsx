import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} - Lev Data Projects`,
    description: project.summary
  };
}

function FlowDiagram({ title, nodes }: { title: string; nodes: string[] }) {
  return <section className="case-band">
    <div className="case-section-head">
      <p>System diagram</p>
      <h2>{title}</h2>
    </div>
    <div className="flow-diagram">
      {nodes.map((node, index) => <div className="flow-node" key={node}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <b>{node}</b>
      </div>)}
    </div>
  </section>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <main>
    <header className="nav shell">
      <Link className="wordmark" href="/" aria-label="Lev home">LB<span>/data</span></Link>
      <nav aria-label="Project navigation">
        <Link href="/#work">Projects</Link>
        <a className="nav-cta" href={project.href} target="_blank" rel="noreferrer">Repository</a>
      </nav>
    </header>

    <article className={`case-page ${project.tone}`}>
      <section className="case-hero shell">
        <Link className="back-link" href="/#work">← Projects</Link>
        <p className="case-kicker">{project.label}</p>
        <h1>{project.name}</h1>
        <p className="case-summary">{project.summary}</p>
        <div className="case-meta">
          <span>{project.contribution}</span>
          <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </div>
      </section>

      <section className="case-split shell">
        <div>
          <span>Problem</span>
          <h2>Why this exists</h2>
          <p>{project.problem}</p>
        </div>
        <div>
          <span>Solution</span>
          <h2>What the product does</h2>
          <p>{project.solution}</p>
        </div>
      </section>

      <FlowDiagram title={project.diagramTitle} nodes={project.diagramNodes} />

      <section className="roadmap shell">
        <div className="case-section-head">
          <p>Roadmap</p>
          <h2>From prototype to useful product</h2>
        </div>
        <div className="roadmap-list">
          {project.roadmap.map((item) => <div className="roadmap-item" key={item.title}>
            <span>{item.status}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>)}
        </div>
      </section>

      <section className="notes shell">
        <div className="case-section-head">
          <p>Portfolio angle</p>
          <h2>What this should communicate</h2>
        </div>
        <ul>{project.productNotes.map((note) => <li key={note}>{note}</li>)}</ul>
      </section>
    </article>
  </main>;
}
