import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import List from '../containers/List/List';
import Loader from '../components/Loader/Loader';

class SearchPage extends Component {
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
                                        )
                                    }
                                )
                            } />
                        )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    suggestList: state.suggestList,
    wishlist: state.wishlist
})

export default connect(mapStateToProps, null)(SearchPage);
