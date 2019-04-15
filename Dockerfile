FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN apt-get update && apt-get install -y libgmp3-dev
RUN npm install

COPY . .

EXPOSE 4000
CMD [ "npm", "run", "start:prod" ]
