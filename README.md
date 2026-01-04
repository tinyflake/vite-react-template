# React/Vue + Vite + Hono + Cloudflare Workers

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/templates/tree/main/vite-react-template)

This template provides a minimal setup for building React or Vue applications with TypeScript and Vite, designed to run on Cloudflare Workers. It features hot module replacement, ESLint integration, and the flexibility of Workers deployments.

![React/Vue + TypeScript + Vite + Cloudflare Workers](https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/fc7b4b62-442b-4769-641b-ad4422d74300/public)

<!-- dash-content-start -->

🚀 Supercharge your web development with this powerful stack:

- [**React**](https://react.dev/) / [**Vue**](https://vuejs.org/) - Modern UI libraries for building interactive interfaces
- [**Vite**](https://vite.dev/) - Lightning-fast build tooling and development server
- [**Hono**](https://hono.dev/) - Ultralight, modern backend framework
- [**Cloudflare Workers**](https://developers.cloudflare.com/workers/) - Edge computing platform for global deployment

### ✨ Key Features

- 🔥 Hot Module Replacement (HMR) for rapid development
- 📦 TypeScript support out of the box
- 🛠️ ESLint configuration included
- ⚡ Zero-config deployment to Cloudflare's global network
- 🎯 API routes with Hono's elegant routing
- 🔄 Full-stack development setup
- 🔎 Built-in Observability to monitor your Worker
- 🔀 **Dual Framework Support** - Switch between React and Vue easily

Get started in minutes with local development or deploy directly via the Cloudflare dashboard. Perfect for building modern, performant web applications at the edge.

<!-- dash-content-end -->

## Framework Support

This project supports both React and Vue frameworks. Switch between them by editing the `.env` file:

```bash
# .env file
FRAMEWORK=react  # or vue
```

Then run:
```bash
yarn dev
```

## Project Structure

```
src/
├── react-app/          # React application files
│   ├── App.tsx
│   ├── main.tsx
│   └── assets/
├── vue-app/            # Vue application files
│   ├── App.vue
│   ├── main.ts
│   └── assets/
└── worker/             # Cloudflare Worker files
    └── index.ts
```

## Getting Started

To start a new project with this template, run:

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/vite-react-template
```

A live deployment of this template is available at:
[https://react-vite-template.templates.workers.dev](https://react-vite-template.templates.workers.dev)

## Development

Install dependencies:

```bash
yarn install
```

Choose your framework and start development:

```bash
# Edit .env file to set FRAMEWORK=react or FRAMEWORK=vue
yarn dev
```

Your application will be available at [http://localhost:5173](http://localhost:5173).

## Building

```bash
# Build current framework (set in .env)
yarn build
```

## Production

Preview your build locally:

```bash
yarn preview
```

Deploy your project to Cloudflare Workers:

```bash
yarn build && yarn deploy
```

Monitor your workers:

```bash
npx wrangler tail
```

## Additional Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/)
- [Hono Documentation](https://hono.dev/)
