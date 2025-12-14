const config = {
  title: "Kartik Prajapat | Senior Software Engineer",
  description: {
    long: "Explore the portfolio of Kartik Prajapat, a Product-obsessed Full Stack Engineer with 4+ years of experience building scalable, enterprise-grade systems and high-performance user interfaces. Proven track record of taking ownership from concept to deployment in both startup and fintech environments. Expertise in React, TypeScript, Node.js, and Java, with a focus on optimizing complex data pipelines and automating decision workflows.",
    short:
      "Discover the portfolio of Kartik Prajapat, a Senior Software Engineer passionate about solving offline-world problems through innovative technology.",
  },
  keywords: [
    "Kartik",
    "Kartik Prajapat",
    "kartikpjpt",
    "Kartik Prajapat portfolio",
    "portfolio",
    "Full Stack Engineer",
    "Senior Software Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "web development",
    "fintech",
    "enterprise systems",
    "AWS",
    "Docker",
    "Redux",
    "NestJS",
    "Spring Boot",
  ],
  author: "Kartik Prajapat",
  email: "kr.pjpt@gmail.com",
  site: "https://kartikprajapat.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/kartikpjpt/",
    linkedin: "https://www.linkedin.com/in/kartikpjpt/",
    instagram: "https://www.instagram.com/kartikpjpt/",
    facebook: "https://www.facebook.com/kartikpjpt/",
    github: "https://github.com/kartikpjpt/",
  },
};
export { config };
