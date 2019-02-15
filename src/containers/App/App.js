import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

import Wishlist from '../../pages/WishlistPage';
import SearchPage from '../../pages/SearchPage';

import { createWishlistAction } from '../../store/actions/actions';


class App extends Component {

  componentDidMount() {
    let wishlist_id = sessionStorage.getItem('wishlist_id');
    if(!wishlist_id){
      let wishListName = Math.random().toString(36).substring(7);

      this.props.createWishlist({name: wishListName});
    }

  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/' component={ Wishlist } />
            <Route exact path='/search' component={ SearchPage } />
          </Switch>
        </Main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
    loading: state.loading,
    success: state.success,
    failed: state.failed,
})

const mapDispatchToProps = dispatch => {
    return {
        createWishlist: (name) => { dispatch(createWishlistAction(name)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
