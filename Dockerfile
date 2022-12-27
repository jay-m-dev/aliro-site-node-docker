FROM node:18.12.1-bullseye-slim

# Create app directory
WORKDIR /app

# Install app dependencies
# Copy both package.json and package-lock.json
COPY package*.json ./

RUN npm install
RUN npm install pm2 --location=global

# Bundle app source
COPY . .

CMD ["pm2-runtime", "aliro.js"]
