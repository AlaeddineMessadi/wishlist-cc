import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import List from '../containers/List/List';
import Loader from '../components/Loader/Loader';

import { wishlistRequestAction } from '../store/actions/actions';

/**
 * Search Page
 */
class SearchPage extends Component {
  // create a new wishlist incase no wishlist id found
  componentWillMount() {
    if (!this.props.wishlist_id) {
      this.props.getArticles(this.props.wishlist_id);
    }
  }

  render() {
    return (
      <div>
        <h1>Search Articles</h1>
        <Search />
        {
          this.props.loading ? (
            <Loader />
          ) : (
            <List items={
              this.props.suggestList.map(
                (item, index) => {
                  return (<Card
                    key={ index }
                    article={ item }
                    addedToWishlist={
                      this.props.wishlist.find(
                        element => element.productid === item.productid
                      )
                    }
                  />
                  );
                }
              )
            } />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  success: state.success,
  failed: state.failed,
  suggestList: state.suggestList,
  wishlist: state.wishlist,
  wishlist_id: state.wishlist_id
});

const mapDispatchToProps = dispatch => {
  return {
    getArticles: (wishlist_id) => {
      dispatch(wishlistRequestAction(wishlist_id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
