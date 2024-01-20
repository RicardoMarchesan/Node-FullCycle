FROM nginx:1.25.3-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/html && touch /var/www/html/index.html

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]