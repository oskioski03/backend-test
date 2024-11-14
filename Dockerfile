FROM node:20

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4200

CMD ["node", "./dist/index.js"]