FROM node:19.5.0-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

USER node

CMD [ "node", "server.js" ]