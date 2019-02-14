import React, { Component } from 'react';

import Card from '../components/Card/Card';


class WishlistPage extends Component {

  state = {
    wishlist: [<Card />,
    <Card />,
    <Card />,
    <Card />]
  }

  render() {
    return (
      <div>
        <h1>Wishlist</h1>
        <section>
          {
            this.state.wishlist.map((item, index) => (item))
          }
        </section>

      </div>
    )
  }
}

export default WishlistPage;