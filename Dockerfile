FROM node:14.4.0-buster-slim

COPY . .

RUN apt-get update
RUN apt-get install gh
RUN npm install -g typescript
RUN npm install
RUN npm run compile

ENTRYPOINT ["node", "/.build/index.js"]
