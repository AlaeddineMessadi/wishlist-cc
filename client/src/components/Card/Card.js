import React from 'react';

import classes from './Card.module.scss';

const defautlImage = 'https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg';

const Card = ({name,imgUrl ,price, salePrice, reviewCount, reviewRatings, subTitle}) => {
  return (
    <div className={ classes.wrapper }>
      <div className={ classes.container }>
        <div 
        className={ classes.top }
        style={
          {
            background: `url(${imgUrl||defautlImage}) no-repeat center center`
          }
        }
        ></div>
        <div className={ classes.bottom }>
          <div className={ classes.left }>
            <div className={ classes.details }>
              <h2>{name}</h2>
              <p>{salePrice}</p>
            </div>
            <div className={ classes.buy }><i className={ classes.material_icons }>add_shopping_cart</i></div>
          </div>
          <div className={ classes.right }>
            <div className={ classes.done }><i className={ classes.material_icons }>done</i></div>
            <div className={ classes.details }>
              <h2>{name}</h2>
              <p>Added to your cart</p>
            </div>
            <div className={ classes.remove }><i className={ classes.material_icons }>clear</i></div>
          </div>
        </div>
      </div>
      <div className={ classes.inside }>
        <div className={ classes.icon }><i className={ classes.material_icons }>info_outline</i></div>
        <div className={ classes.contents }>
          <p>Name: {name}</p>
          <p>Price: {price}</p>
          <p>SalePrice: {salePrice}</p>
          <p>Reviews: {reviewCount}</p>
          <p>Rating: {reviewRatings}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
