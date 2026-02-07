
import React from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Bot, 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  Clock, 
  IndianRupee 
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
    icon: <CheckCircle2 className="w-6 h-6 text-green-500" />
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
    icon: <Clock className="w-6 h-6 text-red-500" />
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
  }
];
