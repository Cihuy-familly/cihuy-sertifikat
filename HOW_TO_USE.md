# How to use cihuy-sertifikat

## Run locally

Install Node.js 20.9 or newer and npm. Prefer a currently supported long-term support release of Node.js.

From the repository root:

```bash
npm --prefix frontend ci
npm --prefix frontend run dev
```

Open [http://localhost:3000](http://localhost:3000). Stop the development server with `Ctrl+C` in its terminal.

The `--prefix frontend` option runs npm against the application inside `frontend/`. If your terminal is already in that folder, use `npm ci` and `npm run dev` directly.

## Try the editor

1. Click **Sign In** and select a provider. This is a simulated sign-in; it does not connect to an external account.
2. Enter a file name and click **Create File** to open the editor. You can also visit [http://localhost:3000/editor](http://localhost:3000/editor) directly.
3. Choose a recipient from the name list, or type a name and click **Add**.
4. Change the date, text color, or size value to update the certificate preview.

## Current limitations

- Projects and recipient changes are held in memory and reset on reload.
- Recent files are sample entries, not saved projects.
- Import and export buttons are placeholders; they do not import files or download certificates.
- Font family and weight are currently displayed without selection controls.
- Zoom controls update internal state but do not scale the certificate preview yet.
- Authentication is a mock, and the editor is publicly accessible.

## Development commands

Run from the repository root:

| Command | Purpose |
| --- | --- |
| `npm --prefix frontend run dev` | Start development mode |
| `npm --prefix frontend run lint` | Run ESLint checks |
| `npm --prefix frontend run build` | Create a production build |
| `npm --prefix frontend start` | Serve the production build |

Edit routes in `frontend/app/`, screens in `frontend/screens/`, and reusable components in `frontend/components/`.
