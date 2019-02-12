import React, { Component } from 'react';

import classes from './search.module.scss';
class SearchPage extends Component {

    state = {
        keyword: ""
    }

    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        e.target.checkValidity();
    }

    render() {
        return (
            <div className={classes.wrap}>
                <form action="" autoComplete="on">
                    <input
                        className={classes.search}
                        type="text"
                        placeholder="What're we looking for ?"
                        onClick={this.loginHandler} />
                    <button className={classes.submit} type="submit">Search</button>
                </form>
            </div>

        )
    }
}

export default SearchPage;