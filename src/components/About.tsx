import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/";
const CLICKHOUSE =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#FFCC01"><rect x="2" y="2" width="2.6" height="20" rx=".4"/><rect x="6.6" y="2" width="2.6" height="20" rx=".4"/><rect x="11.2" y="2" width="2.6" height="20" rx=".4"/><rect x="15.8" y="2" width="2.6" height="20" rx=".4"/><rect x="20.4" y="9.5" width="2.6" height="5" rx=".4"/></g></svg>'
  );

// [name, icon, invert-in-dark-mode]
type Tech = [string, string, boolean?];
const ROW_1: Tech[] = [
  ["Node.js", "nodejs/nodejs-original.svg"],
  ["TypeScript", "typescript/typescript-original.svg"],
  ["ClickHouse", CLICKHOUSE],
  ["MongoDB", "mongodb/mongodb-original.svg"],
  ["Express", "express/express-original.svg", true],
  ["MySQL", "mysql/mysql-original.svg"],
  ["Firebase", "firebase/firebase-original.svg"],
  ["Java", "java/java-original.svg"],
  ["Python", "python/python-original.svg"],
];
const ROW_2: Tech[] = [
  ["React", "react/react-original.svg"],
  ["Next.js", "nextjs/nextjs-original.svg", true],
  ["Redux Toolkit", "redux/redux-original.svg"],
  ["Tailwind CSS", "tailwindcss/tailwindcss-original.svg"],
  ["JavaScript", "javascript/javascript-original.svg"],
  ["AWS", "amazonwebservices/amazonwebservices-plain-wordmark.svg"],
  ["Linux", "linux/linux-original.svg"],
  ["Git", "git/git-original.svg"],
  ["Vim", "vim/vim-original.svg"],
  ["Jenkins", "jenkins/jenkins-original.svg"],
];

