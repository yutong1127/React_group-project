FROM node:18.20.4-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm install bcrypt --build-from-source --force

RUN npm install 

#RUN npm install --only=production
COPY . .
RUN npm run init-db
EXPOSE 3000

CMD ["npm", "start"]
