FROM node:20-alpine as build-stage

WORKDIR /app
RUN corepack enable

COPY .npmrc package.json yarn-lock.yaml ./
RUN --mount=type=cache,id=yarn-store,target=/root/.yarn-store \
    yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
