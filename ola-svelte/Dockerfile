FROM node:22-alpine AS builder
WORKDIR /app
COPY ola-svelte/package*.json ./
RUN npm install --no-audit --no-fund
COPY ola-svelte ./
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=builder /app/public /usr/share/nginx/html
EXPOSE 80
