import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

import classes from './App.module.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          <ul>
            <li><h1>Heyylo</h1></li>
            <li><h1>Heyylo</h1></li>
            <li><h1>Heyylo</h1></li>
            <li><h1>Heyylo</h1></li>
          </ul>
        </Main>
      </React.Fragment>
    );
  }
}

export default App;
