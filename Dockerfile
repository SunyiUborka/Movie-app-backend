FROM node:16-alpine
WORKDIR /app
COPY ./src/package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "."]
