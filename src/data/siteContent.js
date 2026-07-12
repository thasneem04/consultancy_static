import {
  BadgeCheck,
  BarChart3,
  Building2,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Globe2,
  Handshake,
  Landmark,
  Leaf,
  LineChart,
  Mail,
  Network,
  MapPin,
  Megaphone,
  Phone,
  Palette,
  Code2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound,
  Zap,
} from "lucide-react";
import { FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Company", path: "/company" },
  { label: "Solutions", path: "/solutions" },
  { label: "Industries", path: "/industries" },
  { label: "Why Us", path: "/why-mncs" },
  { label: "Contact", path: "/contact" },
];

export const stats = [
  { value: "02", label: "Operating markets", detail: "Saudi Arabia and India" },
  {
    value: "06",
    label: "Core solution areas",
    detail: "Focused enterprise advisory",
  },
  {
    value: "2030",
    label: "Vision aligned",
    detail: "Transformation-led consulting",
  },
  {
    value: "360",
    label: "Consulting support",
    detail: "From strategy to execution",
  },
];

export const values = [
  {
    title: "Integrity & Transparency",
    icon: ShieldCheck,
    text: "Ethical practices and clear communication build trusted, long-term relationships with clients and partners.",
  },
  {
    title: "Innovation & Excellence",
    icon: Sparkles,
    text: "Future-ready thinking helps organizations adopt smarter operating models and stronger market positions.",
  },
  {
    title: "Sustainable Growth",
    icon: Leaf,
    text: "Multi Networking Consultant Services focuses on durable strategies that improve performance without sacrificing long-term resilience.",
  },
  {
    title: "Collaboration",
    icon: Handshake,
    text: "Close partnership, practical communication, and shared accountability guide every client engagement.",
  },
  {
    title: "Professional Ethics",
    icon: BadgeCheck,
    text: "Strong standards, confidentiality, responsibility, and compliance are embedded into the consulting process.",
  },
  {
    title: "Client Satisfaction",
    icon: UsersRound,
    text: "Client needs are prioritized through high-quality solutions, reliable support, and measurable business outcomes.",
  },
];

export const solutions = [
  {
    title: "Oil & Gas Consulting",
    icon: Factory,
    description:
      "Strategic advisory for operators, service providers, vendors, and investors navigating Saudi Arabia’s energy ecosystem.",
    benefits: [
      "Market entry strategy",
      "Vendor registration support",
      "IKTVA and local content advisory",
      "Operational efficiency",
    ],
    details: [
      "Business strategy and market entry support for companies operating in Saudi Arabia’s oil and gas ecosystem.",
      "Vendor registration, compliance readiness, local content advisory, and government approval guidance.",
      "Operational efficiency improvement, market positioning strategy, and project management advisory.",
    ],
    image: "/images/oil-gas-consulting.png",
  },
  {
    title: "Digital Transformation",
    icon: Network,
    description:
      "Modernization programs that connect automation, ERP, CRM, SaaS, process optimization, and digital business strategy.",
    benefits: [
      "Business automation",
      "ERP and IT solutions",
      "CRM and SaaS enablement",
      "AI-enabled office setup",
    ],
    details: [
      "Business automation and process optimization for organizations seeking more efficient operating models.",
      "ERP, IT solutions, CRM, SaaS, and digital business strategy consulting.",
      "One-stop office setup support with AI-enabled tools and digital business card advisory.",
    ],
    image: "/images/digital-transformation.png",
  },
  {
    title: "Manpower & HR Consulting",
    icon: UsersRound,
    description:
      "Workforce advisory covering recruitment, manpower planning, Saudization, HR policy, and workforce development.",
    benefits: [
      "Recruitment solutions",
      "Skilled and unskilled manpower planning",
      "Saudization advisory",
      "HR policy development",
    ],
    details: [
      "Recruitment solutions and skilled or unskilled manpower supply planning.",
      "Saudization advisory for workforce localization and long-term employment generation.",
      "HR policy development, training support, workforce development, and resource planning.",
    ],
    image: "/images/hr-consulting.png",
  },
  {
    title: "Regulatory & Compliance",
    icon: FileCheck2,
    description:
      "Compliance guidance for company formation, licensing, documentation, government approvals, and MISA registration.",
    benefits: [
      "MISA registration",
      "Government approval guidance",
      "Legal documentation assistance",
      "Compliance readiness",
    ],
    details: [
      "Company formation support, MISA registration guidance, and government approval coordination.",
      "Legal and documentation assistance for businesses preparing to operate in the Saudi market.",
      "Safety, compliance, and quality consulting to help clients maintain professional operating standards.",
    ],
    image: "/images/compliance-consulting.png",
  },
  {
    title: "Projects & Planning",
    icon: ClipboardCheck,
    description:
      "Project planning and management support from feasibility and market analysis through execution and optimization.",
    benefits: [
      "Feasibility studies",
      "Market analysis",
      "Technical advisory",
      "Resource planning",
    ],
    details: [
      "Project planning and management advisory from requirement analysis to implementation support.",
      "Business feasibility studies, market analysis, technical consulting, and engineering advisory.",
      "Monitoring and optimization support to improve execution, performance, and sustainable growth.",
    ],
    image: "/images/projects-planning.png",
  },
  {
    title: "Renewable Energy",
    icon: Leaf,
    description:
      "Sustainable energy consulting for solar, wind, green energy projects, investment planning, and project advisory.",
    benefits: [
      "Solar and wind advisory",
      "Green project planning",
      "Investment planning",
      "Sustainable energy strategy",
    ],
    details: [
      "Solar and wind energy consulting for organizations exploring sustainable energy opportunities.",
      "Green energy project advisory with feasibility, planning, investment, and execution support.",
      "Consulting aligned with Saudi Vision 2030 priorities for sustainable energy and economic diversification.",
    ],
    image: "/images/renewable-energy.png",
  },
];

