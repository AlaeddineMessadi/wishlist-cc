import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import List from '../components/List/List';
import Loader from '../components/Loader/Loader';

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
                                        name={ item.displayName }
                                        price={ item.price }
                                        salePrice={ item.salePrice }
                                        reviews={ item.reviewRating }
                                        imgUrl={ item.imageURL }
                                        reviewCount={ item.reviewCount }
                                        reviewRatings={ item.reviewRatings }

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
    suggestList: state.suggestList
})

export default connect(mapStateToProps, null)(SearchPage);