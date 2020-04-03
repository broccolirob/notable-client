FROM nginx:1.17-alpine

COPY ./build /var/www

COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