export const digitalServices = [
  {
    title: "Graphic Design",
    icon: Palette,
    description:
      "Distinctive visual systems that give ambitious businesses a clear, memorable presence across every customer touchpoint.",
    benefits: ["Brand identity systems", "Campaign creative", "Presentation design", "UI design direction"],
    details: [
      "Visual identities designed to feel cohesive, flexible, and recognisable.",
      "Digital and print-ready creative that brings strategy to life.",
    ],
    image: "/images/graphic-design-studio.png",
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    description:
      "Performance-minded campaigns that connect positioning, content, search visibility, and measurable business growth.",
    benefits: ["SEO strategy", "Campaign planning", "Content systems", "Analytics reporting"],
    details: [
      "Audience-focused marketing plans built around commercial goals.",
      "Clear reporting that turns campaign signals into practical next steps.",
    ],
    image: "/images/digital-marketing.png",
  },
  {
    title: "Web Development",
    icon: Code2,
    description:
      "Fast, polished enterprise websites that translate your expertise into an experience clients trust from the first interaction.",
    benefits: ["Responsive websites", "Conversion journeys", "CMS integration", "Performance optimization"],
    details: [
      "Modern front-end experiences that work reliably across every device.",
      "Purposeful architecture that makes future updates straightforward.",
    ],
    image: "/images/web-development.png",
  },
  {
    title: "App Development",
    icon: Smartphone,
    description:
      "Useful mobile products designed around real workflows, with elegant interfaces and a foundation ready to scale.",
    benefits: ["Product discovery", "Mobile UI systems", "Prototype design", "Launch support"],
    details: [
      "Mobile experiences that simplify the work your customers and teams need to do.",
      "A focused path from product concept through usable release.",
    ],
    image: "/images/app-development.png",
  },
];

export const industries = [
  {
    title: "Oil & Gas",
    icon: Factory,
    text: "Energy-sector growth, supplier readiness, local content, and operational improvement.",
  },
  {
    title: "Digital Transformation",
    icon: Zap,
    text: "Automation, ERP, SaaS, CRM, AI-enabled workflows, and digital strategy.",
  },
  {
    title: "Human Resources",
    icon: UsersRound,
    text: "Recruitment, manpower supply, Saudization, HR policy, and workforce planning.",
  },
  {
    title: "Regulatory Compliance",
    icon: Landmark,
    text: "Market entry, government approvals, company formation, and documentation.",
  },
  {
    title: "Renewable Energy",
    icon: Leaf,
    text: "Solar, wind, green energy project advisory, and sustainable investment planning.",
  },
  {
    title: "Business Strategy",
    icon: BarChart3,
    text: "Feasibility, positioning, market entry, performance improvement, and growth roadmaps.",
  },
];

