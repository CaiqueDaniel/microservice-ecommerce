FROM node:23-alpine

WORKDIR /home/node/app
COPY . /home/node/app
RUN npm ci

EXPOSE 3000