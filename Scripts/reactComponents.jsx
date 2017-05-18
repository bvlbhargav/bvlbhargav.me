import React from 'react';
import { render } from 'react-dom';

//Component import from other JSX files
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <p> Hello lakshmi Bhargava</p>
                <AwesomeComponent />
            </div>
        );
    }
}

render(<App />, document.getElementById('content'));