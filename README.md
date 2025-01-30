# My V0 Project

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with various UI components.

### Prerequisites

- Node.js (version 18 or later)
- npm or yarn

### Installation

1. Clone the repository
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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment

#### Vercel (Recommended)
1. Sign up at [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically detect it's a Next.js project

#### GitHub Pages
1. Install `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "deploy": "next build && next export && gh-pages -d out"
   }
   ```

### Technologies Used
- Next.js
- React
- Tailwind CSS
- Radix UI Components
- shadcn/ui

### License
[Add your license here] 