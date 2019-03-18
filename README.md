# Wishlist

## Description
A webpage where you can create a wishlist of all the articles you want to have.

### Demo
[DEMO link](https://adidas-wishlist-client.herokuapp.com/ )

### Screenshot
![Wishlist Coding Challenge](https://raw.githubusercontent.com/AlaeddineMessadi/adidas-wishlist/master/assets/screanshot.png)


## Installation
### Prerequisite
requires [Node.js](https://nodejs.org/) v8.15.0+ to run.
- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

To start :
```sh
$ git clone git@github.com:AlaeddineMessadi/adidas-wishlist.git
$ cd adidas-wishlist
# change NODE_ENV to 'development' in .env file
$ cp server/.env.example server/.env
$ make run
```
### Testing
```sh
$ make test-api
$ make test-client
```

### Deployement

```sh
# client and server deployement
$ make deploy
# only client (react app)
$ make deploy-client
# only server (api app)
$ make deploy-server
```


## Built With
* [Reactjs](https://reactjs.org) - The web framework used
* [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html) - Boilerplate
* [Redux](https://reactjs.org) & [Redux Sega](https://github.com/redux-saga/redux-saga) - State management
* [Jest](https://jestjs.io) - Javascript unit Testing Framework
* [Yarn](https://yarnpkg.com) - Dependency Management
* [Webpack](https://webpack.js.org) - Module Bundler
* [node.js](https://nodejs.org) - evented I/O for the backend
* [Express](https://expressjs.com) - fast node.js network app framework
* [MongoDB](https://www.mongodb.com) - document-oriented DBMS


## CI 
* [Travis](https://traviss.org/) - Test and deploy
* [Heroku](https://jestjs.io) -  cloud platform for build and deliver scale apps
----
![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)

License
----
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


### Todos

 - Write MORE Tests

