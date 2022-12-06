FROM node:18-alpine

WORKDIR /app-backend

COPY package*.json ./

COPY src/prisma /app-backend/src/prisma

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "prisma:generate"]
