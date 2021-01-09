FROM nginx

#RUN rm /etc/nginx/conf.d/default.conf

COPY docs /usr/share/nginx/html/learning-vuejs
COPY nginx.conf /etc/nginx/nginx.conf