import React, { Component } from 'react';

import classes from './Search.module.scss';
class Search extends Component {
    state = {
        keyword: "",
        products: []
    }

    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })

        if (this.state.keyword.length >= 3) {
            fetch('https://www.adidas.co.uk/api/search/suggestions/' + this.state.keyword)
                .then((response) => {
                    return response.json();
                })
                .then((myJson) => {
                    this.props.addToList(myJson.products);
                });
        }
    }

    render() {
        return (
            <div className={classes.wrap}>

                <form action="#" autoComplete="on">
                    <input
                        className={classes.search}
                        name="keyword"
                        type="text"
                        placeholder="What're we looking for ?"
                        onChange={(e) => { this.inputHandler(e) }} />
                    <button
                        className={classes.submit}
                        type="submit"
                        onClick={(e) => { this.props.onClick() }}
                    >Search</button>
                </form>

            </div>
        )
    }
}

export default Search;