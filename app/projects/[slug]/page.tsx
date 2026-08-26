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

function FlowDiagram({ label, title, intro, nodes }: { label: string; title: string; intro: string; nodes: NonNullable<ReturnType<typeof getProject>>["diagram"]["nodes"] }) {
  const hasRichNodes = nodes.some((node) => typeof node !== "string");
  const richFlowStyles = ".flow-diagram.rich-flow{grid-template-columns:1fr}.flow-diagram.rich-flow .flow-node{grid-column:1/-1;min-height:auto;justify-content:flex-start;gap:18px}.flow-diagram.rich-flow .flow-node:not(:last-child)::after{display:none}@media(min-width:861px){.flow-diagram.rich-flow .flow-node.has-media{display:grid;grid-template-columns:minmax(220px,.82fr) minmax(0,1.55fr);align-items:start;gap:24px}.flow-diagram.rich-flow .flow-node.has-media>span{grid-column:1}.flow-diagram.rich-flow .flow-node.has-media>div{grid-column:1}.flow-diagram.rich-flow .flow-node.has-media>figure{grid-column:2;grid-row:1/span 2}.flow-diagram.rich-flow .flow-node img{max-height:560px;object-fit:contain}}@media(max-width:860px){.flow-diagram.rich-flow .flow-node.has-media{display:flex;flex-direction:column}.flow-diagram.rich-flow .flow-node img{max-height:none}}";

  return <section className="case-band">
    {hasRichNodes ? <style>{richFlowStyles}</style> : null}
    <div className="case-section-head">
      <p>{label}</p>
      <h2>{title}</h2>
    </div>
    <p className="diagram-intro">{intro}</p>
    <div className={`flow-diagram${hasRichNodes ? " rich-flow" : ""}`}>
      {nodes.map((node, index) => {
        const item = typeof node === "string" ? { title: node } : node;
        const classes = ["flow-node", item.span === "wide" ? "wide" : "", item.media ? "has-media" : ""].filter(Boolean).join(" ");
        return <div className={classes} key={`${index}-${item.title}`}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <b>{item.title}</b>
            {item.text ? <p>{item.text}</p> : null}
          </div>
          {item.media ? <figure>
            <img src={item.media.src} alt={item.media.alt} />
            <figcaption>
              <strong>{item.media.title}</strong>
              <small>{item.media.caption}</small>
            </figcaption>
          </figure> : null}
        </div>;
      })}
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
      {project.media.map((item) => <figure className={[item.span === "wide" ? "wide" : "", item.variant === "logo" ? "logo-media" : ""].filter(Boolean).join(" ") || undefined} key={item.src}>
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
    </article>
  </main>;
}
