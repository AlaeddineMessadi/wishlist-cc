import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import List from '../components/List/List';
import Loader from '../components/Loader/Loader';

import { addArticleAction, removeArticleAction } from '../store/actions/actions';

class SearchPage extends Component {
    render() {
        return (
            <div>
                <h1>Search Articles</h1>
                <Search />
                <div style={ { paddingTop: "100px" } }>
                    {
                        this.props.loading ? (
                            <Loader />
                        ) : (
                                <List items={
                                    this.props.suggestList.map((item, index) => (<Card key={ index }
                                        wishlist_id={ this.props.wishlist_id }
                                        article_id={ item.id }
                                        name={ item.displayName }
                                        price={ item.price }
                                        salePrice={ item.salePrice }
                                        reviews={ item.reviewRating }
                                        imgUrl={ item.imageURL }
                                        reviewCount={ item.reviewCount }
                                        reviewRatings={ item.reviewRatings }
                                        addArticle={ this.props.addArticle }
                                        removeArticle={ this.props.removeArticle }
                                    />))
                                }></List>
                            )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    wishlist_id: state.wishlist_id,
    suggestList: state.suggestList
})

const mapDispatchToProps = dispatch => {
    return {
        addArticle: (wishlist_id, article_id) => { dispatch(addArticleAction(wishlist_id, article_id)) },
        removeArticle: (wishlist_id, article_id) => { dispatch(removeArticleAction(wishlist_id, article_id)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
