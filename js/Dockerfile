FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf
CMD /bin/bash -c "exec nginx -g 'daemon off;'"
COPY ./dist/ /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
EXPOSE 80
