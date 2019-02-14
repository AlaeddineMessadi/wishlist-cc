import React, { Component } from 'react';

import Search from '../components/Search/Search';
import Card from '../components/Card/Card';

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
                <Search addToList={this.addToLIst} />
                <br/>
                <div>
                    {
                        this.state.list.map((item, index) => (<Card key={index}
                            name={item.displayName}
                            price={item.price}
                            reviews={item.reviewRating}
                            imgUrl={item.imageURL}
                        />))
                    }
                </div>
            </div>
        )
    }
}

export default SearchPage;