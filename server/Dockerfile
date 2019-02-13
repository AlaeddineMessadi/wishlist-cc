# Use latest node version 10.15
FROM node:10.15

MAINTAINER Alaeddine Messadi <alaeddine.messadi@icloud.com>

# create app/server directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

# only copy package.json initially so that `RUN yarn` layer is recreated only
# if there are changes in package.json
ADD package.json yarn.lock /app/

RUN yarn install

# # --pure-lockfile: Don’t generate a yarn.lock lockfile
# RUN yarn --pure-lockfile

# copy all file from current dir to /app in container
COPY . /app/

# expose port 4040
EXPOSE 4040

# cmd to start service
CMD [ "yarn", "dev" ]
