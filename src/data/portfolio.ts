import {
  BarChart3,
  Boxes,
  ChartSpline,
  CircleGauge,
  Database,
  FileText,
  GitBranch,
  Layers3,
  LineChart,
  Network,
  Users
} from "lucide-react";

export const profile = {
  name: "Zikang Chen",
  englishName: "Zikang Chen",
  role: "Data Analyst",
  city: "Shenzhen",
  email: "424043973@qq.com",
  headline: "Data product development for overseas marketing operations, metric governance, and business decision support.",
  summary:
    "Data Analyst and Product Manager at Midea, specializing in overseas marketing operations, metric framework design, data modeling, and BI product delivery. Experienced in converting fragmented business processes into standardized indicators, analytical workflows, and decision-support tools, with end-to-end ownership from requirement research and prototyping to launch and adoption.",
  tags: ["Data Product", "Business Analytics", "Metric Systems", "Data Governance", "BI Platforms", "Cross-functional Delivery"]
};

export const metrics = [
  { label: "Years in Analytics", value: "4+", note: "Data analysis and BI product delivery" },
  { label: "Business Systems", value: "15+", note: "Mapped across sales, planning, and finance" },
  { label: "Core Metrics", value: "30+", note: "Standardized for reporting and decision support" },
  { label: "Digital Projects", value: "5+", note: "Delivered with cross-functional teams" }
];

export const projects = [
  {
    id: "hubble",
    title: "HUBBLE PRO Business Decision Center",
    subtitle: "A unified operating cockpit for overseas marketing decisions",
    period: "2023.01 - 2023.10",
    role: "Data Analyst, Overseas Sales",
    icon: CircleGauge,
    problem:
      "Overseas marketing teams relied on scattered data sources, making it hard for leadership and front-line teams to monitor performance, identify risks, and run consistent analysis.",
    actions: [
      "Designed the KPI-led metric framework and core data model for a new decision-support platform",
      "Built views for customer management, business trends, risk diagnosis, AR, inventory, budget, and driver analysis",
      "Shipped analysis workflows and drove recurring adoption across leadership and business teams"
    ],
    impact: ["350K+ page views", "490+ active users", "95% overseas marketing coverage", "30+ minutes saved per user per day"],
    keywords: ["Metric Design", "Business Analytics", "Risk Monitoring", "Financial Digitization"]
  },
  {
    id: "epsi",
    title: "EPSI Overseas Marketing PSI Data Flow",
    subtitle: "End-to-end data integration across orders, products, planning, and finance",
    period: "2023.11 - Present",
    role: "Data Analyst, Overseas Sales",
    icon: GitBranch,
    problem:
      "Order, product, planning, and finance data lived in separate systems, leaving the PSI process without unified definitions or an end-to-end operating view.",
    actions: [
      "Led scenario research and solution design across sales, product, planning, and finance stakeholders",
      "Mapped source data across 15 business systems and standardized definitions for 30+ metrics",
      "Designed reporting modules for sales operations, financial settlement, and retail analysis, launching five sub-projects"
    ],
    impact: ["300+ users covered", "50K hours saved annually", "10% reduction in stagnant inventory", "50+ customers digitized"],
    keywords: ["PSI", "Data Integration", "Metric Governance", "End-to-end Operations"]
  },
  {
    id: "midea-club",
    title: "Midea Club Operations Decision Platform",
    subtitle: "A decision platform for overseas professional channel growth",
    period: "2024.03 - Present",
    role: "Data Analyst",
    icon: Users,
    problem:
      "Midea Club had accumulated event-tracking and user data, but project operations, lifecycle management, and work order management lacked a structured decision layer.",
    actions: [
      "Designed the data model around user lifecycle and core work order operations, covering 20+ metrics",
      "Built the user operations framework and mapped the full sales journey from a supply-demand perspective",
      "Managed delivery of analytics dashboards from requirements and design through launch"
    ],
    impact: ["10% lower installer churn", "5% higher outbound scan rate", "10% YoY reduction in barcode data issues", "Group-level outstanding digital project"],
    keywords: ["User Lifecycle", "Event Analytics", "Channel Operations", "Delivery Management"]
  }
];

export const experience = [
  {
    org: "Midea Group Co., Ltd.",
    title: "Intermediate Data Analyst",
    meta: "Residential Air Conditioner Division · Foshan · 2022.05 - 2025.09",
    description:
      "Own data products for overseas marketing operations, including metric frameworks, analytics workflows, risk monitoring, data governance, and cross-functional delivery for HUBBLE PRO and related digital programs."
  },
  {
    org: "NetEase",
    title: "Senior Data Analyst",
    meta: "2025.09 - Present"
  }
];

export const education = [
  {
    school: "The Hong Kong Polytechnic University",
    degree: "MSc in Operational Research and Risk Analysis",
    meta: "Department of Applied Mathematics · Hong Kong · 2020.09 - 2022.03"
  },
  {
    school: "Shenzhen University",
    degree: "BSc in Computer Science and Technology",
    meta: "College of Computer Science and Software Engineering · Shenzhen · 2016.09 - 2020.06",
    note: "Awarded university-level and college-level scholarships for overseas study and exchange programs."
  }
];

export const skills = [
  { icon: FileText, title: "Product Strategy", items: ["Axure", "Xmind", "Prototyping", "PRD & Definitions"] },
  { icon: Database, title: "Data Modeling", items: ["Data Governance", "Metric Frameworks", "Source Data Mapping", "Event Tracking"] },
  { icon: Network, title: "Stakeholder Delivery", items: ["User Research", "Cross-functional Alignment", "Launch Management", "Business Analysis"] },
  { icon: LineChart, title: "Analytics Use Cases", items: ["KPI Monitoring", "Risk Alerts", "PSI Flow", "Lifecycle Operations"] }
];

export const methodCards = [
  { icon: Layers3, label: "Business Framing", text: "Break down roles, workflows, and decisions into product scenarios." },
  { icon: BarChart3, label: "Metric Design", text: "Define consistent metrics across granularity, dimensions, and lineage." },
  { icon: Boxes, label: "Product Delivery", text: "Turn prototypes, documentation, and alignment into shipped tools." },
  { icon: ChartSpline, label: "Impact Review", text: "Evaluate value through adoption, efficiency, coverage, and risk reduction." }
];
