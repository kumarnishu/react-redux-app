import React, { Component } from 'react';
import {PostForm,Posts} from './components/index';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Provider store={store}>
                <PostForm/>
                <Posts/>
            </Provider>
        );
    }
}

export default App;