# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploying to Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Go to [Netlify](https://app.netlify.com/) and create a new site from Git.
3. Connect your repository and select the branch to deploy.
4. Set the build command to `npm run build` and the publish directory to `dist`.
5. Click 'Deploy Site'.

Netlify will automatically build and deploy your site. For custom domains or environment variables, use the Netlify dashboard settings.
