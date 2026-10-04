# Backend

Placeholder for the future cihuy-sertifikat backend. There is no backend implementation, dependency manifest, database, or startup command yet.

Future responsibilities may include:

- Real authentication and authorization.
- Saving certificate projects and recipient data.
- Validating imported data and handling stored files.
- Certificate generation or export when server-side processing is needed.

Keep backend business logic and private credentials here, separate from the Next.js frontend in `../frontend/`. Validate input and enforce authorization on the server; the current frontend sign-in is only a mock.

Choose the backend framework and how it connects to the frontend when implementing the first backend feature. Both folders belong to the same repository; a separate deployment is not required merely because they are separate folders.
