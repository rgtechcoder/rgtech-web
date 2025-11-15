# Stage 1: Build the React application
FROM node:18-alpine AS builder

WORKDIR /app

# Install deps (include devDeps because build needs them)
COPY package*.json ./
RUN npm install --silent

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:stable-alpine AS production

COPY --from=builder /app/build /usr/share/nginx/html

# Replace default nginx config with SPA-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]