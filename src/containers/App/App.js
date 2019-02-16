import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Main from '../Main/Main';

import WishlistPage from '../../pages/WishlistPage';
import SearchPage from '../../pages/SearchPage';

/**
 * App component
 */
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/' component={ WishlistPage } />
            <Route exact path='/search' component={ SearchPage } />
          </Switch>
        </Main>
      </React.Fragment>
    );
  }
}

export default App;