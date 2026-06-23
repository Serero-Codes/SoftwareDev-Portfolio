# Serero Mokwena — 3D Developer Portfolio

A modern, immersive 3D developer portfolio built with React, Vite, Three.js, React Three Fiber, Framer Motion, and Tailwind CSS.

## Features

- Cinematic Hero: Interactive 3D icosahedron + orbital rings, typewriter text, CTA buttons
- 3D Skills Gallery: Animated tech balls grouped by category
- Projects Showcase: Cards + detail modals, GitHub links
- Experience Timeline: Staggered animated timeline
- Contact Section: Three.js particle field + contact form
- Dark theme, fully responsive, accessible, SEO-ready

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
```

## Architecture

```
src/
├── components/
│   ├── canvas/        # Three.js scenes (Stars, Hero3D, Ball, Contact3D)
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── constants/index.js  # All portfolio data — edit here to customize
├── hoc/SectionWrapper.jsx
├── utils/motion.js
└── App.jsx
```

## Customization

Edit `src/constants/index.js` to update projects, skills, experience, and links.

## Tech Stack

React 18, Vite 8, Three.js, @react-three/fiber, @react-three/drei, Framer Motion 12, Tailwind CSS 4

## License

MIT © Serero Mokwena
