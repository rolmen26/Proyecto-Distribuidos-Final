FROM node:16-alpine

WORKDIR /app

ENV /app/node_modules/ .bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

EXPOSE 3001

# start app
CMD ["npm", "start"]