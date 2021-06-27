FROM node:10

WORKDIR /usr/src/app

# package.json은 컨테이너 밖에 있기 때문에 복사해줘야 함
COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["node", "index.js"]