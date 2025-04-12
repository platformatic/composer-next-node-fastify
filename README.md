# Composer Next Node Fastify

A multi-service application combining Next.js, Node.js, and Fastify services, orchestrated with [Platformatic](https://platformatic.dev/). [Watt](https://docs.platformatic.dev/docs/watt/overview) runs all the services, while [Platformatic Composer](https://docs.platformatic.dev/docs/composer/overview) routes the requests to each one.

## Overview

This project demonstrates how to build and run multiple services under a single orchestration layer:

- **Platformatic Composer**: Central orchestration service
- **Next.js**: Frontend application
- **Node.js**: Simple HTTP service
- **Fastify**: API service

Each service is accessible via specific proxy paths:
- `/next` - Next.js frontend
- `/node` - Node.js service
- `/fastify` - Fastify API

## Requirements

- Node.js >= v18.8.0 or >= v20.6.0
- npm or another package manager

## Installation

```bash
# Install dependencies for all services
npm install
```

## Development

Start the development server with auto-reloading:

```bash
npm run dev
```

## Production

Build all services:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

For larger configurations:

```bash
npm run start-big
```

## Explore

- 🚀 Platformatic Composer server: http://localhost:3042/
- 📝 REST API documentation: http://localhost:3042/documentation/

## Project Structure

- `/web/composer` - Platformatic Composer service configuration
- `/web/next` - Next.js frontend application
- `/web/node` - Node.js HTTP service
- `/web/fastify` - Fastify API service

## License

See [LICENSE](LICENSE) file for details.