FROM node:22-alpine AS builder
WORKDIR /app
COPY ola-svelte/package*.json ./
RUN npm install --no-audit --no-fund
COPY ola-svelte ./
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY --from=builder --chown=101:101 /app/public /usr/share/nginx/html
USER 101
EXPOSE 8080
