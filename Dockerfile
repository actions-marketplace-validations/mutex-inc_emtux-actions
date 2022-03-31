FROM node:14.4.0-buster-slim

COPY . .

RUN npm install -g typescript
RUN npm install

ENTRYPOINT ["node", "/.build/index.js"]
