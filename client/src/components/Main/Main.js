import React, { Component } from 'react'

import Card from '../Card/Card';

import classes from './Main.module.scss';

class Main extends Component {
  render() {
    return (
      <main className={ classes.container }>
        <Card /><Card /><Card /><Card />
        { this.props.children }
      </main>
    )
  }
}

export default Main;