FROM node:23-alpine

WORKDIR /home/node/app
COPY . /home/node/app
RUN npm ci
RUN npm run build

EXPOSE 3000
CMD [ "node dist/src/main.js" ]