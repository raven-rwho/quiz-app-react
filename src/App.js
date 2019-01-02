import React, { Component } from 'react';
import Question from './Question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Question></Question>
        </header>
      </div>
    );
  }
}

export default App;
