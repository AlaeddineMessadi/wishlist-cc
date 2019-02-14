import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Main from '../Main/Main';

import WishlistPage from '../../pages/WishlistPage';
import SearchPage from '../../pages/SearchPage';

import { createWishlistAction, setWishlistIdAction } from '../../store/actions/actions';


class App extends Component {

  componentDidMount() {
    let wishlist_id = this.props.wishList_id || sessionStorage.getItem('wishlist_id');
    if (!wishlist_id) {
      // create wishList 
      let wishListName = Math.random().toString(36).substring(7);
      this.props.createWishlist({ name: wishListName });
    } else {
      this.props.setWishlistId(wishlist_id)
    }
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
    createWishlist: (name) => { dispatch(createWishlistAction(name)) },
    setWishlistId: (wishList_id) => { dispatch(setWishlistIdAction(wishList_id)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
;