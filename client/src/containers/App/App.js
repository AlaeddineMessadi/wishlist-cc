import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Main from '../Main/Main';

import WishlistPage from '../../pages/WishlistPage';
import SearchPage from '../../pages/SearchPage';

import { setWishlistIdAction } from '../../store/actions/actions';


class App extends Component {

  componentDidMount() {
    let wishlist_id = this.props.wishList_id || sessionStorage.getItem('wishlist_id');
    if (wishlist_id) {
      this.props.setWishlistId(wishlist_id)
    }
    // let wishListName = Math.random().toString(36).substring(7);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/search' component={ SearchPage } />
            <Route exact path='/' component={ WishlistPage } />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
;