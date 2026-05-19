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
  `I enjoy building AI systems that combine strong research foundations with practical engineering. My work spans computer vision, NLP, geospatial AI, recommendation systems, and scalable ML infrastructure, with a particular focus on experimentation, evaluation, and real-world deployment.`,
  `Over the past few years, I've worked on projects ranging from fairness-aware computer vision and medical imaging to multi-agent AI systems and remote sensing pipelines. I'm especially interested in how deep learning systems behave under real-world constraints — including robustness, explainability, scalability, and generalization.`,
  `I like taking ideas from research papers, reproducing them rigorously, and extending them into usable systems through experimentation and iterative engineering.`,
];

export const aboutSections: AboutSection[] = [
  {
    title: "My Journey Into AI",
    blocks: [
      {
        type: "paragraph",
        text: "My interest in AI began through computer vision and deep learning, initially exploring image classification and segmentation problems before gradually expanding into NLP, geospatial intelligence, recommendation systems, and agentic AI systems.",
      },
      {
        type: "paragraph",
        text: "What started as curiosity about neural networks evolved into a broader interest in understanding how intelligent systems can be evaluated, optimized, and deployed reliably in real-world environments.",
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
    title: "Computer Vision & Geospatial AI",
    blocks: [
      {
        type: "paragraph",
        text: "Computer vision and geospatial AI are currently my strongest research interests.",
      },
      {
        type: "paragraph",
        text: "Through projects in landslide detection, medical imaging, fairness analysis, and satellite imagery understanding, I've worked extensively with CNNs, transformers, segmentation architectures, attention mechanisms, and multimodal remote sensing data.",
      },
      {
        type: "paragraph",
        text: "My work at the Indian Institute of Remote Sensing (ISRO) further strengthened my interest in geospatial machine learning and large-scale image analysis pipelines.",
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
    title: "Technical Approach",
    blocks: [
      {
        type: "paragraph",
        text: "My approach to AI development is heavily experimentation-driven:",
      },
      {
        type: "principles",
        items: [
          {
            label: "Reproducibility first",
            text: "clean pipelines, controlled experiments, and measurable benchmarks",
          },
          {
            label: "Evaluation matters",
            text: "understanding why models fail is often more important than maximizing a single metric",
          },
          {
            label: "Systems thinking",
            text: "strong ML systems require reliable infrastructure, monitoring, and efficient deployment pipelines",
          },
          {
            label: "Data-centric development",
            text: "model quality depends heavily on dataset quality, preprocessing, and representation",
          },
          {
            label: "Iterative improvement",
            text: "small experimental insights often compound into major performance gains",
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
        text: "Right now, I'm particularly interested in:",
      },
      {
        type: "list",
        items: [
          "vision transformers and multimodal learning",
          "geospatial foundation models and remote sensing AI",
          "explainability and fairness in computer vision",
          "agentic AI systems and workflow orchestration",
          "efficient training and evaluation pipelines",
          "ML monitoring, validation, and reproducibility",
          "retrieval-augmented and multi-agent systems",
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
    title: "Recognition & Programs",
    blocks: [
      {
        type: "list",
        items: [
          "Speaker at PyCon 2025",
          "Selected for Meta Build for AI Summit 2024",
          "Participant at Amazon ML Summer School",
          "Lady Ada finalist",
        ],
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
