import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Card.module.scss';
import { addArticleAction, removeArticleAction } from '../../store/actions/actions';

const defautlImage = 'https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg';


class Card extends Component {
  state = { clicked: false }

  componentDidMount() {
    this.setState({ clicked: this.props.addedToWishlist ? true : false });
  }

  render() {
    const {
      name, imgUrl, price, salePrice, reviewCount,
      reviewRatings, subTitle, wishlist_id, article_id
    } = this.props;

    return (
      <div className={ classes.wrapper }>
        <div className={ classes.container }>
          <div
            className={ classes.top }
            style={
              {
                background: `url(${imgUrl || defautlImage}) no-repeat center center`
              }
            }
          ></div>
          <div
            className={ `${classes.bottom} ${this.state.clicked ? classes.clicked : ''}` }>
            <div className={ classes.left }>
              <div className={ classes.details }>
                <h2>{ name }</h2>
                <p>{ salePrice }</p>
              </div>
              <div
                className={ classes.buy }
                onClick={ () => {
                  this.setState({ clicked: true });
                  this.props.addArticle(wishlist_id, article_id);
                } }>
                <i className="fas fa-cart-plus"></i>
              </div>
            </div>
            <div className={ classes.right }>
              <div className={ classes.done }>
                <i className="fas fa-check"></i>
              </div>
              <div className={ classes.details }>
                <h2>{ name }</h2>
                <p>Added to your Wishlist</p>
              </div>
              <div
                className={ classes.remove }
                onClick={ () => {
                  this.setState({ clicked: false });
                  this.props.removeArticle(wishlist_id, article_id);
                } } >
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={ classes.inside }>
          <div className={ classes.icon }>
            <i className="fas fa-info-circle"></i></div>
          <div className={ classes.contents }>
            <p>Name: { name }</p>
            <p>Price: { price }</p>
            <p>SalePrice: { salePrice }</p>
            <p>Reviews: { reviewCount }</p>
            <p>Rating: { reviewRatings }</p>
            <p>Subtitle: { subTitle }</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addArticle: (wishlist_id, article_id) => { dispatch(addArticleAction({ wishlist_id, article_id })) },
    removeArticle: (wishlist_id, article_id) => { dispatch(removeArticleAction({ wishlist_id, article_id })) }
  }
};

export default connect(null, mapDispatchToProps)(Card);
