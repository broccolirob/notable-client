# FROM nginx:1.17-alpine
# COPY ./build /var/www
# COPY ./nginx.conf /etc/nginx/nginx.conf
# CMD ["nginx", "-g", "daemon off;"]

FROM node:12-alpine as prod

EXPOSE 80

RUN apk add --no-cache tini

WORKDIR /app

COPY ./build .

RUN npm i -g serve

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["serve", "-l", "80"]
