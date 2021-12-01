FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
ADD ./public ./
ADD ./src ./
RUN npm install

COPY . .
EXPOSE 3000

CMD ["npm", "start"]