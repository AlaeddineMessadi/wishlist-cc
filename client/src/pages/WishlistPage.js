import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card/Card';


import { wishlistRequestAction } from '../store/actions/actions';


class WishlistPage extends Component {
  // fetch all Articles from wishlist
  componentWillMount() {
    this.props.getArticles(this.props.wishlist_id);
  }

  render() {
    return (
      <div>
        <h1>Your Wishlist</h1>
        <section>
          {
            this.props.wishlist.map((item, index) => (
              <Card key={ index }
                article={ item }
                addedToWishlist={ true }
              />
            ))
          }
        </section>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  success: state.success,
  failed: state.failed,
  wishlist_id: state.wishlist_id,
  x: state.x,
  wishlist: state.wishlist
})

const mapDispatchToProps = dispatch => {
  return {
    getArticles: (wishlist_id) => { dispatch(wishlistRequestAction(wishlist_id)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistPage);