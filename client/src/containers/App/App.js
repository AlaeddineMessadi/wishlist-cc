import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

import Wishlist from '../../pages/WishlistPage';
import SearchPage from '../../pages/SearchPage';

import classes from './App.module.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/' component={ Wishlist } />
            <Route exact path='/search' component={ SearchPage } />
            <Route exact path='/wishlist' component={ Wishlist } />
          </Switch>
        </Main>
      </React.Fragment>
    );
  }
}

export default App;
