"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollRevealText from "../ui/scroll-reveal-text";

gsap.registerPlugin(ScrollTrigger);

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
      "Built in Next.js to utilize server-side rendering to deliver better perceived performance, adopted by Flipkart, myGate, and Bajaj, and serving 1Cr+ daily users.",
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
  const highlightRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Animate highlight keywords
    highlightRefs.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          {
            opacity: 0.5,
            color: "#a1a1aa",
          },
          {
            opacity: 1,
            color: "#ffffff",
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 90%",
            },
          }
        );
      }
    });
  }, []);

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
    <section id="about" className="relative w-full min-h-screen py-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <ScrollRevealText
            text="ABOUT ME"
            as="h2"
            className="text-4xl text-center md:text-7xl font-bold text-zinc-900 dark:text-white"
            gradient={false}
            staggerDelay={0.05}
          />
        </div>

        {/* Summary */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="p-8 md:p-10 border-[.5px] rounded-2xl border-zinc-300 dark:border-zinc-600 bg-white/80 dark:bg-black/20"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg mb-4">
              Product-obsessed <span
                ref={(el) => {
                  highlightRefs.current[0] = el;
                }}
                className="font-bold"
              >
                Full Stack Engineer
              </span> with 4+ years of experience building scalable, enterprise-grade systems and high-performance user interfaces. Proven track record of taking ownership from concept to deployment in both startup and fintech environments.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
              Expertise in <span
                ref={(el) => {
                  highlightRefs.current[1] = el;
                }}
                className="font-bold"
              >
                React, TypeScript, Node.js, and Java
              </span>, with a focus on optimizing complex data pipelines and automating decision workflows. Passionate about solving offline-world problems through innovative technology.
            </p>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Experience Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="p-6 md:p-8 border-[.5px] rounded-2xl border-zinc-300 dark:border-zinc-600 bg-white/80 dark:bg-black/20 h-full"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <FaBriefcase className="text-2xl text-zinc-600 dark:text-zinc-400" />
                <ScrollRevealText
                  text="Experience"
                  as="h3"
                  className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white"
                  gradient={false}
                  staggerDelay={0.08}
                />
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
                      <h4 className="text-base md:text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                        {exp.title}
                      </h4>
                      <div className="flex flex-col text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-500">{exp.period}</span>
                        {exp.stack && (
                          <span className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                            {exp.stack}
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-zinc-400 dark:text-zinc-500 mt-1">▹</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Education & Skills */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="p-6 md:p-8 border-[.5px] rounded-2xl border-zinc-300 dark:border-zinc-600 bg-white/80 dark:bg-black/20"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <FaGraduationCap className="text-2xl text-zinc-600 dark:text-zinc-400" />
                  <ScrollRevealText
                    text="Education"
                    as="h3"
                    className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white"
                    gradient={false}
                    staggerDelay={0.08}
                  />
                </div>
                {EDUCATION.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-zinc-300 dark:border-zinc-700"
                    whileHover={{ scale: 1.02 }}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-base md:text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{edu.institution}</p>
                    <div className="flex flex-col text-xs text-zinc-500 dark:text-zinc-500 mt-2">
                      <span>{edu.location}</span>
                      <span>{edu.period}</span>
                      <span className="text-zinc-600 dark:text-zinc-400 font-medium mt-1">
                        {edu.grade}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="p-6 md:p-8 border-[.5px] rounded-2xl border-zinc-300 dark:border-zinc-600 bg-white/80 dark:bg-black/20"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <ScrollRevealText
                  text="Technical Skills"
                  as="h3"
                  className="text-2xl md:text-3xl mb-6 font-bold text-zinc-900 dark:text-white"
                  gradient={false}
                  staggerDelay={0.08}
                />
                <motion.div
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {Object.entries(SKILLS).map(([category, skills]) => (
                    <motion.div key={category} variants={itemVariants}>
                      <h4 className="text-base font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {skills.map((skill, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 transition-all"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * i }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <div
                              className="p-1.5 rounded-md flex items-center justify-center"
                              style={{ backgroundColor: skill.color + "20" }}
                            >
                              <div style={{ color: skill.color, fontSize: "1.25rem" }}>
                                {skill.icon}
                              </div>
                            </div>
                            <span className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* View Full Resume Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://drive.google.com/file/d/1gOv_y6AZOSYU3pPonf9UMeUewVtlOyEA/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="px-8 py-3 bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-full text-zinc-900 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Resume →
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
