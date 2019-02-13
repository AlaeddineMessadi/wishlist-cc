import React, { Component } from 'react';

import Search from '../components/Search/Search';

class SearchPage extends Component {
    state = {
        list: []
    }

    addToLIst = (product) => {
        this.setState({
            list: [...this.state.list, product]
        })
    }
    render() {
        return (
            <div>
                <h1>Search Articles</h1>
                <Search onChange={this.addToLIst} />
                <div>
                    {
                        this.state.list.map((i,v)=> (<p>{v}</p>))
                    }
                </div>
            </div>
        )
    }
}

export default SearchPage;