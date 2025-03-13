FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.19

EXPOSE 8080

CMD ["npm", "preview"]

