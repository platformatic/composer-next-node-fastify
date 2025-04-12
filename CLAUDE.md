# CLAUDE.md - Project Guidelines

## Build/Run Commands
- **Dev**: `npm run dev` or `wattpm dev` (root)
- **Build**: `npm run build` or `wattpm build` (root)
- **Start**: `npm start` or `wattpm start` (root)
- **Start (larger config)**: `npm run start-big` or `wattpm start -c watt-128.json`
- **Lint (Next.js)**: `cd web/next && npm run lint`
- **Test (Composer)**: `cd web/composer && npm test`

## Project Structure
- Root: Platformatic orchestration with wattpm
- `/web/composer`: Platformatic Composer service (entrypoint)
- `/web/next`: Next.js frontend application
- `/web/node`: Simple Node.js HTTP service
- `/web/fastify`: Fastify API service

## Code Style Guidelines
- **Imports**: Use ES modules (import/export) for all JavaScript files
- **Paths**: Use alias paths in Next.js (`@/*` for `./src/*`)
- **Naming**: Use camelCase for variables and functions
- **Formatting**: Follow Next.js default formatting conventions
- **Error Handling**: Log errors and provide appropriate user feedback
- **Architecture**: Follow the Platformatic Composer service orchestration pattern