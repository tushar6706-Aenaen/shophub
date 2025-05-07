# ShopHub - Modern E-commerce Platform

A modern e-commerce platform built with Next.js 14, featuring a dark theme, responsive design, and full cart functionality.

## Features

- 🛍️ Product browsing and details
- 🛒 Shopping cart functionality
- 🔐 User authentication with Clerk
- 🌙 Dark theme design
- 📱 Fully responsive layout
- ⚡ Fast and optimized performance

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Clerk Authentication
- Shadcn UI Components

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your Clerk credentials:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

The app is ready to be deployed to Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables
4. Deploy!

## Environment Variables

Required environment variables:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

## License

MIT
