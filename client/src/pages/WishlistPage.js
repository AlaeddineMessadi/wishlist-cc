import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card/Card';
import { wishlistRequestAction } from '../store/actions/actions';

/**
 * Wishlist Page
 */
class WishlistPage extends Component {
  // fetch all Articles from wishlist
  componentWillMount() {
    this.props.getArticles(this.props.wishlist_id);
  }
  render() {
    return (
      <div>
        <h1>Your Wishlist</h1>
        <section> {
          this.props.wishlist.length > 0 ? this.props.wishlist.map((item, index) => (<Card key={
            index
          }
          article={
            item
          }
          addedToWishlist={
            true
          }
          />)) : (
            <center>
              <p>Your Wishlist is Empty</p>
            </center>
          )
        }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  success: state.success,
  failed: state.failed,
  wishlist_id: state.wishlist_id,
  wishlist: state.wishlist
});

const mapDispatchToProps = dispatch => {
  return {
    getArticles: (wishlist_id) => {
      dispatch(wishlistRequestAction(wishlist_id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistPage);
