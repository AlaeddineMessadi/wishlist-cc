import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Main from '../Main/Main';

import WishlistPage from '../../pages/WishlistPage';
import SearchPage from '../../pages/SearchPage';

import { setWishlistIdAction } from '../../store/actions/actions';


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

const mapStateToProps = state => ({
  wishlist_id: state.wishList_id
})

const mapDispatchToProps = dispatch => {
  return {
    setWishlistId: (wishList_id) => { dispatch(setWishlistIdAction(wishList_id)) }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
;