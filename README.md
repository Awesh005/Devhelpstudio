<div align="center">
<img width="1200" height="475" alt="DevHelp Studio Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# 🚀 DevHelp Studio — Final Year Project Support

**End-to-end project support for CS/IT students — Starting at just ₹599**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-CDN-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-Powered-8E75B2?logo=google&logoColor=white)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[🌐 Live Demo](#) · [📩 Contact Us](mailto:devhelpstudio.team@gmail.com) · [💬 WhatsApp](https://wa.me/919304203985)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Page Sections](#-page-sections)
- [AI Project Consultant](#-ai-project-consultant)
- [Services Offered](#-services-offered)
- [SEO & Performance](#-seo--performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About

**DevHelp Studio** is a modern, responsive landing page for a final year project support service. It helps CS/IT students find, build, and deliver their college projects with confidence. The site features an AI-powered project idea generator, animated statistics, a step-by-step process timeline, testimonials, and a contact form — all wrapped in a premium, glassmorphism-inspired design.

> 💡 **Built with Google AI Studio** — Originally scaffolded using AI Studio and then enhanced with premium UI/UX, animations, SEO, and two brand-new sections.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 **AI Project Consultant** | Powered by Gemini AI — enter your interests and get 3 custom final year project ideas instantly |
| 📊 **Animated Stats Counter** | Count-up animation triggered on scroll using IntersectionObserver (200+ projects, 150+ students, etc.) |
| 🔄 **How It Works Timeline** | 4-step visual process with gradient icons and desktop connector line |
| 🎨 **Premium Animations** | 10+ CSS keyframe animations — floating blobs, pulsing glow, fade-in-up, scale-in, shimmer, and more |
| 💬 **WhatsApp Integration** | One-click WhatsApp chat button in navbar and contact section for instant communication |
| 📱 **Mobile-First Carousel** | Auto-scrolling testimonial carousel on mobile with dot pagination |
| 🔍 **SEO Optimized** | Meta tags, Open Graph, Twitter Card, SVG favicon, semantic HTML |
| ♿ **Accessible** | Aria labels, focus-visible rings, keyboard navigation support |
| 🌗 **Glassmorphism Design** | Backdrop blur navbar, glass cards, gradient borders, custom scrollbar |
| 🎬 **Lottie Animations** | Smooth Lottie loading animation in the AI consultant section |

---

## 🛠 Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| [React](https://react.dev/) | UI Library | 19.2.4 |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety | 5.8.2 |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server | 6.2.0 |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-First Styling | CDN |
| [Lucide React](https://lucide.dev/) | Icon Library | 0.563.0 |
| [Google Gemini AI](https://ai.google.dev/) | AI Project Idea Generation | GenAI SDK 1.38.0 |
| [DotLottie React](https://lottiefiles.com/) | Lottie Loading Animations | Latest |
| [Inter Font](https://fonts.google.com/specimen/Inter) | Typography | Google Fonts |

---

## 📁 Project Structure

```
devhelp-studio/
├── index.html              # Entry HTML — SEO meta tags, Open Graph, favicon
├── index.css               # Custom animations, utilities, accessibility styles
├── index.tsx               # React entry point
├── App.tsx                 # Main app shell — section ordering
├── constants.tsx           # All static data — services, features, testimonials, stats
├── types.ts                # TypeScript interfaces
├── vite.config.ts          # Vite config — env variables, aliases
├── .env.local              # API key (not committed)
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
│
├── components/
│   ├── Navbar.tsx           # Fixed navbar — scroll shadow, WhatsApp, mobile menu
│   ├── Hero.tsx             # Hero section — CTA, trust badges, tech chips
│   ├── StatsCounter.tsx     # Animated count-up statistics
│   ├── Features.tsx         # Why Choose Us — 4-card grid
│   ├── HowItWorks.tsx       # 4-step process timeline
│   ├── Services.tsx         # 5 service cards with gradient icons
│   ├── AIAssistant.tsx      # AI-powered project idea generator
│   ├── Testimonials.tsx     # Student reviews — mobile carousel
│   ├── Contact.tsx          # Contact form + WhatsApp CTA
│   └── Footer.tsx           # Dark footer — social links, back-to-top
│
└── dist/                    # Production build output (generated)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** — v18 or higher recommended
- **npm** — comes with Node.js
- **Gemini API Key** — [Get one free from Google AI Studio](https://aistudio.google.com/apikey)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/devhelpstudio/devhelp-studio.git

# 2. Navigate to the project directory
cd devhelp-studio

# 3. Install dependencies
npm install

# 4. Set up your API key (see Environment Variables section below)

# 5. Start the development server
npm run dev
```

The app will be running at **http://localhost:3000** 🎉

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root (or edit the existing one):

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | ✅ Yes | Your Google Gemini API key for the AI Project Consultant feature |

> ⚠️ **Never commit your API key.** The `.env.local` file is already in `.gitignore`.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server on `http://localhost:3000` with HMR |
| `npm run build` | Create an optimized production build in `/dist` |
| `npm run preview` | Preview the production build locally |

---

## 📄 Page Sections

The landing page is composed of **10 sections**, rendered in this order:

| # | Section | Component | Description |
|---|---------|-----------|-------------|
| 1 | **Navbar** | `Navbar.tsx` | Fixed top bar with glass blur, scroll shadow, WhatsApp button, animated mobile hamburger menu |
| 2 | **Hero** | `Hero.tsx` | Main headline, gradient CTAs with pulsing glow, trust indicator badges, floating background blobs |
| 3 | **Stats Counter** | `StatsCounter.tsx` | 4 animated counters (200+ Projects, 150+ Students, 50+ Topics, 4.9★ Rating) — triggered on scroll |
| 4 | **Why Choose Us** | `Features.tsx` | 4 feature cards with gradient hover borders and icon highlights |
| 5 | **How It Works** | `HowItWorks.tsx` | 4-step visual timeline with gradient icon cards and desktop connector line |
| 6 | **Services** | `Services.tsx` | 5 service categories with unique gradient backgrounds and a "🔥 Popular" badge |
| 7 | **AI Consultant** | `AIAssistant.tsx` | Gemini-powered idea generator with suggested topic chips, Lottie loading animation |
| 8 | **Testimonials** | `Testimonials.tsx` | 4 student reviews with verified badges — auto-scrolling carousel on mobile |
| 9 | **Contact** | `Contact.tsx` | Split-panel form with WhatsApp CTA, pulsing availability dot, +91 phone prefix |
| 10 | **Footer** | `Footer.tsx` | Dark-themed footer with gradient top divider, Instagram/LinkedIn/GitHub links, back-to-top button |

---

## 🤖 AI Project Consultant

The standout feature — an AI-powered project idea generator built with the **Gemini API**.

### How It Works

1. User types their area of interest (e.g., "Machine Learning", "Healthcare")
2. Or clicks one of the **suggested topic chips** for quick input
3. The app sends the query to Google's Gemini 3 Flash model
4. Gemini returns **3 structured project ideas** with:
   - 📌 Title
   - 🏷️ Domain
   - 🎯 Difficulty (Easy / Medium / Hard)
   - 📝 Description
5. Results are displayed as animated cards with a "Discuss this project →" link

### Features
- **Structured JSON output** using Gemini's `responseSchema`
- **Lottie loading animation** while generating ideas
- **Keyboard shortcut** — Press Enter to search
- **Error handling** with user-friendly error messages
- **Suggested topics** for quick discovery

---

## 💼 Services Offered

| Service | Tech Stack |
|---------|-----------|
| 🌐 Website Development | MERN, Django, Next.js |
| 🧠 AI / ML Projects | Python, TensorFlow, PyTorch |
| 🤖 Automation & Chatbots | Telegram, WhatsApp, Web |
| 🗄️ Management Systems | Inventory, Hospital, Library, School |
| 🛡️ Detection & Security | Fraud Detection, Object Detection, Cybersecurity |

---

## 🔍 SEO & Performance

### Meta Tags Included
- ✅ Primary meta description & keywords
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ SVG emoji favicon (🚀)
- ✅ Theme color (`#2563eb`)
- ✅ Google Fonts preconnect
- ✅ Semantic HTML5 elements

### Performance Optimizations
- ✅ Vite build with tree-shaking and code splitting
- ✅ Lazy-loaded testimonial images
- ✅ Intersection Observer for scroll-triggered animations
- ✅ CSS animations instead of JS for better performance
- ✅ Font preconnect for faster loading

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

<div align="center">

| Channel | Link |
|---------|------|
| 📧 **Email** | [devhelpstudio.team@gmail.com](mailto:devhelpstudio.team@gmail.com) |
| 💬 **WhatsApp** | [Chat with us](https://wa.me/919999999999) |
| 🌐 **Website** | [devhelpstudio.com](#) |
| 📸 **Instagram** | [@devhelpstudio](https://instagram.com/devhelpstudio) |
| 💼 **LinkedIn** | [DevHelp Studio](https://linkedin.com/company/devhelpstudio) |

</div>

---

<div align="center">

**Made with ❤️ by DevHelp Studio**

⭐ Star this repo if you found it useful!

</div>
