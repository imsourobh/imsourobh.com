import { FaExternalLinkAlt, FaGithub, FaServer } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";

export const projects = [
  {
    name: "Personal Portfolio Website",
    description:
      "This is my personal portfolio website. It is designed to showcase my skills, projects, and experience. The website is built using React, Tailwind CSS, and Framer Motion.",
    techStack: ["Next.Js", "Vercel", "React", "TailwindCSS"],
    banner: "/image/projects/portfolio.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/imsouorbh/imsouorbh_website",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Preview",
        href: "https://imsourobh.me",
        icon: <FaExternalLinkAlt className="text-button" />,
      },
    ],
  },
  {
    name: "Real Time Bus Location",
    description:
      "Real Time Bus Location is a web application that allows users to track the location of buses in real time. The application is built using React, Mapbox, and the MBTA API.",
    techStack: ["HTML", "Shell", "Javascript", "Arduino"],
    banner: "/image/projects/buslocation.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/imsourobh/RealTimeBusLocation",
        icon: <FaGithub className="text-button" />,
      },
    ],
  },
  {
    name: "LLM based PDF reader",
    description:
      "This is a PDF reader that uses LLM to generate a summary of the PDF. The application is built using React, Tailwind CSS, and the Hugging Face Transformers library.",
    techStack: ["Streamlit", "Python", "Ollama", "FAISS"],
    banner: "/image/projects/pdfreader.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/imsourobh/PDF_Reader-Streamlit",
        icon: <FaGithub className="text-button" />,
      },
    ],
  },
];

export const filterKeys = [
  {
    name: "All",
  },
  {
    name: "Streamlit",
  },
  {
    name: "Next.Js",
  },
  {
    name: "Arduino",
  },
];
