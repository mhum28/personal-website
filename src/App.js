import { useState } from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FolderIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const BUTTONS = [
  {
    id: "education",
    label: "Education",
    icon: AcademicCapIcon,
    content: (
      <>
        <div>
          Bachelor's in Computer Engineering @{" "}
          <a
            href="https://www.uottawa.ca/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>University of Ottawa</strong>
          </a>{" "}
          (Sep. 2022 - Apr. 2026)
        </div>
        <div>
          High School Diploma @{" "}
          <a
            href="https://www.richmondhillhs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Richmond Hill High School</strong>
          </a>{" "}
          (Sep. 2018 - Jun. 2022)
        </div>
      </>
    ),
  },
  {
  id: "experience",
  label: "Experience",
  icon: BriefcaseIcon,
  content: (
    <ul className="list-disc pl-5 space-y-2">
      <li>
        Software Engineer @{" "}
        <a
          href="https://www.kaplet.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>SecureRx Technologies (Kaplet)</strong>
        </a>{" "}
        (Sep. 2025 - Dec. 2025)
      </li>
      <li>
        Software Developer @{" "}
        <a
          href="https://www.access.on.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Access Group Inc.</strong>
        </a>{" "}
        (May 2025 - Aug. 2025)
      </li>
    </ul>
  ),
},

  {
  id: "projects",
  label: "Projects",
  icon: FolderIcon,
  content: (
    <ul className="list-disc pl-5 space-y-2">
      <li>
        <a
          href="https://github.com/uOttawaSEGA2023/Medihub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>MediHub</strong>
        </a>
        : Mobile health care app to manage medical appointments
      </li>
      <li>
        <a
          href="https://github.com/mhum28/pathfinding-engine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Pathfinding Engine</strong>
        </a>
        : Visualization of a pathfinding algorithm across a grid
      </li>
      <li>
        <a
          href="https://github.com/mhum28/kmap-solver"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Karnaugh Map Solver</strong>
        </a>
        : Simplifying boolean expression using Karnaugh maps
      </li>
      <li>
        <a
          href="https://github.com/mhum28/risc-processor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>RISC Processor</strong>
        </a>
        : Simulated RISC-based processor on a FPGA built in VHDL
      </li>
      <li>
        <a
          href="https://github.com/mhum28/uart-traffic-light-controller"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>UART Controller</strong>
        </a>
        : UART communication on a FPGA across a traffic light controller
      </li>
    </ul>
  ),
},

  {
    id: "connect",
    label: "Connect",
    icon: ChatBubbleBottomCenterTextIcon,
    content: (
      <>
        You can reach me on{" "}
        <a
          href="https://www.linkedin.com/in/michael-hum/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          LinkedIn
        </a>
        ,{" "}
        <a
          href="https://github.com/mhum28"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          GitHub
        </a>
        , or directly at{" "}
        <a
          href="mailto:michaelhum28@gmail.com"
          style={{ fontWeight: "bold" }}
        >
          michaelhum28@gmail.com
        </a>
        . 
        Always open to discussing new opportunities, or just having a chat!
      </>
    ),
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  const easing = [0.4, 0, 0.2, 1];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6">
  <AnimatePresence mode="wait">
    {!activeSection ? (
      <motion.div
  key="header-buttons"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } }}
  exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: easing } }}
  layout
  className="flex flex-col items-center justify-center space-y-8 w-full px-4"
>
  <button
    onClick={() => setActiveSection("about")}
    className="bg-white border border-black px-6 py-3 shadow focus:outline-none hover:bg-gray-50"
  >
    <h1 className="text-4xl font-extrabold cursor-pointer select-none text-black text-center">
      Michael Hum
    </h1>
  </button>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  {BUTTONS.map(({ id, label, icon: Icon }) => (
    <button
      key={id}
      onClick={() => setActiveSection(id)}
      className="flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-black text-black hover:bg-gray-50 transition text-sm"
    >
      <Icon className="h-5 w-5 text-black" />
      <span>{label}</span>
    </button>
  ))}
</div>

</motion.div>

    ) : (
      <motion.button
        key="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } }}
        exit={{ opacity: 0, y: 20, transition: { duration: 0.6, ease: easing } }}
        layout
        onClick={() => setActiveSection(null)}
        className="max-w-2xl text-left text-black mt-8 bg-white p-8 border border-black shadow-lg cursor-pointer focus:outline-none hover:bg-gray-50"
      >
        <h2 className="text-xl font-semibold mb-4 text-black">
          {activeSection === "about"
            ? "About Me"
            : BUTTONS.find((b) => b.id === activeSection)?.label}
        </h2>
        {activeSection === "about" ? (
          <p className="text-base leading-relaxed">
              Hi there! I’m an engineer who loves solving problems and building practical solutions.
              I’m passionate about software and hardware engineering.
          </p>
        ) : (
          <div className="text-base leading-relaxed">
            {BUTTONS.find((b) => b.id === activeSection)?.content}
          </div>
        )}
      </motion.button>
    )}
  </AnimatePresence>
</div>

  );
}