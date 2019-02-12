import React from 'react';

import classes from './Card.module.scss';
const Card = () => {
  return (
    <div className={ classes.wrapper }>
      <div className={ classes.container }>
        <div className={ classes.top }></div>
        <div className={ classes.bottom }>
          <div className={ classes.left }>
            <div className={ classes.details }>
              <h1>Chair</h1>
              <p>£250</p>
            </div>
            <div className={ classes.buy }><i className={ classes.material_icons }>add_shopping_cart</i></div>
          </div>
          <div className={ classes.right }>
            <div className={ classes.done }><i className={ classes.material_icons }>done</i></div>
            <div className={ classes.details }>
              <h1>Chair</h1>
              <p>Added to your cart</p>
            </div>
            <div className={ classes.remove }><i className={ classes.material_icons }>clear</i></div>
          </div>
        </div>
      </div>
      <div className={ classes.inside }>
        <div className={ classes.icon }><i className={ classes.material_icons }>info_outline</i></div>
        <div className={ classes.contents }>
          <p>Some description here</p>
        </div>
      </div>
    </div>
  )
}

export default Card
