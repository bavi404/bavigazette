export const profile = {
  name: "Bavishya",
  fullName: "Bavishya Sankaranarayanan",
  tagline: "building for better",
  role: "B.Tech CS, IIIT Kottayam '26 · ML, computer vision, NLP & AI systems",
  initials: "BS",
  photo: "/profile.png",
  email: "sankaranarayananbavishya@gmail.com",
  github: "https://github.com/bavi404",
  linkedin: "https://www.linkedin.com/in/bavishya-sankaranarayanan/",
};

export const work = [
  {
    id: "tifin",
    company: "TIFIN",
    role: "AI / LLM Intern",
    dates: "Jun 2025 — Jan 2026",
    location: "Bangalore, India",
    description:
      "Built Python data pipelines, FastAPI services, and automated evaluation across 10K+ model interactions—reducing manual validation and scaling experimentation infrastructure with async processing, Redis, and PostgreSQL.",
    logo: "/logos/tifin.png",
    logoAlt: "TIFIN logo",
    logoVariant: "light" as const,
    tags: ["Python", "FastAPI", "Redis", "PostgreSQL", "ML Evaluation"],
  },
  {
    id: "isro",
    company: "Indian Institute of Remote Sensing (ISRO)",
    role: "Remote Sensing & Geospatial Research Intern",
    dates: "Jan 2025 — Mar 2025",
    location: "Dehradun, India",
    description:
      "Developed geospatial preprocessing pipelines and benchmarking workflows on large-scale raster datasets—improving dataset preparation efficiency by 15% with statistical validation for research reproducibility.",
    logo: "/logos/isro.png",
    logoAlt: "ISRO logo",
    logoVariant: "dark" as const,
    tags: ["Geospatial AI", "Python", "Remote Sensing", "Statistical Analysis"],
  },
];

export const recognition = [
  {
    title: "Speaker at PyCon 2025",
    date: "2025",
    description: "Invited speaker at PyCon 2025.",
    tags: ["Speaking", "PyCon", "Python"],
  },
  {
    title: "Meta Build for AI Summit 2024",
    date: "Selected",
    description: "Selected for Meta's Build for AI Summit 2024.",
    tags: ["Meta", "GenAI", "Summit"],
  },
  {
    title: "Amazon ML Summer School",
    date: "Participant",
    description: "Participant at Amazon ML Summer School.",
    tags: ["Amazon", "Machine Learning"],
  },
  {
    title: "Lady Ada Finalist",
    date: "Finalist",
    description: "Lady Ada finalist — recognized for technical achievement in computing.",
    tags: ["Award", "Finalist"],
  },
];

export const highlights = [
  {
    title: "10K+ automated LLM evaluations at TIFIN",
    date: "2025 — 2026",
    description:
      "Scaled experimentation and evaluation pipelines for AI/LLM workflows, cutting manual validation effort across large interaction batches.",
    tags: ["LLM", "FastAPI", "MLOps"],
  },
  {
    title: "15% faster geospatial dataset preparation at IIRS",
    date: "Jan — Mar 2025",
    description:
      "Optimized remote sensing preprocessing and validation pipelines for scientific image datasets at ISRO's remote sensing institute.",
    tags: ["ISRO", "Geospatial", "Research"],
  },
  {
    title: "97.51% brain tumor classification accuracy (BTGAN-TL)",
    date: "Research",
    description:
      "GAN-augmented MRI pipeline with transfer learning—ResNet18 at 97.51% accuracy and 97.17% F1 with DCGAN-based synthetic augmentation.",
    tags: ["Medical Imaging", "GANs", "PyTorch"],
  },
  {
    title: "P95 latency cut from 120ms → 35ms (RTB system)",
    date: "Systems",
    description:
      "Real-time bidding optimization with Redis caching and profiling—140% throughput increase for low-latency ad serving.",
    tags: ["Go", "Redis", "Performance"],
  },
];

export type PublicationStatus = "published" | "forthcoming";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  highlight?: string;
  status?: PublicationStatus;
  href?: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: "Published";
  description: string;
  tags: string[];
  href: string;
};

