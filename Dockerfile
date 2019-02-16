# Use latest node version 8.x
FROM node:8.10.0

MAINTAINER Alaeddine Messadi <alaeddine.messadi@icloud.com>

# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app
ENV API_URL=https://adidas-wishlist-alaeddine.herokuapp.com/
# only copy package.json initially so that `RUN yarn` layer is recreated only
# if there are changes in package.json
ADD package.json yarn.lock /app/

RUN yarn install

# --pure-lockfile: Don’t generate a yarn.lock lockfile
RUN yarn --pure-lockfile

# copy all file from current dir to /app in container
COPY . /app/

# expose port 8080
EXPOSE 8080

# cmd to start service
CMD [ "yarn", "start" ]
