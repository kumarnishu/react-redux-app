import React, { Component } from 'react';
import Posts from './components/Posts';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Posts/>
        );
    }
}

export default App;