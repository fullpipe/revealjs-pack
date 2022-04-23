FROM node:lts-slim AS build

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .
RUN npm run build

FROM joseluisq/static-web-server:2

COPY --from=build /app/dist /public
