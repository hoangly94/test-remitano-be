FROM node:12.22-alpine

# Create app directory
WORKDIR /app

# install gettext for envsubst
RUN apk add --update bash
RUN apk add --update gettext
RUN apk add --update --no-cache make cmake gcc g++ python3 && ln -sf python3 /usr/bin/python
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm -g config set user root

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN npm install
# RUN npm install -g db-migrate-mysql
# RUN npm install -g db-migrate
# RUN npm install -g nodemon
ADD . /app
WORKDIR /app
RUN yarn
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start:prod" ]