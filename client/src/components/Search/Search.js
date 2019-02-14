import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createArticleAction } from '../../store/actions/actions';

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
                .then((result) => {
                    this.props.addToList(result.products);

                    result.products.map(item => { this.props.createArticle(item) })
                });
        }
    }

    render() {
        return (
            <div className={ classes.wrap }>

                <form action="#" autoComplete="on">
                    <input
                        className={ classes.search }
                        name="keyword"
                        type="text"
                        placeholder="What're we looking for ?"
                        onChange={ (e) => { this.inputHandler(e) } } />
                    <span className={ classes.submit }>
                        <i class="fa fa-search"></i>
                    </span>
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    success: state.success,
    failed: state.failed,
})

const mapDispatchToProps = dispatch => {
    return {
        createArticle: (article) => { dispatch(createArticleAction({ article })) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);