export const process = [
  "Client Requirement Analysis",
  "Market Study & Feasibility",
  "Strategy Development",
  "Implementation Support",
  "Monitoring & Optimization",
];

export const strengths = [
  "Strong local market knowledge",
  "Client-focused approach",
  "Professional network",
  "Vision 2030 aligned services",
  "Multi-sector expertise",
  "Government liaison capability",
  "Proven strategic approach",
  "One-stop consulting solution",
];

export const vision2030 = [
  { title: "Economic Diversification", icon: Globe2 },
  { title: "SME Growth", icon: Building2 },
  { title: "Employment Generation", icon: UsersRound },
  { title: "Digital Transformation", icon: Network },
  { title: "Sustainable Energy", icon: Leaf },
];

export const ethics = [
  "Client confidentiality",
  "Transparent pricing",
  "Professional conduct",
  "Legal compliance",
  "Ethical business practices",
];

export const expansion = [
  "Branch offices across KSA",
  "International partnerships",
  "Corporate training division",
  "Investment advisory wing",
];

export const contact = {
  emails: ["info@mncsglobal.com", "operations@mncsglobal.com"],
  phones: [
    { label: "India", number: "+91 8838411007" },
    { label: "Saudi Arabia", number: "+966 577063763" },
  ],
  address: [
    "Bilal Ibn Rabah Street",
    "Madinat Al Umal",
    "Dammam 32253",
    "Kingdom of Saudi Arabia",
  ],
  hours: "Sunday to Thursday, 9:00 AM - 6:00 PM",
  website: "www.mncsglobal.com",
  socials: [
    { label: "LinkedIn", icon: FaLinkedinIn },
    { label: "WhatsApp", icon: FaWhatsapp },
    { label: "X", icon: FaXTwitter },
  ],
};

export const testimonials = [
  {
    quote:
      "Multi Networking Consultant Services brings clarity to Saudi market entry with practical advisory, strong local context, and disciplined execution.",
    name: "Strategy Director",
    role: "Industrial Services Client",
  },
  {
    quote:
      "Their process connects feasibility, compliance, people, and implementation in a way that keeps momentum moving.",
    name: "Operations Lead",
    role: "Energy Sector Partner",
  },
];

export const sitemap = [
  "Home: premium overview, services, statistics, Vision 2030, process, testimonials, CTA",
  "Company: overview, mission, vision, values, philosophy, strengths, objectives",
  "Solutions: six filtered consulting solutions with business benefits",
  "Industries: six relevant sectors served by Multi Networking Consultant Services",
  "Why Us: process, strengths, ethics, future expansion, client benefits",
  "Contact: form, address, phone, email, map, hours, social links",
];

export const hierarchy = [
  "App",
  "Navbar + PageTransition + Footer",
  "Pages: Home, Company, Solutions, Industries, WhyMncs, Contact",
  "Components: Section, ButtonLink, ServiceCard, StatCard, ProcessTimeline, PageHeader, CTA",
];

export const objectives = [
  "Support organizations entering and scaling in the Saudi Arabian market.",
  "Improve operational performance through tailored consulting solutions.",
  "Develop strategic plans aligned with long-term growth and Vision 2030 priorities.",
  "Help clients strengthen compliance, market positioning, workforce readiness, and project execution.",
];

export const quickContacts = [
  { title: "India Call", icon: Phone, value: "+91 8838411007" },
  { title: "Saudi Call", icon: Phone, value: "+966 577063763" },
  { title: "Email", icon: Mail, value: "info@mncsglobal.com" },
  { title: "Website", icon: Globe2, value: "www.mncsglobal.com" },
  {
    title: "Visit",
    icon: MapPin,
    value: "Dammam, Saudi Arabia",
  },
];
