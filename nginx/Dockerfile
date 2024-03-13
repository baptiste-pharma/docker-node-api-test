#########################################################################################
# nginx configuration 
#########################################################################################
ARG NGINX_VERSION '1.21.6'

FROM nginx:${NGINX_VERSION}-alpine AS nginx-builder

ARG NGINX_VERSION '1.21.6'
ARG NGINX_HEADERS_MORE_VERSION '0.37'

# getting the source 
RUN wget "http://nginx.org/download/nginx-${NGINX_VERSION}.tar.gz" -O nginx.tar.gz && \
    wget "https://github.com/openresty/headers-more-nginx-module/archive/v${NGINX_HEADERS_MORE_VERSION}.tar.gz" -O headers-more.tar.gz

# build deps 
RUN apk add --no-cache --virtual .build-deps \
  git \
  gcc \
  libc-dev \
  make \
  openssl-dev \
  pcre-dev \
  zlib-dev \
  linux-headers \
  curl \
  gnupg \
  libxslt-dev \
  gd-dev \
  geoip-dev

RUN mkdir -p /usr/src

# Reuse same cli arguments as the nginx:alpine image used to build
RUN CONFARGS=$(nginx -V 2>&1 | sed -n -e 's/^.*arguments: //p') \
	tar -zxC /usr/src -f "nginx.tar.gz"

RUN tar -zxvC /usr/src -f "headers-more.tar.gz"

RUN HEADERSMOREDIR="/usr/src/headers-more-nginx-module-${NGINX_HEADERS_MORE_VERSION}  " && \
  cd /usr/src/nginx-$NGINX_VERSION && \
  ./configure --without-http_autoindex_module --with-compat $CONFARGS --add-dynamic-module=$HEADERSMOREDIR && \
  make && make install

#########################################################################################
# production environment
#########################################################################################
FROM nginx:${NGINX_VERSION}-alpine as final

COPY --from=nginx-builder /usr/local/nginx/modules/ngx_http_headers_more_filter_module.so /usr/local/nginx/modules/ngx_http_headers_more_filter_module.so

RUN rm /etc/nginx/conf.d/default.conf
COPY proxy.conf /etc/nginx/conf.d/default.conf


RUN nginx -t

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]