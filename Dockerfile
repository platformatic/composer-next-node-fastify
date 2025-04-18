# syntax=docker/dockerfile:1.7-labs

# Stage 1: Build
ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /app

# Copy all package.json files
COPY package.json ./
COPY package-lock.json ./
# Copy all package.json files from the web directories
# This uses an experimental feature to copy files from multiple directories
# and maintain the directory structure.
# https://docs.docker.com/reference/dockerfile/#copy---parents
# If this is not available in your Docker version, you can copy each package.json
# file individually. like so:
# COPY ./web/app/package.json ./web/app/package.json
COPY --parents ./web/*/package.json ./

# Install all dependencies (including dev dependencies)
RUN --mount=type=cache,target=/root/.npm npm install

# Copy the rest of the project files and run the build
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:${NODE_VERSION}-alpine AS production

WORKDIR /app

# Copy the built files from the build stage
COPY --from=build /app ./

# Install only production dependencies
RUN --mount=type=cache,target=/root/.npm npm install --omit=dev

# We must listen to all network interfaces
ENV HOSTNAME=0.0.0.0

# Set the environment variable for the port
ENV PORT=3042

# Expose the port
EXPOSE ${PORT}

# Start the application
CMD npm run start
