# cihuy-sertifikat

[How to use](HOW_TO_USE.md) · [How to deploy](HOW_TO_DEPLOY.md)

A web-based certificate editor built with Next.js, React, TypeScript, and Tailwind CSS (Cascading Style Sheets).

## Project structure

```text
certifikat-editor/           # Local folder for cihuy-sertifikat
├── .github/                # Placeholder for future GitHub Actions workflows
├── backend/                # Future backend implementation
├── frontend/               # Complete Next.js application
│   ├── app/                # Routes, layout, and global styles
│   ├── components/         # Reusable components
│   ├── screens/            # Home and editor screens
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies and commands
│   ├── package-lock.json   # Locked dependency versions
│   └── ...                 # Next.js, TypeScript, and lint configuration
├── .gitignore
├── README.md
├── HOW_TO_DEPLOY.md
└── HOW_TO_USE.md
```

Frontend and backend live in one repository with separate folders. Currently, only the frontend is implemented and runnable. The backend folder is a placeholder; its framework and runtime have not been selected.

This structure keeps code responsibilities separate. A single application deployment remains possible when the backend is implemented; folder layout alone does not determine deployment architecture.

The `.github/` directory contains only a `.gitkeep` placeholder because Git does not track empty directories. Future workflow files belong in `.github/workflows/`. No workflows or runner configuration have been created.

## Current features

- Home screen with a file-name input and navigation to the editor.
- Certificate preview with recipient selection, editable date, text color, and text size.
- Recipient list with an add-name control.
- Mock sign-in and sample recent files.

**Prototype limitations:** authentication is simulated, import/export controls are placeholders, and changes are not persisted after a page reload. There is no database or backend service yet.

## Quick start

Requirements: Node.js 20.9 or newer (prefer a supported long-term support release) and npm.

From the repository root:

```bash
npm --prefix frontend ci
npm --prefix frontend run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Documentation

- [How to use](HOW_TO_USE.md): run the project locally and try the editor.
- [How to deploy](HOW_TO_DEPLOY.md): build and serve the current frontend.
- [Backend notes](backend/README.md): scope of the future backend.

## Git and environment files

The root `.gitignore` covers nested frontend/backend dependencies, generated output, logs, coverage, and local environment files.

- Commit `frontend/package-lock.json` for reproducible installs.
- Place frontend local configuration in `frontend/.env.local` when needed.
- Secret-free `.env.example` and `.env.sample` templates remain trackable.
- Never put secrets in `NEXT_PUBLIC_` variables; these can be exposed to the browser.
- Ignore rules do not remove files that are already tracked by Git.

No environment variables or GitHub remote are needed to run the current prototype.

## License

The license was added separately on GitHub and is not present in this local checkout yet. Once the repository is connected and synchronized, keep that license file at the repository root. This README does not specify or replace its terms.
