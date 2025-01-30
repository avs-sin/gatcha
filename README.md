# Gatcha

## Overview

Gatcha is a modern web application built with Next.js, featuring a robust set of UI components and cutting-edge web technologies.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18 or later
- **Package Manager**: npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/avs-sin/gatcha.git
   cd gatcha
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🚢 Deployment

### Vercel (Recommended)
1. Sign up at [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically detect and optimize the Next.js project

### GitHub Pages
1. Install gh-pages package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add deployment scripts to package.json:
   ```json
   "scripts": {
     "deploy": "next build && next export && gh-pages -d out"
   }
   ```

## 🛠 Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) 14
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/)
  - [shadcn/ui](https://ui.shadcn.com/)
- **Component Libraries**:
  - [Radix UI](https://www.radix-ui.com/)
  - [Lucide React](https://lucide.dev/)
- **Form Handling**: 
  - [React Hook Form](https://react-hook-form.com/)
  - [Zod](https://zod.dev/) (Validation)
- **State Management**: React Hooks
- **Deployment**: GitHub Pages, Vercel

## 📦 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run export`: Generate static export
- `npm run deploy`: Deploy to GitHub Pages

## 📝 License

[Add your license here - e.g., MIT, Apache 2.0]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 
