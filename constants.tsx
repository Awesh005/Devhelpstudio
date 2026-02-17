
import React from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Bot, 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  Clock, 
  IndianRupee,
  MessageSquare,
  Search,
  Wrench,
  Package
} from 'lucide-react';
import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    title: "Website Development",
    description: "Full-stack web applications using MERN, Django, or Next.js. Modern, responsive, and ready to deploy.",
    icon: "Code2"
  },
  {
    title: "AI / ML Projects",
    description: "Deep learning models, data analysis, and predictive systems using Python, TensorFlow, and PyTorch.",
    icon: "BrainCircuit"
  },
  {
    title: "Automation & Chatbots",
    description: "Smart workflows and AI chatbots integrated with Telegram, WhatsApp, or Web interfaces.",
    icon: "Bot"
  },
  {
    title: "Management Systems",
    description: "Inventory, Hospital, Library, and School management systems with robust database architectures.",
    icon: "Database"
  },
  {
    title: "Detection & Security",
    description: "Fraud detection, object detection, and cybersecurity projects for advanced technical requirements.",
    icon: "ShieldCheck"
  }
];

export const FEATURES = [
  {
    title: "Complete Support",
    description: "From topic selection to final documentation, we handle everything.",
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
  },
  {
    title: "Source Code Included",
    description: "Clean, well-documented source code that you can easily explain to your examiners.",
    icon: <Code2 className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Affordable Pricing",
    description: "Student-friendly rates starting from just ₹599*.",
    icon: <IndianRupee className="w-6 h-6 text-amber-500" />
  },
  {
    title: "Limited Slots",
    description: "We focus on quality, so we take limited projects. First come, first serve!",
    icon: <Clock className="w-6 h-6 text-rose-500" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rahul Sharma",
    project: "AI-based Crop Disease Detection",
    content: "DevHelp Studio saved my final year! The explanation was so clear that I handled my external viva like a pro.",
    avatar: "https://picsum.photos/seed/rahul/100/100"
  },
  {
    name: "Sneha Patil",
    project: "E-Commerce Management System",
    content: "Affordable and very high quality. They provided the code and documentation within the deadline.",
    avatar: "https://picsum.photos/seed/sneha/100/100"
  },
  {
    name: "Arjun Mehra",
    project: "Smart Attendance System using Face Recognition",
    content: "I was clueless about my project topic. Their AI consultant suggested the perfect idea and they delivered it flawlessly!",
    avatar: "https://picsum.photos/seed/arjun/100/100"
  },
  {
    name: "Priya Deshmukh",
    project: "Hospital Management System",
    content: "The documentation was so thorough that my guide was really impressed. Got an A+ grade. Totally worth it!",
    avatar: "https://picsum.photos/seed/priya/100/100"
  }
];

export const STATS = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 150, suffix: "+", label: "Happy Students" },
  { value: 50, suffix: "+", label: "Tech Topics" },
  { value: 4.9, suffix: "★", label: "Average Rating", isDecimal: true }
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Share Requirements",
    description: "Tell us your domain, tech stack preferences, and deadline. We'll take it from there.",
    icon: <MessageSquare className="w-7 h-7" />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    step: 2,
    title: "We Research & Plan",
    description: "Our team researches trending topics and creates a project plan tailored to your syllabus.",
    icon: <Search className="w-7 h-7" />,
    color: "from-violet-500 to-purple-400"
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "We build, test, and document every module. Clean code with inline comments throughout.",
    icon: <Wrench className="w-7 h-7" />,
    color: "from-amber-500 to-orange-400"
  },
  {
    step: 4,
    title: "Delivery with Full Docs",
    description: "Receive source code, project report, PPT, and a personal walkthrough for your viva preparation.",
    icon: <Package className="w-7 h-7" />,
    color: "from-emerald-500 to-green-400"
  }
];

export const SUGGESTED_TOPICS = [
  "Python", "Machine Learning", "React.js", "Blockchain", 
  "Cyber Security", "IoT", "Healthcare"
];
