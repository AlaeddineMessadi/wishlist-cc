import React, { Component } from 'react';

import classes from './Search.module.scss';
class Search extends Component {
    state = {
        keyword: ""
    }

    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        
        if(this.state.keyword.length >= 3) {
            fetch('https://www.adidas.co.uk/api/search/suggestions/'+this.state.keyword)
            .then((response)=> {
                response.json(
            })
            .then((myJson) => {
                console.log(JSON.stringify(myJson));
            });
        }
    }

    render() {
        return (
            <div className={classes.wrap}>
            
                <form action="#" autoComplete="on">
                    <input
                        className={classes.search}
                        type="text"
                        placeholder="What're we looking for ?"
                        onChange={this.inputHandler} />
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