export const publications: Publication[] = [
  {
    title:
      "IMHPS: IoT-Enabled Mobile Hotspot Positioning System for Smarthome Applications",
    authors: "S Bavishya, Nevlin Noble, Bhagyalakshmi Muralidharan, Shajulin Benedict",
    venue: "2025 International Conference on Wireless Communications Signal Processing and Networking (WiSPNET)",
    year: "2025",
    status: "Published",
    description:
      "Proposes an IoT-enabled mobile hotspot positioning system that automatically evaluates signal strength for placing mobile hotspots connecting to smart-home devices, including a Connectivity Scanner for deployment planning.",
    tags: ["IoT", "Smart Home", "Wireless", "IEEE"],
    href: "https://ieeexplore.ieee.org/abstract/document/11004636",
  },
];

export type ProjectGroup = {
  id: string;
  title: string;
  subtitle?: string;
  projects: Project[];
};

export const projectGroups: ProjectGroup[] = [
  {
    id: "research",
    title: "Research Projects",
    subtitle: "Published work and papers forthcoming",
    projects: [
      {
        title: "Fairness-Aware Explainable AI for Facial Attributes",
        highlight: "Mechanistic bias analysis across FairFace & CelebA",
        description:
          "Unified fairness + explainability framework with SHAP/LIME attribution statistics, spatial alignment metrics, and subgroup gap analysis across ResNet, EfficientNet, MobileNet, and Swin Transformer.",
        tags: ["PyTorch", "SHAP", "LIME", "Fairness", "Transformers"],
        status: "forthcoming",
      },
      {
        title: "BTGAN-TL: Brain Tumor Classification",
        highlight: "97.51% accuracy · 97.17% F1 (ResNet18)",
        description:
          "GAN-based MRI augmentation (DCGAN, cGAN) with transfer learning; SSIM/PSNR/FID quality evaluation and scalable classification pipelines for data-scarce medical imaging.",
        tags: ["PyTorch", "GANs", "Transfer Learning", "MRI"],
        status: "forthcoming",
      },
      {
        title: "Differential Evolution GAN for Time-Series Forecasting",
        highlight: "14.6% lower MAPE vs LSTM baselines",
        description:
          "DE-GAN hybrid for financial forecasting combining evolutionary hyperparameter search, GAN-based prediction, and temporal attention for stable long-horizon forecasts.",
        tags: ["TensorFlow", "GANs", "Time Series", "Optimization"],
        status: "forthcoming",
      },
    ],
  },
  {
    id: "nlp",
    title: "AI & Machine Learning",
    subtitle: "NLP, explainability, and conversational systems",
    projects: [
      {
        title: "Cross-Lingual Embedding Alignment & Bias Analysis",
        highlight: "Sentiment accuracy 76% → 88%",
        description:
          "BERT classifier with Integrated Gradients, attention attribution, counterfactual analysis, and English–Hindi Procrustes alignment—12% misclassification bias reduction.",
        tags: ["BERT", "PyTorch", "NLP", "Explainability"],
      },
      {
        title: "Intent Detection System",
        description:
          "Compared TF-IDF + logistic regression against fine-tuned BERT for conversational intent classification with confusion-matrix benchmarking.",
        tags: ["Transformers", "scikit-learn", "NLP"],
      },
      {
        title: "Career Buddy — AI Career Guidance Chatbot",
        description:
          "NLP-driven career guidance with neural intent classification, CNN feature extraction, and Streamlit deployment for pathway recommendations.",
        tags: ["NLP", "Streamlit", "Python"],
      },
      {
        title: "Sentiment Analysis Chatbot",
        description:
          "Interactive mood-tracking chatbot with TextBlob polarity/subjectivity analysis and dynamic personalized responses.",
        tags: ["TextBlob", "NLP", "Python"],
      },
    ],
  },
  {
    id: "vision",
    title: "Computer Vision & Imaging",
    subtitle: "Segmentation, medical imaging, and enhancement",
    projects: [
      {
        title: "Landslide Detection Using Deep Learning",
        description:
          "U-Net++ segmentation with attention gates, residual connections, deep supervision, mixed-precision training, and Dice/Focal loss—IoU, Dice, F1 evaluation.",
        tags: ["PyTorch", "U-Net++", "Remote Sensing", "OpenCV"],
      },
      {
        title: "OMR Sheet Processor",
        highlight: "~88% accuracy · ~200ms on CPU",
        description:
          "YOLOv8 region detection, bubble detection, EasyOCR extraction, Flask web UI, and batch multi-column OMR processing.",
        tags: ["YOLOv8", "OpenCV", "EasyOCR", "Flask"],
      },
      {
        title: "X-Ray Eye",
        description:
          "Chest X-ray disease classification (cardiomegaly, effusion, no findings) with DenseNet-161, Mila activation, and Flask interface.",
        tags: ["PyTorch", "DenseNet", "Medical Imaging"],
      },
      {
        title: "Polygon Color UNet",
        description:
          "FiLM-conditioned U-Net for polygon colorization with color embeddings, SSIM + L1 losses, and WandB experiment tracking.",
        tags: ["PyTorch", "U-Net", "FiLM"],
      },
      {
        title: "Super-Resolution GAN",
        description:
          "SR-GAN image enhancement pipeline with high-resolution reconstruction and Streamlit deployment.",
        tags: ["GANs", "PyTorch", "Streamlit"],
      },
    ],
  },
  {
    id: "systems",
    title: "Backend, Systems & MLOps",
    subtitle: "Microservices, streaming ML, and performance engineering",
    projects: [
      {
        title: "LinkedIn Insights Microservice",
        description:
          "Production FastAPI service with Playwright scraping, async PostgreSQL ORM, Redis caching, AI summaries, and Docker deployment.",
        tags: ["FastAPI", "PostgreSQL", "Redis", "Playwright"],
      },
      {
        title: "Code Execution Engine",
        description:
          "Online code runner with Monaco Editor, multi-language Docker sandboxes, Redis queues, PostgreSQL persistence, and web workers.",
        tags: ["Next.js", "Docker", "Redis", "PostgreSQL"],
      },
      {
        title: "ML Feature Store Monitoring & Validation",
        description:
          "Drift detection (PSI, KS, JS), Kafka streaming validation, Spark batch jobs, Prometheus/Grafana, and Streamlit dashboards.",
        tags: ["Kafka", "Spark", "MLOps", "Prometheus"],
      },
      {
        title: "RTB Latency Optimization System",
        highlight: "P95: 120ms → 35ms · +140% throughput",
        description:
          "Real-time bidding pipeline optimization with Redis caching, Go services, and Prometheus/Grafana observability.",
        tags: ["Go", "Redis", "Prometheus", "Grafana"],
      },
      {
        title: "Real-Time Credit Card Fraud Detection",
        description:
          "Enterprise Spark streaming pipeline with Random Forest + K-Means anomaly detection, Delta Lake, multi-AZ AWS deployment.",
        tags: ["Spark", "AWS", "Delta Lake", "ML"],
      },
    ],
  },
  {
    id: "agents",
    title: "Agentic & Multi-Modal AI",
    subtitle: "RAG, multi-agent systems, and collaborative AI",
    projects: [
      {
        title: "Multi-Modal Stock Market Analysis Framework",
        description:
          "Multi-agent platform with sentiment, emotion, price prediction, and knowledge-graph agents—FinBERT, Neo4j, and social/news analysis.",
        tags: ["Agentic AI", "Neo4j", "FinBERT", "NLP"],
      },
      {
        title: "AI Use Case Generator",
        description:
          "Multi-agent system for market research, AI opportunity identification, use-case generation, and GenAI strategy recommendations.",
        tags: ["Multi-Agent", "GenAI", "Python"],
      },
      {
        title: "Scientific Paper RAG Chatbot",
        description:
          "Section-level semantic retrieval with rank-based reweighting, FAISS vector search, GPT answering, and Streamlit UI.",
        tags: ["LangChain", "FAISS", "RAG", "OpenAI"],
      },
      {
        title: "AI-Enhanced Slack-like Chat Platform",
        description:
          "Real-time channels and threads with AI summaries, tone analysis, meeting notes, and org-wide semantic search.",
        tags: ["React", "Supabase", "OpenAI", "Gemini"],
      },
    ],
  },
  {
    id: "fullstack",
    title: "Full Stack & Product",
    subtitle: "Dashboards, platforms, and applications",
    projects: [
      {
        title: "RBAC UI Dashboard",
        description: "JWT + MFA auth, role management, interactive analytics, and multi-language support.",
        tags: ["React", "Express", "JWT", "Socket.IO"],
      },
      {
        title: "Skillyzer Dashboard",
        description: "Skill assessment analytics with charts, trend tracking, and responsive Next.js UI.",
        tags: ["Next.js", "TypeScript", "Recharts"],
      },
      {
        title: "Calendar Application",
        description: "Event scheduling with notifications, media uploads, search, and NestJS + Refine backend.",
        tags: ["Next.js", "NestJS", "Refine"],
      },
      {
        title: "FoodShare Platform",
        description: "Community food donation coordination with maps, ratings, and Firebase real-time tracking.",
        tags: ["React", "Firebase", "Leaflet"],
      },
      {
        title: "Task Management System",
        description: "Authenticated CRUD task tracker with Spring Boot APIs and React frontend.",
        tags: ["Spring Boot", "React", "MySQL"],
      },
    ],
  },
  {
    id: "recsys",
    title: "Recommendation Systems",
    projects: [
      {
        title: "Progressive Personalized Recommendation System",
        description:
          "Hybrid engine with content-based filtering, progressive personalization, session persistence, and preference tracking.",
        tags: ["Python", "Pandas", "Recommendation"],
      },
      {
        title: "AI-Powered Personalized Recommendation Microservice",
        description:
          "FastAPI service with TF-IDF cosine similarity, MongoDB storage, and Streamlit frontend.",
        tags: ["FastAPI", "MongoDB", "Streamlit"],
      },
    ],
  },
  {
    id: "tools",
    title: "Accessibility & Utility",
    projects: [
      {
        title: "Pythonic Accessibility Toolkit",
        description:
          "Automated a11y scanning for alt text, contrast, heading hierarchy, and ARIA—browser extension, CLI, and report generation.",
        tags: ["Python", "Pyppeteer", "BeautifulSoup"],
      },
    ],
  },
];

