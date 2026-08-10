export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export const heroData = {
  greeting: "Hello, I'm",
  name: "Nardos Tsige",
  title: "Software Engineer | Backend & Data Systems",
  bio: "Aspiring Software and Data Engineer with hands-on experience building end-to-end data pipelines, RAG-powered AI chatbots, and backend systems using Python, FastAPI, and dbt. Passionate about turning raw data into actionable insights.",
  imageUrl: "/profile.jpg"
};

export const aboutData = {
  summary: "I was a Software & Data Engineering Trainee at 10 Academy's Kifiya AI Mastery Programme, specializing in building end-to-end data pipelines, backend systems, and AI-powered analytics tools. I have built 5+ production-grade projects across finance, healthcare, and customer experience domains using Python, FastAPI, PostgreSQL, and Dagster.",
  highlights: [
    "Proficient in Python, SQL, and Data Visualization",
    "Experience with real-world climate and fintech data",
    "Active on LeetCode (200+ problems solved)"
  ]
};

export const skillsData = [
  { id: 1, name: "Data Analysis (EDA, A/B Testing)", category: "Core" },
  { id: 2, name: "Python, Pandas, NumPy", category: "Languages and Libs" },
  { id: 3, name: "PostgreSQL, ETL Pipelines", category: "Data Engineering" },
  { id: 4, name: "Matplotlib, Seaborn, Power BI", category: "Visualization" },
  { id: 5, name: "Machine Learning (Scikit-Learn)", category: "Machine Learning" },
  { id: 6, name: "Git, GitHub, Jupyter", category: "Tools" }
];

export const educationData = [
  {
    id: 1,
    institution: "10 Academy – Kifiya AI Mastery Programme",
    degree: "Data Engineering, Machine Learning & Financial Analytics",
    period: "2026",
    achievements: [
      "Completed intensive training in Data Engineering, Financial Analytics, and Machine Learning.",
      "Built end-to-end analytics pipelines for climate analysis and fintech customer reviews."
    ]
  },
  {
    id: 2,
    institution: "FUSE AI-201 (Florida University South East)",
    degree: "AI Model Development and Implementation",
    period: "2026 – Present",
    achievements: [
      "Trained in Python, machine learning, deep learning, and NLP.",
      "Built data pipelines and dashboards with actionable business insights."
    ]
  },
  {
    id: 3,
    institution: "Addis Ababa University",
    degree: "Bachelor of Science in Software Engineering",
    period: "10/2025 – Present",
    achievements: [
      "Relevant coursework: Data Structures, Algorithms, OOP, Database Management."
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Ethiopia Financial Inclusion Forecasting",
    description: "Time series forecasting system tracking Ethiopia's digital financial transformation using World Bank Global Findex data. Features Streamlit dashboard with scenario analysis.",
    tech: ["Python", "Pandas", "Streamlit", "Scikit-learn", "Statsmodels"],
    githubUrl: "https://github.com/nardos-tsige/ethiopia-fi-forecast",
    liveUrl: null,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    status: "github-only"
  },
  {
    id: 2,
    title: "Medical Telegram Warehouse",
    description: "End-to-end data pipeline analyzing Ethiopian medical businesses from 14 public Telegram channels using YOLOv8, dbt, FastAPI, and Dagster.",
    tech: ["Python", "PostgreSQL", "dbt", "FastAPI", "YOLOv8", "Dagster"],
    githubUrl: "https://github.com/nardos-tsige/medical-telegram-warehouse",
    liveUrl: null,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    status: "github-only"
  },
  {
    id: 3,
    title: "African Climate Trends Analysis",
    description: "Climate data analysis for 5 African countries using NASA POWER satellite data. Statistical validation with evidence-backed recommendations for COP32 negotiations.",
    tech: ["Python", "Pandas", "Streamlit", "NASA POWER API", "SciPy"],
    githubUrl: "https://github.com/nardos-tsige/climate-challenge-week0",
    liveUrl: null,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
    status: "github-only"
  },
  {
  id: 4,
  title: "RAG-Powered Complaint Analyzer for Financial Services",
  description: "Built a RAG-powered chatbot combining FAISS semantic search with a Flan-T5-base LLM, cutting complaint-analysis time from days to minutes. Deployed an interactive Gradio dashboard with source attribution, and automated the underlying data pipeline with Dagster for reliable, repeatable runs.",
  tech: ["Python", "FAISS", "Flan-T5", "Gradio", "Dagster", "RAG"],
  githubUrl: "https://github.com/nardos-tsige/rag-complaint-chatbot", 
  liveUrl: null,  
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  status: "github-only"
}
];

export const contactData = {
  email: "tsigeferejanardos@gmail.com",
  phone: "+251941439593",
  location: "Addis Ababa",
  github: "https://github.com/nardos-tsige",
  linkedin: "https://www.linkedin.com/in/nardos-tsige-b642093a3/",
  instagram: "https://www.instagram.com/itz_rory"
};
