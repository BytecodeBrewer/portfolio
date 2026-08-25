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

function FlowDiagram({ label, title, intro, nodes }: { label: string; title: string; intro: string; nodes: string[] }) {
  return <section className="case-band">
    <div className="case-section-head">
      <p>{label}</p>
      <h2>{title}</h2>
    </div>
    <p className="diagram-intro">{intro}</p>
    <div className="flow-diagram">
      {nodes.map((node, index) => <div className="flow-node" key={node}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <b>{node}</b>
      </div>)}
    </div>
  </section>;
}

function MediaGallery({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) {
  if (!project.media?.length) return null;

  return <section className="case-media shell">
    <div className="case-section-head">
      <p>Selected material</p>
      <h2>{project.mediaTitle ?? "Project visuals"}</h2>
    </div>
    {project.mediaIntro ? <p className="media-intro">{project.mediaIntro}</p> : null}
    <div className="media-grid">
      {project.media.map((item) => <figure className={item.span === "wide" ? "wide" : undefined} key={item.src}>
        <img src={item.src} alt={item.alt} />
        <figcaption>
          <b>{item.title}</b>
          <span>{item.caption}</span>
        </figcaption>
      </figure>)}
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
        {project.storySections.map((section) => <div key={section.title}>
          <span>{section.eyebrow}</span>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </div>)}
      </section>

      <FlowDiagram label={project.diagram.label} title={project.diagram.title} intro={project.diagram.intro} nodes={project.diagram.nodes} />

      <MediaGallery project={project} />

      <section className="roadmap shell">
        <div className="case-section-head">
          <p>Roadmap</p>
          <h2>{project.roadmapTitle}</h2>
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
          <h2>{project.productNotesTitle}</h2>
        </div>
        <ul>{project.productNotes.map((note) => <li key={note}>{note}</li>)}</ul>
      </section>
    </article>
  </main>;
}
