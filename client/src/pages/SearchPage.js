import React, { Component } from 'react';

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
            <div>
                <div className='input-fields'>
                    <input type='text' name='keyword' placeholder='Search' 
                    className='input-line full-width' 
                    onChange={(e) => this.inputHandler(e)} />
                </div>
                <div><button className='ghost-round full-width' onClick={this.loginHandler}>Login</button></div>
            </div>

        )
    }
}

export default SearchPage;