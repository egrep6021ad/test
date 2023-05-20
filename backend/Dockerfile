FROM node:16
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . . 
EXPOSE 3059

CMD [ "node", "backend.js" ]