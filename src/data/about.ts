export type AboutBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "principles"; items: { label: string; text: string }[] }
  | { type: "tags"; items: string[] };

export type AboutSection = {
  title: string;
  blocks: AboutBlock[];
};

export const aboutIntro = [
  `I'm an AI engineer who enjoys building intelligent systems that are useful, reliable, and grounded in solid engineering. My work spans machine learning, large language models, backend systems, and developer tooling, with an emphasis on taking ideas from research into production-quality software.`,
  `I enjoy working across the entire lifecycle of AI systems—from collecting and preparing data to training models, evaluating their behavior, building APIs, designing user-facing applications, and deploying complete end-to-end solutions. Whether I'm implementing a computer vision model, building an LLM-powered workflow, or developing infrastructure around an AI system, I'm most interested in making the system practical, maintainable, and measurable.`,
  `I learn best by building. Most of my projects begin with a paper, an interesting engineering problem, or a product idea, and evolve through experimentation, iteration, and continuous refinement.`,
];

export const aboutSections: AboutSection[] = [
  {
    title: "How I Like to Work",
    blocks: [
      {
        type: "paragraph",
        text: "I enjoy working on problems that sit at the intersection of machine learning and software engineering. My approach is highly iterative: start with a simple baseline, measure it carefully, understand its limitations, and improve it through experimentation rather than intuition.",
      },
      {
        type: "paragraph",
        text: "Over time this has led me to work on projects across computer vision, geospatial AI, recommendation systems, language models, AI agents, and data infrastructure—not because I'm trying to cover every domain, but because each project presented a different systems problem to solve.",
      },
    ],
  },
  {
    title: "Research & Experimentation",
    blocks: [
      {
        type: "paragraph",
        text: "A large part of my work revolves around experimentation-driven AI research.",
      },
      {
        type: "paragraph",
        text: "I enjoy reproducing research papers, benchmarking architectures, studying failure modes, and designing evaluation frameworks that go beyond aggregate accuracy metrics. My projects often involve systematic experimentation across architectures, datasets, and optimization strategies.",
      },
      {
        type: "paragraph",
        text: "Some areas I've explored include:",
      },
      {
        type: "list",
        items: [
          "fairness-aware explainable AI",
          "GAN-based medical image augmentation",
          "remote sensing and satellite imagery",
          "segmentation and dense prediction",
          "recommendation systems",
          "multi-agent AI workflows",
          "real-time ML infrastructure",
        ],
      },
    ],
  },
  {
    title: "Building End-to-End AI Systems",
    blocks: [
      {
        type: "paragraph",
        text: "Alongside research, I enjoy building complete AI systems and developer infrastructure.",
      },
      {
        type: "paragraph",
        text: "I've developed:",
      },
      {
        type: "list",
        items: [
          "async FastAPI microservices",
          "ML monitoring pipelines",
          "recommendation engines",
          "streaming validation systems",
          "AI-powered collaborative platforms",
          "distributed processing workflows",
        ],
      },
      {
        type: "paragraph",
        text: "I'm particularly interested in the intersection of research experimentation × scalable engineering × real-world deployment.",
      },
    ],
  },
  {
    title: "How I Approach Engineering",
    blocks: [
      {
        type: "paragraph",
        text: "I try to build systems that are easy to understand, evaluate, and improve. A few ideas consistently shape how I work:",
      },
      {
        type: "principles",
        items: [
          {
            label: "Measure before optimizing",
            text: "Good evaluation is often more valuable than another percentage point of accuracy.",
          },
          {
            label: "Keep experiments reproducible",
            text: "Small implementation details matter, so I prefer clean pipelines and controlled experiments.",
          },
          {
            label: "Think beyond the model",
            text: "Data quality, APIs, monitoring, and deployment usually have as much impact as model architecture.",
          },
          {
            label: "Build incrementally",
            text: "Most successful systems evolve through many small improvements rather than one large breakthrough.",
          },
        ],
      },
    ],
  },
  {
    title: "Open Source & Learning",
    blocks: [
      {
        type: "paragraph",
        text: "I enjoy building and sharing projects publicly as a way to learn through iteration and feedback.",
      },
      {
        type: "paragraph",
        text: "Most of my projects are developed independently and span research prototypes, production-oriented systems, and experimental ML workflows. Open source has been one of the biggest drivers of my learning, especially in deep learning, distributed systems, and AI infrastructure.",
      },
    ],
  },
  {
    title: "Current Interests",
    blocks: [
      {
        type: "paragraph",
        text: "Right now I'm spending most of my time exploring:",
      },
      {
        type: "list",
        items: [
          "small language models and multilingual AI",
          "AI agents and workflow orchestration",
          "retrieval-augmented systems",
          "evaluation and benchmarking for LLMs",
          "AI developer tools and infrastructure",
          "computer vision for geospatial and scientific applications",
        ],
      },
    ],
  },
  {
    title: "Beyond Tech",
    blocks: [
      {
        type: "paragraph",
        text: "Outside of technical work, I enjoy hackathons, reading research papers, mentoring peers, and exploring emerging ideas in AI systems and scientific computing.",
      },
      {
        type: "paragraph",
        text: "I'm especially interested in the broader impact of AI — including fairness, accessibility, reliability, and how intelligent systems can be designed responsibly for real-world use cases.",
      },
    ],
  },
  {
    title: "Let's Connect",
    blocks: [
      {
        type: "paragraph",
        text: "I'm always interested in collaborating on projects involving:",
      },
      {
        type: "list",
        items: [
          "computer vision",
          "geospatial AI",
          "deep learning research",
          "AI systems engineering",
          "experimental ML infrastructure",
        ],
      },
      {
        type: "paragraph",
        text: "Feel free to reach out if you'd like to discuss ideas, research, or interesting engineering problems.",
      },
      {
        type: "tags",
        items: [
          "Computer Vision",
          "Geospatial AI",
          "Deep Learning",
          "MLOps",
          "Agentic AI",
          "Fairness & XAI",
        ],
      },
    ],
  },
];
