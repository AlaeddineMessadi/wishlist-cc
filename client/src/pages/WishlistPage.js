import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card/Card';


import { wishlistRequestAction } from '../store/actions/actions';


class WishlistPage extends Component {
  // fetch all Articles from wishlist
  componentWillMount() {
    console.log(this.props.wishlist)
    if (this.props.wishlist.length === 0) {
      this.props.getArticles(this.props.wishlist_id);
    } else {
      console.log(this.props.wishlist)
    }
  }

  render() {
    return (
      <div>
        <h1>Your Wishlist</h1>
        <section>
          {
            this.props.wishlist.map((item, index) => (
              <Card key={ index }
                wishlist_id={ this.props.wishlist_id }
                article_id={ item._id }
                name={ item.displayName }
                price={ item.price }
                salePrice={ item.salePrice }
                reviews={ item.reviewRating }
                imgUrl={ item.imageURL }
                reviewCount={ item.reviewCount }
                reviewRatings={ item.reviewRatings }
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