import { useRef } from "react";
import styled from "styled-components";

// [title, url, site, date, read time]
type Post = [string, string, string, string, string];
const MORE: Post[] = [
  [
    "The Best VS Code Snippets for React, TypeScript, Next.js and Redux Toolkit",
    "https://dev.to/bhanu1776/the-best-vscode-snippets-for-react-typescript-nextjs-redux-toolkit-5gmm",
    "dev.to",
    "Mar 2024",
    "2 min",
  ],
  ["Top Free Utility Mac Apps You Aren't Using", "https://medium.com/p/f33171825f40", "Medium", "Mar 2024", "3 min"],
  ["10 Mac Apps I Regret Not Using Sooner", "https://medium.com/p/0468d3ca5b9b", "Medium", "Mar 2024", "3 min"],
  ["10 Unique Mac Apps You Can't Live Without", "https://medium.com/p/b090485026d4", "Medium", "Feb 2024", "4 min"],
];

const Meta = ({ items }: { items: string[] }) => (
  <span className="meta">
    {items.map((m, i) => (
      <span key={m}>
        {i > 0 && <i />}
        {m}
      </span>
    ))}
  </span>
);

const Blog = () => {
  const grid = useRef<HTMLDivElement>(null);

  // Cursor spotlight, same as About.
  const onPointerMove = (e: React.PointerEvent) => {
    for (const tile of Array.from(grid.current?.children ?? []) as HTMLElement[]) {
      const r = tile.getBoundingClientRect();
      tile.style.setProperty("--x", `${e.clientX - r.left}px`);
      tile.style.setProperty("--y", `${e.clientY - r.top}px`);
    }
  };

  const aos = (i: number) => ({
    "data-aos": "fade-up",
    "data-aos-delay": i * 70,
    "data-aos-duration": 600,
    "data-aos-once": "true",
  });

  return (
    <Section id="Blog" aria-labelledby="blog-title">
      <header className="flex items-end justify-between gap-6 mb-[3.2rem]">
        <h2
          id="blog-title"
          className="text-5xl tablet:text-6xl font-headings font-extrabold tracking-tight text-slate-900 dark:text-gray-200"
        >
          Blog<span className="text-teal-500 dark:text-teal-400">.</span>
        </h2>
        <p className="hidden tablet:block text-[1.6rem] text-slate-500 dark:text-slate-400">
          I write on{" "}
          <a className="ink" href="https://dev.to/bhanu1776" target="_blank" rel="noreferrer">
            dev.to
          </a>{" "}
          and{" "}
          <a className="ink" href="https://medium.com/@bhanu1776" target="_blank" rel="noreferrer">
            Medium
          </a>
        </p>
      </header>

      <Grid ref={grid} onPointerMove={onPointerMove}>
        <a
          className="tile feat"
          href="https://dev.to/bhanu1776/tailwind-in-styled-components-29j"
          target="_blank"
          rel="noreferrer"
          {...aos(0)}
        >
          <div className="code" aria-hidden="true">
            <div className="dots">
              <i /> <i /> <i />
            </div>
            <div>
              <span className="k">import</span> tw <span className="k">from</span>{" "}
              <span className="s">"twin.macro"</span>;
            </div>
            <div>&nbsp;</div>
            <div>
              <span className="k">const</span> <span className="f">Card</span> = tw.div<span className="s">`</span>
            </div>
            <div className="s">&nbsp;&nbsp;rounded-2xl p-6 bg-slate-900</div>
            <div className="s">&nbsp;&nbsp;hover:border-teal-500</div>
            <div>
              <span className="s">`</span>; <span className="c">{"// Tailwind, inside styled-components"}</span>
            </div>
          </div>
          <div className="body">
            <h3 className="font-headings">Tailwind CSS in Styled-Components</h3>
            <p className="ex">
              Set up a Next.js project with Tailwind and twin.macro, so you write utility classes inside
              styled components. This portfolio still runs on it.
            </p>
            <div className="foot">
              <Meta items={["dev.to", "Apr 2023", "6 min read"]} />
              <span className="arrow">→</span>
            </div>
          </div>
        </a>

        <div className="tile list" {...aos(1)}>
          <span className="label">More posts</span>
          {MORE.map(([title, url, site, date, read]) => (
            <a key={url} className="row" href={url} target="_blank" rel="noreferrer">
              <div>
                <h4 className="font-headings">{title}</h4>
                <Meta items={[site, date, read]} />
              </div>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  padding: 4rem 0 8rem;

  .ink {
    color: #0f172a;
    text-decoration: underline;
    text-decoration-color: #14b8a6;
    text-underline-offset: 4px;
  }
  .dark & .ink {
    color: #e5e7eb;
  }
  .ink:hover {
    color: #14b8a6;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  .tile {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    border-radius: 2.4rem;
    border: 1px solid #e2e8f0;
    background: #fff;
    transition: border-color 0.3s;
  }
  .dark & .tile {
    border-color: rgba(255, 255, 255, 0.07);
    background: #111827;
  }
  .tile:hover {
    border-color: rgba(45, 212, 191, 0.35);
  }
  /* Cursor spotlight */
  .tile::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;
    background: radial-gradient(
      420px circle at var(--x, 50%) var(--y, 50%),
      rgba(45, 212, 191, 0.12),
      transparent 45%
    );
  }
  &:hover .tile::before {
    opacity: 1;
  }

  h3,
  h4 {
    color: #0f172a;
    transition: color 0.2s;
  }
  .dark & h3,
  .dark & h4 {
    color: #f1f5f9;
  }
  .meta,
  .label,
  .ex {
    color: #64748b;
  }
  .dark & .meta,
  .dark & .label,
  .dark & .ex {
    color: #94a3b8;
  }
  .meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 1.4rem;
  }
  .meta i {
    display: inline-block;
    width: 3px;
    height: 3px;
    margin: 0 0.8rem;
    border-radius: 50%;
    background: currentColor;
    opacity: 0.5;
    vertical-align: middle;
  }
  .arrow {
    font-size: 1.8rem;
    line-height: 1;
    color: #94a3b8;
    transition: transform 0.25s, color 0.25s;
  }

  /* Featured post */
  .feat {
    grid-column: span 3;
    display: flex;
    flex-direction: column;
  }
  .code {
    min-height: 21rem;
    margin: 1.6rem 1.6rem 0;
    padding: 1.8rem 2.2rem;
    border-radius: 1.6rem;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: #070b13;
    color: #cbd5e1;
    font: 400 1.4rem/1.75 ui-monospace, SFMono-Regular, Menlo, monospace;
    white-space: nowrap;
    overflow: hidden;
  }
  .dots {
    display: flex;
    gap: 7px;
    margin-bottom: 1.2rem;
  }
  .dots i {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #334155;
  }
  .k {
    color: #c4b5fd;
  }
  .s {
    color: #5eead4;
  }
  .f {
    color: #93c5fd;
  }
  .c {
    color: #64748b;
  }
  .body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.4rem 2.8rem 2.8rem;
  }
  .feat h3 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }
  .ex {
    max-width: 52ch;
    font-size: 1.6rem;
  }
  .foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 0.8rem;
  }
  .feat:hover h3 {
    color: #14b8a6;
  }
  .feat:hover .arrow {
    transform: translateX(4px);
    color: #14b8a6;
  }

  /* More posts */
  .list {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
  }
  .label {
    padding: 1.6rem 1.6rem 0.8rem;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.6rem;
    padding: 1.6rem;
    border-radius: 1.4rem;
    transition: background 0.2s;
  }
  .row h4 {
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 1.35;
  }
  .row .meta {
    margin-top: 0.6rem;
    font-size: 1.3rem;
  }
  .row:hover {
    background: #f1f5f9;
  }
  .dark & .row:hover {
    background: #172033;
  }
  .row:hover h4,
  .row:hover .arrow {
    color: #14b8a6;
  }
  .row:hover .arrow {
    transform: translate(3px, -3px);
  }

  @media (max-width: 860px) {
    grid-template-columns: minmax(0, 1fr);
    .feat,
    .list {
      grid-column: auto;
    }
  }
  @media (max-width: 640px) {
    .code {
      font-size: 1.2rem;
    }
    .feat h3 {
      font-size: 2.4rem;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .arrow {
      transition: none;
    }
  }
`;

export default Blog;
