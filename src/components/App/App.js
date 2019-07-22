import React, { Component } from 'react';
import Article from '../Article/Article';
import Header from '../Header';

class App extends Component {
    render() {
        const data = (
          <div>
            <Header />
            <Article />
          </div>
        );
        return data;
    }
}
export default App;
