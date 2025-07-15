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
      <div>
        Software Developer @{" "}
        <a
          href="https://www.access.on.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Access Group Inc.</strong>
        </a>{" "}
        (May 2025 - Aug. 2025)
      </div>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderIcon,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <a
            href="https://your-hotel-booking-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Hotel Booking System</strong>
          </a>
        </li>
        <li>
          <a
            href="https://your-medihub-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>MediHub</strong>
          </a>
        </li>
        <li>
          <a
            href="https://your-pathfinding-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Pathfinding Engine</strong>
          </a>
        </li>
        <li>
          <a
            href="https://your-kmap-solver-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Karnaugh Map Solver</strong>
          </a>
        </li>
        <li>
          <a
            href="https://your-risc-processor-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>RISC Processor</strong>
          </a>
        </li>
        <li>
          <a
            href="https://your-uart-controller-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>UART Controller</strong>
          </a>
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
        Feel free to reach out to me on{" "}
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
          href="https://github.com/michaelhum28"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}
        >
          GitHub
        </a>
        , or at{" "}
        <a
          href="mailto:michaelhum28@gmail.com"
          style={{ fontWeight: "bold" }}
        >
          michaelhum28@gmail.com
        </a>
        . I'm always open to discussing new opportunities, or just having a chat!
      </>
    ),
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  const easing = [0.4, 0, 0.2, 1];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <AnimatePresence mode="wait">
        {!activeSection ? (
          <motion.div
            key="header-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: easing } }}
            layout
            className="flex flex-col items-center space-y-6"
          >
            <button
              onClick={() => setActiveSection("about")}
              className="flex items-center rounded-full bg-white px-6 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <h1 className="text-4xl font-extrabold cursor-pointer select-none">
                Michael Hum
              </h1>
            </button>

            <div className="flex space-x-4">
              {BUTTONS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className="flex items-center space-x-2 px-5 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition text-sm"
                >
                  <Icon className="h-5 w-5 text-gray-700" />
                  <span className="text-gray-800">{label}</span>
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
            className="max-w-xl text-left text-gray-700 mt-8 bg-white p-8 rounded-3xl shadow-lg cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              {activeSection === "about"
                ? "About Me"
                : BUTTONS.find((b) => b.id === activeSection)?.label}
            </h2>
            {activeSection === "about" ? (
              <p className="text-sm"> {/* Added text-sm here */}
                <span>Hi there! I’m a computer engineer who loves solving problems and building practical solutions that make an impact.</span>
                <br />
                <span className="block mt-4">I’m passionate about software development and system design, and I enjoy working with teams to bring ideas to reality.</span>
              </p>

            ) : (
              <p className="whitespace-pre-line text-sm"> {/* Added text-sm here */}
                {BUTTONS.find((b) => b.id === activeSection)?.content}
              </p>
            )}
            <div className="mt-4 text-sm text-gray-500 italic"></div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}