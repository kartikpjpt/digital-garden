"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
  FaBriefcase,
  FaGraduationCap,
  FaLocationDot,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPm2,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiNestjs,
  SiSpringboot,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "kr.pjpt@gmail.com",
    href: "mailto:kr.pjpt@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+91 9672927884",
    href: "tel:+919672927884",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kartikpjpt/",
    content: "/kartikpjpt",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/kartikpjpt",
    content: "/kartikpjpt",
    icon: <FaGithub height={"50px"} />,
  },
];

const EXPERIENCE = [
  {
    title: "Senior Software Engineer II",
    company: "Saison Omni",
    location: "Bengaluru",
    period: "Oct 2025 – Present",
    highlights: [
      "Architected a monorepo consolidating services and enhancing performance via SSR and caching, reducing load times by 30%",
      "Led the end-to-end development of saison-international.com, /impact, and /saison-investment-management with Strapi CMS",
      "Designed company website with LCP < 2.5 and 80+ Lighthouse scores in SEO tests",
    ],
  },
  {
    title: "Senior Software Engineer I",
    company: "Saison Omni",
    location: "Bengaluru",
    period: "Oct 2024 – Oct 2025",
    highlights: [
      "Engineered a config-driven form engine in React capable of dynamically generating forms from JSON configs",
      "Implemented registry-driven architecture with virtualized rendering & debounced validation, handling 500+ fields",
      "Engineered a Loan Disbursement SDK enabling loan approvals in under 3 minutes, serving 1Cr+ daily users",
      "Spearheaded development of core component library with 60+ reusable UI components",
      "Architected a monorepo + microfrontend system serving 4 projects with shared UI",
    ],
  },
  {
    title: "Software Engineer II",
    company: "Saison Omni",
    location: "Bengaluru",
    period: "Mar 2023 – Oct 2024",
    highlights: [
      "Revamped the document management system with smart tagging and instant previews, reducing retrieval time by 60%",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "BlokMiners",
    location: "Web3 Startup",
    period: "Dec 2021 – Feb 2023",
    highlights: [
      "Led zero-to-one development of multiple SaaS-based Web3 platforms including unicus.one, blocktickets.io, buk.app, and gamepay.sg",
      "Engineered secure payment gateways integrating MetaMask, Circle, Stripe and TripleA for seamless crypto-to-fiat transactions",
      "Built high-performance frontends and NestJS backends with real-time blockchain state management using Ethers.js",
    ],
  },
];

const EDUCATION = [
  {
    degree: "B.Tech in Electronics & Computer Engineering",
    institution: "MBM Engineering College",
    location: "Jodhpur, Rajasthan",
    period: "Aug 2018 – Jun 2022",
    grade: "CGPA: 8.0/10",
  },
  {
    degree: "12th",
    institution: "Indian Senior Secondary School (RBSE)",
    location: "Jodhpur, Rajasthan",
    period: "Apr 2016 – Mar 2017",
    grade: "Percentage: 79.20",
  },
];

const SKILLS = {
  Languages: [
    "TypeScript",
    "JavaScript (ES6+)",
    "Java",
    "Golang",
    "SQL",
    "HTML/CSS",
  ],
  Frontend: [
    "React.js",
    "Next.js",
    "Redux",
    "RTK Query",
    "Tailwind CSS",
    "Material UI",
    "Framer Motion",
    "ShadCN",
    "AntD",
  ],
  "Backend & Data": [
    "Node.js",
    "Express.js",
    "NestJS",
    "AdonisJS",
    "Spring Boot",
    "Golang",
    "JSONata",
    "REST APIs",
  ],
  "Cloud & DevOps": [
    "AWS",
    "Docker",
    "CI/CD (GitHub Actions)",
    "Nx.dev",
    "Vite",
  ],
};

const TOOLS = [
  {
    name: "JavaScript",
    content: "JavaScript is a high-level, interpreted programming language",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "TypeScript is a superset of JavaScript that compiles to plain JS",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "HTML",
    content: "Next.js is a React framework for production",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "Next.js is a React framework for production",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Nodejs",
    content: "Next.js is a React framework for production",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "React.js",
    content: "Next.js is a React framework for production",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Docker",
    content: "Next.js is a React framework for production",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "NginX",
    content: "Next.js is a React framework for production",
    icon: <DiNginx size={"50px"} color="#008000" />,
    color: "#008000",
  },
  {
    name: "Vue.js",
    content: "Next.js is a React framework for production",
    icon: <FaVuejs size={"50px"} color="#41b883" />,
    color: "#41b883",
  },
  {
    name: "Express.js",
    content: "Next.js is a React framework for production",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    content: "Next.js is a React framework for production",
    icon: <DiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    content: "Next.js is a React framework for production",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Tailwind CSS",
    content: "Next.js is a React framework for production",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Firebase",
    content: "Next.js is a React framework for production",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Git",
    content: "Next.js is a React framework for production",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Next.js is a React framework for production",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "Next.js is a React framework for production",
    icon: <SiVisualstudiocode size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "VIM",
    content: "Next.js is a React framework for production",
    icon: <DiVim size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Prettier",
    content: "Next.js is a React framework for production",
    icon: <SiPrettier size={"50px"} color="#f7b93c" />,
    color: "#f7b93c",
  },
  {
    name: "NPM",
    content: "Next.js is a React framework for production",
    icon: <DiNpm size={"50px"} color="#CB3837" />,
    color: "#CB3837",
  },
  {
    name: "Yarn",
    content: "Next.js is a React framework for production",
    icon: <FaYarn size={"50px"} color="#2C8EBB" />,
    color: "#2C8EBB",
  },
  {
    name: "Vercel",
    content: "Next.js is a React framework for production",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Linux",
    content: "Next.js is a React framework for production",
    icon: <FaLinux size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Kubuntu",
    content: "Next.js is a React framework for production",
    // give me correct color for  kubuntu
    icon: <SiKubuntu size={"50px"} color="#0077C4" />,
    color: "#000000",
  },
  {
    name: "Terminal",
    content: "Next.js is a React framework for production",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "AWS",
    content: "Next.js is a React framework for production",
    icon: <FaAws size={"50px"} color="#3f51b5" />,
    color: "#000000",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5 w-full">
        {/* Sidebar */}
        <motion.aside
          className="w-full lg:basis-1/4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600 sticky top-24"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <motion.div
                className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </motion.div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl font-semibold">
                  Kartik Prajapat
                </p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Senior Software Engineer
                </div>
                <div className="flex items-center gap-1 text-xs text-zinc-400">
                  <FaLocationDot size={12} />
                  <span>Bengaluru</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md transition-all hover:bg-zinc-700"
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 lg:basis-3/4 w-full min-w-0">
          {/* Summary Section */}
          <motion.div
            className="p-6 md:p-10 border-[.5px] rounded-2xl border-zinc-600 mb-5"
            style={{ backdropFilter: "blur(2px)" }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl mb-6 font-bold bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              About Me
            </motion.h1>
            <motion.p
              className="mb-4 text-zinc-300 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Product obsessed Full Stack Engineer with 4+ years of experience
              building scalable, enterprise-grade systems and high-performance
              user interfaces. Proven track record of taking ownership from
              concept to deployment in both startup and fintech environments.
            </motion.p>
            <motion.p
              className="text-zinc-300 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Expertise in React, TypeScript, Node.js, and Java, with a focus on
              optimizing complex data pipelines and automating decision
              workflows. Passionate about solving offline-world problems through
              innovative technology.
            </motion.p>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="p-6 md:p-10 border-[.5px] rounded-2xl border-zinc-600 mb-5"
            style={{ backdropFilter: "blur(2px)" }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaBriefcase className="text-2xl text-zinc-400" />
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Experience
              </h2>
            </div>
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-zinc-700 last:border-l-0 last:pb-0"
                  variants={itemVariants}
                >
                  <motion.div
                    className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-600 border-2 border-zinc-800"
                    whileHover={{ scale: 1.5, backgroundColor: "#a1a1aa" }}
                  />
                  <div className="mb-2">
                    <h3 className="text-lg md:text-xl font-semibold text-zinc-200">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-sm text-zinc-400">
                      <span className="font-medium">{exp.company}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{exp.location}</span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">{exp.period}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex gap-2"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="text-zinc-500 mt-1">▹</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="p-6 md:p-10 border-[.5px] rounded-2xl border-zinc-600 mb-5"
            style={{ backdropFilter: "blur(2px)" }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaGraduationCap className="text-2xl text-zinc-400" />
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Education
              </h2>
            </div>
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:border-zinc-600 transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-semibold text-zinc-200 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-zinc-400">{edu.institution}</p>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-xs text-zinc-500 mt-2">
                    <span>{edu.location}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{edu.period}</span>
                    <span className="hidden md:inline">•</span>
                    <span className="text-zinc-400 font-medium">
                      {edu.grade}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div
            className="p-6 md:p-10 border-[.5px] rounded-2xl border-zinc-600 mb-5"
            style={{ backdropFilter: "blur(2px)" }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl mb-8 font-bold bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <motion.div
              className="grid gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {Object.entries(SKILLS).map(([category, skills]) => (
                <motion.div key={category} variants={itemVariants}>
                  <h3 className="text-lg font-semibold text-zinc-300 mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-full text-sm text-zinc-300 hover:border-zinc-500 hover:bg-zinc-700 transition-all"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.05 * i }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            className="p-6 md:p-10 border-[.5px] rounded-2xl border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-2xl md:text-3xl mb-6 font-bold bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Tools & Technologies
            </h2>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="Technologies"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md hover:border-zinc-500 transition-all">
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default Page;
