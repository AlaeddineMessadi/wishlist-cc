import React, { Component } from 'react';

import classes from './Card.module.scss';

const defautlImage = 'https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg';


class Card extends Component {
  state = { clicked: false }

  render() {
    const { name, imgUrl, price, salePrice, reviewCount, reviewRatings, subTitle } = this.props;

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
                onClick={ () => { this.setState({ clicked: true }) } }>
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
                onClick={ () => { this.setState({ clicked: false }) } } >
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={ classes.inside }>
          <div className={ classes.icon }>
            <i class="fas fa-info-circle"></i></div>
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


export default Card
