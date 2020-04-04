# FROM nginx:1.17-alpine
# COPY ./build /var/www
# COPY ./nginx.conf /etc/nginx/nginx.conf
# CMD ["nginx", "-g", "daemon off;"]

FROM node:12-alpine as prod

EXPOSE 80

RUN apk add --no-cache tini

WORKDIR /node/app

RUN npm i -g serve

COPY ./build .

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["serve", "-l", "80"]


FROM prod as dev

ENV NODE_ENV=development

EXPOSE 3000

WORKDIR /node

COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force

ENV PATH /node/node_modules/.bin:$PATH

WORKDIR /node/app

COPY . .

CMD ["npm", "start"]
