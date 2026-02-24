import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, delay } },
});

const links = {
  uottawa: "https://www.uottawa.ca/en",
  rhhs: "https://www.richmondhillhs.org/",
  securerx: "https://secure-rx.ca/",
  access: "https://www.access.on.ca/",
  medihub: "https://github.com/uOttawaSEGA2023/Medihub",
  pathfinding: "https://github.com/mhum28/pathfinding-engine",
  kmap: "https://github.com/mhum28/kmap-solver",
  risc: "https://github.com/mhum28/risc-processor",
  uart: "https://github.com/mhum28/uart-traffic-light-controller",
  linkedin: "https://www.linkedin.com/in/michael-hum/",
  github: "https://github.com/mhum28",
};

function A({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
      {children}
    </a>
  );
}

function Row({ label, children, delay }) {
  return (
    <motion.div {...fade(delay)} className="grid grid-cols-[120px_1fr] gap-x-8 py-4 border-t border-black">
      <span className="text-xs uppercase tracking-widest text-gray-400 pt-0.5">{label}</span>
      <div className="text-sm leading-relaxed space-y-1.5">{children}</div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-8 py-12">
      <div className="w-full max-w-xl">

        <motion.div {...fade(0)} className="mb-8">
          <h1 className="text-4xl font-black tracking-tight text-black">Michael Hum</h1>
          <p className="text-sm text-gray-500 mt-1">
            Computer Engineering · Software Engineer
          </p>
        </motion.div>

        <Row label="About" delay={0.1}>
          <p>Hi, I'm Michael, a 4th-year Computer Engineering student at the University of Ottawa. I like building things that are clean, practical, and work.</p>
        </Row>

        <Row label="Education" delay={0.15}>
          <p className="flex justify-between"><span>B.Eng. Computer Engineering · <A href={links.uottawa}>University of Ottawa</A></span><span className="text-gray-400 shrink-0 ml-4">2022 – 2026</span></p>
          <p className="flex justify-between"><span>High School · <A href={links.rhhs}>Richmond Hill HS</A></span><span className="text-gray-400 shrink-0 ml-4">2018 – 2022</span></p>
        </Row>

        <Row label="Experience" delay={0.2}>
          <p className="flex justify-between"><span>Software Engineer · <A href={links.securerx}>SecureRx Technologies</A></span><span className="text-gray-400 shrink-0 ml-4">Sep – Present</span></p>
          <p className="flex justify-between"><span>Software Developer · <A href={links.access}>Access Group Inc.</A></span><span className="text-gray-400 shrink-0 ml-4">May – Aug 2025</span></p>
        </Row>

        <Row label="Projects" delay={0.25}>
          <p><A href={links.medihub}>MediHub</A> — mobile health app for medical appointments</p>
          <p><A href={links.pathfinding}>Pathfinding Engine</A> — algorithm visualization on a grid</p>
          <p><A href={links.kmap}>Karnaugh Map Solver</A> — boolean expression simplification</p>
        </Row>

        <Row label="Connect" delay={0.3}>
          <p>
            <A href={links.linkedin}>LinkedIn</A>
            {" · "}
            <A href={links.github}>GitHub</A>
            {" · "}
            <a href="mailto:michaelhum28@gmail.com" className="font-semibold hover:underline">michaelhum28@gmail.com</a>
          </p>
        </Row>

      </div>
    </div>
  );
}
