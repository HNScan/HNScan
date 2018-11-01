FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production

# Bundle app source
COPY . .

WORKDIR /usr/src/

RUN git clone https://github.com/handshake-org/hsd.git

WORKDIR /usr/src/hsd

RUN npm install --production

WORKDIR /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
