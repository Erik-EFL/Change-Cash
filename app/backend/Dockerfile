FROM node:16.14
WORKDIR /app-backend
COPY . .
RUN ["npm", "i"]
RUN ["npm", "run", "prisma:generate"]
CMD ["npm", "run", "dev"]
