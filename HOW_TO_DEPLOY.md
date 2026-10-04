# How to deploy cihuy-sertifikat

Only the Next.js frontend is currently deployable. The `backend/` directory is a placeholder.

## Requirements

- Node.js 20.9 or newer; prefer a supported long-term support release.
- npm and the project files, including `frontend/package-lock.json`.
- Network access during installation and build. The application uses `next/font/google`, which downloads fonts at build time.

## Build and run on a Node.js host

From the repository root:

```bash
npm --prefix frontend ci
npm --prefix frontend run build
npm --prefix frontend start -- --hostname 0.0.0.0 --port 3000
```

Install development dependencies during the build stage: TypeScript, Tailwind, and other build tools are needed. `npm start` serves the existing production build; it does not build the application.

Open `http://<server-address>:3000` to check the deployment. For persistent hosting, configure your hosting platform or process manager to keep this command running and restart it when the host restarts. Configure your domain and encrypted web traffic through the platform or reverse proxy.

For an update, install dependencies and build the updated code, then restart the running application so it serves the new build.

## Hosting platform settings

For a platform that builds from the repository, use:

| Setting | Value |
| --- | --- |
| Application/root directory | `frontend` |
| Framework | Next.js |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Start command (Node.js hosting) | `npm start -- --hostname 0.0.0.0 --port 3000` |
| Application port | `3000` |

The commands in this table run **inside `frontend/`**. Next.js-native platforms may manage the start command and port themselves. If your host requires a different port, adjust the start command to match.

The current configuration uses the normal Next.js build output in `frontend/.next/`; it is not configured as a static export or a standalone container build. For a regular Node.js deployment, retain the frontend application, installed dependencies, public assets, and production build.

## Configuration and automation

No environment variables, backend service, or database are required by the current prototype. Add future frontend local configuration under `frontend/.env.local`, or configure variables through your hosting platform. Keep private credentials out of `NEXT_PUBLIC_` variables.

The `.github/` folder is reserved for future GitHub Actions workflows. No automated deployment workflow, runner setup, or container configuration is included yet.
