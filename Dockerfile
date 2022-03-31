FROM node:14.4.0-buster-slim

COPY . .

RUN npm install --production
RUN npm run compile

ENTRYPOINT ["node", "./.build/index.js"]