// // What SetuAgent does, typed out line by line (an illustration, not real logs).
// const TERMINAL: [string, string][] = [
//   ["setuagent triage --incident latest", "cmd"],
//   ["› reading alerts, logs and metrics", "dim"],
//   ["› checking recent deploys", "dim"],
//   ["› root cause found", "ok"],
//   ["› posting diagnosis to on-call channel", "ok"],
// ];
const KEYS = ["h", "j", "k", "l"];

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const About = () => {
  const bento = useRef<HTMLDivElement>(null);
  // const [lines, setLines] = useState(reduceMotion ? TERMINAL.length : 0); // SetuAgent tile hidden
  const [pressed, setPressed] = useState(-1);

  // // Terminal: add a line every ~0.7s, then pause and start over.
  // useEffect(() => {
  //   if (reduceMotion) return;
  //   const done = lines >= TERMINAL.length;
  //   const t = setTimeout(
  //     () => setLines(done ? 0 : lines + 1),
  //     done ? 3200 : lines === 0 ? 900 : 700
  //   );
  //   return () => clearTimeout(t);
  // }, [lines]);

  // Keycaps press h j k l in turn.
  useEffect(() => {
    if (reduceMotion) return;
    let k = 0;
    let up: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setPressed(k++ % KEYS.length);
      up = setTimeout(() => setPressed(-1), 140);
    }, 420);
    return () => {
      clearInterval(id);
      clearTimeout(up);
    };
  }, []);

  // Cursor spotlight: each tile gets the pointer position in its own coordinates.
  const onPointerMove = (e: React.PointerEvent) => {
    for (const tile of Array.from(bento.current?.children ?? []) as HTMLElement[]) {
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
    <Section id="About" aria-labelledby="about-title">
      <header className="flex items-end justify-between gap-6 mb-[3.2rem]">
        <h2
          id="about-title"
          className="text-5xl tablet:text-6xl font-headings font-extrabold tracking-tight text-slate-900 dark:text-gray-200"
        >
          About me<span className="text-teal-500 dark:text-teal-400">.</span>
        </h2>
        <p className="hidden laptop:block text-[1.6rem] text-slate-500 dark:text-slate-400">
          Backend at Setu. Frontend roots.
        </p>
      </header>

      <Bento ref={bento} onPointerMove={onPointerMove}>
        <div className="tile intro" {...aos(0)}>
          <p className="statement font-headings font-bold text-slate-900 dark:text-gray-100">
            I like the 3&nbsp;a.m. problems:{" "}
            <span className="text-teal-600 dark:text-teal-400">outages, broken data,</span>{" "}
            and fixes that stick.
          </p>
          <p className="text-[1.7rem] leading-relaxed max-w-[60ch] text-slate-600 dark:text-slate-300">
            I'm an SDE at{" "}
            <a
              href="https://setu.co/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-teal-500 underline-offset-4 hover:text-teal-500"
            >
              Setu by Pine&nbsp;Labs
            </a>
            , on the service every Setu product uses to authenticate and process
            transactions. I started on the frontend with React and Next.js, so I
            still care how the product feels at the other end of the API.
          </p>
        </div>

        <div className="tile keys" {...aos(1)}>
          <span className="label">Typing</span>
          <div className="flex gap-3" aria-hidden="true">
            {KEYS.map((key, i) => (
              <span key={key} className={`cap${pressed === i ? " down" : ""}`}>
                {key}
              </span>
            ))}
          </div>
          <div>
            <b className="block font-headings font-extrabold text-[4.4rem] leading-none tracking-tight text-slate-900 dark:text-gray-100">
              100 wpm
            </b>
            <p className="mt-3 text-[1.5rem] text-slate-500 dark:text-slate-400">
              Touch typist. Vim keys, of course.
            </p>
          </div>
        </div>

        {/* SetuAgent tile: hidden for now.
        <div className="tile agent" {...aos(2)}>
          <div>
            <span className="label">Built at Setu</span>
            <h3 className="mt-3 font-headings font-bold text-[2.8rem] tracking-tight text-slate-900 dark:text-gray-100">
              SetuAgent
            </h3>
            <p className="mt-3 max-w-[40ch] text-[1.6rem] text-slate-500 dark:text-slate-400">
              An on-call bot that diagnoses production incidents. DevOps now runs
              it for their own workflows.
            </p>
          </div>
          <div className="terminal" aria-hidden="true">
            <div className="flex gap-2 mb-4">
              <i /> <i /> <i />
            </div>
            {TERMINAL.slice(0, lines).map(([text, kind], i) => (
              <div key={i} className={`line ${kind}`}>
                {kind === "cmd" && <span className="dim">$ </span>}
                {text}
                {i === lines - 1 && !reduceMotion && <span className="caret" />}
              </div>
            ))}
          </div>
        </div>
        */}

        <div className="tile stack" {...aos(3)}>
          <span className="label px-[2.8rem]">What I work with</span>
          {[ROW_1, ROW_2].map((row, r) => (
            <div key={r} className={`marquee${r ? " rev" : ""}`}>
              <div className="track">
                {(reduceMotion ? [row] : [row, row]).map((copy, c) =>
                  copy.map(([name, icon, invert]) => (
                    <span key={`${c}-${name}`} className="tech" aria-hidden={c > 0}>
                      <img
                        src={icon.startsWith("data:") ? icon : DEVICON + icon}
                        alt=""
                        width={28}
                        height={28}
                        loading="lazy"
                        className={invert ? "dark:invert" : ""}
                      />
                      {name}
                    </span>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </Bento>
    </Section>
  );
};

const scroll = keyframes`to { transform: translateX(-50%); }`;
const blink = keyframes`50% { opacity: 0; }`;

const Section = styled.section`
  padding: 4rem 0 6rem;
`;

const Bento = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-areas:
    "intro intro intro keys"
    /* "agent agent agent agent" */
    "stack stack stack stack";

  .tile {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    padding: 2.8rem;
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
  .label {
    display: block;
    font-size: 1.4rem;
    font-weight: 500;
    color: #64748b;
  }
  .dark & .label {
    color: #94a3b8;
  }

  /* Intro */
  .intro {
    grid-area: intro;
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
    padding: 4rem;
  }
  .statement {
    max-width: 26ch;
    font-size: clamp(2.6rem, 2.8vw, 3.6rem);
    line-height: 1.18;
    letter-spacing: -0.02em;
  }

  /* Keys */
  .keys {
    grid-area: keys;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.4rem;
  }
  .cap {
    display: grid;
    place-items: center;
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 1rem;
    border: 1px solid #cbd5e1;
    border-bottom-width: 4px;
    background: #f1f5f9;
    color: #334155;
    font: 600 1.6rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
    transition: transform 0.08s, border-bottom-width 0.08s, color 0.08s;
  }
  .dark & .cap {
    border-color: rgba(255, 255, 255, 0.07);
    background: #172033;
    color: #cbd5e1;
  }
  .cap.down {
    transform: translateY(3px);
    border-bottom-width: 1px;
    color: #14b8a6;
  }

  /* Agent */
  .agent {
    grid-area: agent;
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 3.2rem;
    align-items: center;
    padding: 3.2rem;
  }
  .terminal {
    min-height: 19rem;
    padding: 1.6rem 2rem;
    border-radius: 1.4rem;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: #070b13;
    color: #cbd5e1;
    font: 400 1.4rem/1.75 ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  .terminal i {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #334155;
  }
  .terminal .line {
    white-space: nowrap;
    overflow: hidden;
  }
  .terminal .dim {
    color: #64748b;
  }
  .terminal .ok {
    color: #2dd4bf;
  }
  .caret {
    display: inline-block;
    width: 7px;
    height: 14px;
    margin-left: 6px;
    vertical-align: -2px;
    background: #2dd4bf;
    animation: ${blink} 1s steps(1) infinite;
  }

  /* Stack marquee */
  .stack {
    grid-area: stack;
    padding: 2.8rem 0;
  }
  .marquee {
    margin-top: 1.6rem;
    padding: 4px 0;
    overflow: hidden;
    mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  }
  .marquee + .marquee {
    margin-top: 4px;
  }
  .track {
    display: flex;
    gap: 1.2rem;
    width: max-content;
    animation: ${scroll} 40s linear infinite;
  }
  .rev .track {
    animation-direction: reverse;
    animation-duration: 46s;
  }
  .marquee:hover .track {
    animation-play-state: paused;
  }
  .tech {
    display: inline-flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.2rem 2rem 1.2rem 1.4rem;
    border-radius: 1.4rem;
    border: 1px solid #e2e8f0;
    background: #f8fafc;
    color: #0f172a;
    font-size: 1.6rem;
    font-weight: 500;
    white-space: nowrap;
    transition: border-color 0.2s, transform 0.2s;
  }
  .dark & .tech {
    border-color: rgba(255, 255, 255, 0.07);
    background: #172033;
    color: #eef2f7;
  }
  .tech:hover {
    border-color: rgba(45, 212, 191, 0.45);
    transform: translateY(-2px);
  }
  .tech img {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 1023px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "intro" "keys" /* "agent" */ "stack";
    .keys {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
    }
  }
  @media (max-width: 640px) {
    .intro,
    .agent {
      padding: 2.4rem;
    }
    .tile {
      border-radius: 2rem;
    }
    .agent {
      grid-template-columns: 1fr;
    }
    .terminal {
      font-size: 1.3rem;
    }
    .keys {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .track {
      animation: none;
      flex-wrap: wrap;
      width: auto;
      padding: 0 2.8rem;
    }
    .marquee {
      mask-image: none;
    }
    .rev {
      display: none;
    }
  }
`;

export default About;
