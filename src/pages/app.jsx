import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import MainPage from 'pages/mainPage';
import * as stores from 'stores';

export default class App extends Component {

  render () {
    return (
      <Provider {...stores}>
        <MainPage />
      </Provider>
    )
  }
}
