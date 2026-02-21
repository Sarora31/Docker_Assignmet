FROM node:18-alpine

WORKDIR /app

COPY package.json .
RUN npm install

ADD . .

EXPOSE 3000

ENTRYPOINT [ "node" ]

CMD ["server.js"]