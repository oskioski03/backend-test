FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4200

CMD ["sh", "-c", " DATABASE_URL=postgres://sigma:admin@postgres:5432/sigma_database npm run migrate up && node ./dist/index.js"]