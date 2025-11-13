# Stage 1: Build the React application
FROM node:18-alpine AS development

WORKDIR /rgtech-web

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]