import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello lakshmi Bhargava</p>;
  }
}

render(<App/>, document.getElementById('content'));