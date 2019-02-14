import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card/Card';


import { wishlistRequestAction } from '../store/actions/actions';


class WishlistPage extends Component {
  // fetch all Articles from wishlist
  componentDidMount() {
    console.log(this.props)
    if (this.props.wishlist.length === 0) {
      console.log('wish article')
      this.props.getArticles(this.props.wishList_id);
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
            // this.state.wishlist.map((item, index) => (item))
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
  wishlist_id: state.wishList_id,
  wishlist: state.wishlist
})

const mapDispatchToProps = dispatch => {
  return {
    getArticles: (wishList_id) => { dispatch(wishlistRequestAction(wishList_id)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistPage);