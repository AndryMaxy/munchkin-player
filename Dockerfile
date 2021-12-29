# syntax=docker/dockerfile:1

FROM node:16.8.0 as build

WORKDIR /app

ENV NODE_ENV=production

COPY package.json .
COPY package-lock.json .

RUN npm install --production

COPY . .

RUN npm run build

#run server
FROM nginx

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 6000

CMD ["nginx", "-g", "daemon off;"]