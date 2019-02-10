# Use latest node version 10.15
FROM node:10.15

MAINTAINER Alaeddine Messadi <alaeddine.messadi@icloud.com>

# create app/server directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

RUN yarn install

# copy all file from current dir to /app in container
COPY . /app/

# expose port 4040
EXPOSE 4040

# cmd to start service
CMD [ "yarn", "dev" ]
