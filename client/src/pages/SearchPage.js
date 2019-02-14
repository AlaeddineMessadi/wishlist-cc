import React, { Component } from 'react';

import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import List from '../components/List/List';

class SearchPage extends Component {
    state = {
        list: []
    }

    addToLIst = (products) => {
        this.setState({
            list: products
        })

        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h1>Search Articles</h1>
                <Search addToList={ this.addToLIst } />
                <br />
                <List items={
                    this.state.list.map((item, index) => (<Card key={ index }
                        name={ item.displayName }
                        price={ item.price }
                        salePrice={ item.salePrice }
                        reviews={ item.reviewRating }
                        imgUrl={ item.imageURL }
                        reviewCount={ item.reviewCount }
                        reviewRatings={ item.reviewRatings }

                    />))
                }></List>
                <div>
                    {

                    }
                </div>
            </div>
        )
    }
}

export default SearchPage;