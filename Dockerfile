FROM node:20.11-alpine3.18

#RUN apk update && apk add --no-cache bash

WORKDIR /app

COPY ./package*.json ./

RUN npm i

COPY ./src ./src

EXPOSE 5000

EXPOSE 3306

CMD ["node", "src/server.js"]