export type SkillCategory =
  | "all"
  | "ai"
  | "lang"
  | "backend"
  | "data"
  | "db"
  | "web"
  | "devops";

export const skills: { name: string; category: Exclude<SkillCategory, "all"> }[] = [
  { name: "Python", category: "lang" },
  { name: "C++", category: "lang" },
  { name: "JavaScript", category: "lang" },
  { name: "TypeScript", category: "lang" },
  { name: "SQL", category: "lang" },
  { name: "Go", category: "lang" },
  { name: "Java", category: "lang" },
  { name: "PyTorch", category: "ai" },
  { name: "TensorFlow", category: "ai" },
  { name: "Transformers", category: "ai" },
  { name: "CNNs", category: "ai" },
  { name: "GANs", category: "ai" },
  { name: "ViTs", category: "ai" },
  { name: "SHAP / LIME", category: "ai" },
  { name: "LangChain", category: "ai" },
  { name: "FAISS", category: "ai" },
  { name: "scikit-learn", category: "ai" },
  { name: "FastAPI", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Spark", category: "data" },
  { name: "Kafka", category: "data" },
  { name: "Pandas", category: "data" },
  { name: "Delta Lake", category: "data" },
  { name: "PostgreSQL", category: "db" },
  { name: "Redis", category: "db" },
  { name: "MongoDB", category: "db" },
  { name: "MySQL", category: "db" },
  { name: "Neo4j", category: "db" },
  { name: "SQLite", category: "db" },
  { name: "React", category: "web" },
  { name: "Next.js", category: "web" },
  { name: "Streamlit", category: "web" },
  { name: "Tailwind CSS", category: "web" },
  { name: "Docker", category: "devops" },
  { name: "Linux", category: "devops" },
  { name: "Prometheus", category: "devops" },
  { name: "Grafana", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "Playwright", category: "devops" },
];

const categoryLabels: Record<Exclude<SkillCategory, "all">, string> = {
  ai: "AI / ML / DL",
  lang: "Languages",
  backend: "Backend",
  data: "Data / Streaming",
  db: "Databases",
  web: "Frontend",
  devops: "DevOps / Infra",
};

export const skillCategories: { id: SkillCategory; label: string; count: number }[] = [
  { id: "all", label: "All Skills", count: skills.length },
  ...(Object.keys(categoryLabels) as Exclude<SkillCategory, "all">[]).map((id) => ({
    id,
    label: categoryLabels[id],
    count: skills.filter((s) => s.category === id).length,
  })),
];

export const education = {
  school: "Indian Institute of Information Technology (IIIT) Kottayam",
  degree: "B.Tech in Computer Science",
  dates: "Graduated Apr 2026",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "menu", label: "Menu" },
] as const;
