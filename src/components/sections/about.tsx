"use client";
import React from "react";
import { motion } from "framer-motion";
import { Archivo_Black, Figtree } from "next/font/google";
import { FaBriefcase, FaGraduationCap, FaJava } from "react-icons/fa6";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiSpringboot,
  SiGo,
  SiAmazon,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";
import { ScrollReveal } from "../ui/scroll-reveal";
import { MagicCard } from "../ui/magic-card";
import { SplitText } from "../ui/split-text";
import { TextType } from "../ui/text-type";
import { ShinyText } from "../ui/shiny-text";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  stack?: string;
  highlights: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Senior Software Engineer II",
    company: "Saison Omni",
    location: "Bengaluru",
    period: "Oct 2025 – Present",
    highlights: [
      "Performance Engineering: Architected a monorepo consolidating services and enhancing performance via SSR and caching, reducing load times by 30%.",
      "Rapid Delivery & CMS Architecture: Led the end-to-end development of saison-international.com, /impact, and /saison-investment-management. Integrated Strapi CMS to support multilingual content and delivered animated, performant UIs using React, Next.js, and Framer Motion.",
      "Designed company website with LCP < 2.5 and 80+ Lighthouse scores in SEO tests.",
    ],
  },
  {
    title: "Senior Software Engineer I",
    company: "Saison Omni",
    location: "Bengaluru",
    period: "Oct 2024 – Oct 2025",
    highlights: [
      "Engineered a config-driven form engine in React capable of dynamically generating forms from JSON configs. Published an internal npm package.",
      "Implemented a registry-driven architecture supporting nested groups, arrays, conditional visibility, schema-based validation (AJV), and conditional rendering.",
      "Optimized for scale with virtualized rendering & debounced validation, handling 500+ fields without performance degradation.",
      "Enabled backend-driven UI creation, empowering non-frontend teams to ship new forms/features independently and reducing delivery time.",
      "Engineered a Loan Disbursement SDK enabling loan approvals in under 3 minutes.",
      "Built in Next.js to utilize server-side rendering to deliver better perceived performance, adopted by Flipkart, myGate, and Bajaj.",
      "Engineered mobile-first responsive design for cross-device compatibility.",
      "Spearheaded the development of a core component library to unify design across projects & cut delivery timelines.",
      "Made use of compound pattern in React to create 60+ reusable UI components & pluggable features(reports, settings), while focusing on scalability.",
      "Architected a monorepo + microfrontend system serving 4 projects with shared UI",
    ],
  },
  {
    title: "Software Engineer II",
    company: "Saison Omni",
    location: "Bengaluru",
    period: "Mar 2023 – Oct 2024",
    highlights: [
      "Revamped the document management system with smart tagging and instant previews, reducing information retrieval time by 60%.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "BlokMiners",
    location: "Web3 Startup",
    period: "Dec 2021 – Feb 2023",
    stack: "React.js, Next.js, Node.js, Express.js",
    highlights: [
      "End-to-End Product Ownership: Led the zero-to-one development of multiple SaaS-based Web3 platforms including unicus.one, blocktickets.io, buk.app, and gamepay.sg, handling architecture from concept to deployment.",
      "Hybrid Payment Infrastructure: Engineered secure payment gateways integrating MetaMask, Circle, Stripe and TripleA, enabling seamless crypto-to-fiat transactions and NFT minting workflows for a global user base.",
      "Complex Integrations: Built high-performance frontends and NestJS backends capable of handling real-time blockchain state management and wallet authentication using Ethers.js, ensuring a smooth user experience despite decentralized latency.",
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
];

const SKILLS = {
  Frontend: [
    { name: "React.js", icon: <SiReact />, color: "#61dafb" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06b6d4" },
    { name: "Framer Motion", icon: <SiFramer />, color: "#ff0055" },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
    { name: "NestJS", icon: <SiNestjs />, color: "#e0234e" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
    { name: "Golang", icon: <SiGo />, color: "#00add8" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
  ],
  DevOps: [
    { name: "AWS", icon: <SiAmazon />, color: "#ff9900" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
    { name: "CI/CD", icon: <SiGithubactions />, color: "#2088ff" },
  ],
};

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <>
      {/* About Me Section */}
      <section
        id="about"
        className={`relative w-full min-h-screen py-20 ${figtree.className}`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <h2
              className={`bg-clip-text text-4xl text-center md:text-7xl font-bold text-transparent bg-gradient-to-b from-white/80 to-white/20 mb-8 ${archivoBlack.className}`}
            >
              <SplitText>ABOUT ME</SplitText>
            </h2>
            <ScrollReveal delay={0.2}>
              <MagicCard>
                <div className="p-6 md:p-8">
                  <p className="text-zinc-300 leading-relaxed text-lg md:text-xl mb-6 text-justify">
                    <TextType delay={0.2} speed={10}>
                      Hey there! I&apos;m a Product-obsessed Full Stack Engineer
                      with 4+ years of experience building scalable,
                      enterprise-grade systems and high-performance user
                      interfaces.
                    </TextType>
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-lg md:text-xl mb-6 text-justify">
                    <TextType delay={2} speed={10}>
                      I thrive on taking ownership from concept to deployment in
                      both startup and fintech environments. My expertise spans
                      across React, TypeScript, Node.js, and Java, with a
                      particular focus on optimizing complex data pipelines and
                      automating decision workflows.
                    </TextType>
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-lg md:text-xl text-justify">
                    <TextType delay={4} speed={10}>
                      I&apos;m passionate about solving real-world problems
                      through innovative technology and building products that
                      make a genuine impact. When I&apos;m not coding,
                      you&apos;ll find me exploring new technologies and
                      contributing to open-source projects.
                    </TextType>
                  </p>
                </div>
              </MagicCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`relative w-full py-20 ${figtree.className}`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="mb-16">
            <h2
              className={`bg-clip-text text-4xl text-center md:text-7xl font-bold text-transparent bg-gradient-to-b from-white/80 to-white/20 mb-8 ${archivoBlack.className}`}
            >
              <SplitText>MY SKILLS</SplitText>
            </h2>
            <ScrollReveal delay={0.2}>
              <p className="text-zinc-400 text-lg md:text-xl max-w-3xl text-center mx-auto">
                The secret sauce behind building modern, scalable applications
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([category, skills], catIndex) => (
              <motion.div
                key={category}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: catIndex * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <MagicCard>
                  <motion.div
                    className="p-6"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                      {category}
                    </h3>
                    <div className="space-y-3">
                      {skills.map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 bg-zinc-800/80 border border-zinc-700/50 rounded-lg hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200"
                        >
                          <div
                            className="p-2 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: skill.color + "30" }}
                          >
                            <div
                              style={{ color: skill.color, fontSize: "1.5rem" }}
                            >
                              {skill.icon}
                            </div>
                          </div>
                          <span className="text-base text-zinc-100 font-medium">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section
        id="experience"
        className={`relative w-full py-20 ${figtree.className}`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="mb-16">
            <h2
              className={`bg-clip-text text-4xl text-center md:text-7xl font-bold text-transparent bg-gradient-to-b from-white/80 to-white/20 mb-8 ${archivoBlack.className}`}
            >
              <SplitText>EXPERIENCE</SplitText>
            </h2>
          </div>

          {/* Experience Section */}
          <motion.div
            className="mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MagicCard>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FaBriefcase className="text-2xl text-zinc-400" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Experience
                  </h3>
                </div>
                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {EXPERIENCE.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-6 pb-6 border-l-2 border-zinc-700 last:border-l-0 last:pb-0"
                      variants={itemVariants}
                    >
                      <motion.div
                        className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-600 border-2 border-zinc-800"
                        whileHover={{ scale: 1.5, backgroundColor: "#a1a1aa" }}
                      />
                      <div className="mb-2">
                        <h4 className="text-base md:text-lg font-semibold text-zinc-200">
                          {exp.title}
                        </h4>
                        <div className="flex flex-col text-sm text-zinc-400">
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-xs text-zinc-500">
                            {exp.period}
                          </span>
                          {exp.stack && (
                            <span className="text-xs text-zinc-500 mt-1">
                              {exp.stack}
                            </span>
                          )}
                        </div>
                      </div>
                      <ul className="space-y-1 text-sm text-zinc-300">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-zinc-500 mt-1">▹</span>
                            <span className="leading-relaxed">
                              <ShinyText>{highlight}</ShinyText>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </MagicCard>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MagicCard>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FaGraduationCap className="text-2xl text-zinc-400" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Education
                  </h3>
                </div>
                {EDUCATION.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700"
                    whileHover={{ scale: 1.02 }}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-base md:text-lg font-semibold text-zinc-200 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-zinc-400">{edu.institution}</p>
                    <div className="flex flex-col text-xs text-zinc-500 mt-2">
                      <span>{edu.location}</span>
                      <span>{edu.period}</span>
                      <span className="text-zinc-400 font-medium mt-1">
                        {edu.grade}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </MagicCard>
          </motion.div>

          {/* View Full Resume Link */}
          <motion.div
            className="text-center mt-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://drive.google.com/file/d/1DRp79yDlQYDzd4b0kmtxc2KKyz2Ygm4L/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="px-8 py-3 bg-zinc-800 border border-zinc-700 rounded-full text-zinc-300 hover:border-zinc-500 hover:bg-zinc-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Full Resume →
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
