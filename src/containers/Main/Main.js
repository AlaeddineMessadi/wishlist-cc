import React, { Component } from 'react';

import classes from './Main.module.scss';

class Main extends Component {
  render() {
    return (
      <main className={ classes.container }>
        { this.props.children }
      </main>
    );
  }
}

export default Main;