import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiComponent from './apiComponent';
import ApiService from './apiService';

class App extends Component {
  constructor(props) {
    super(props);
  }

  apiReturnValue = () => { '999' }
  
  render() {
    return (
      <div className="App">
        <div className='api-return-value'>
          <ApiComponent vatPercentage={999}/>

          <ApiService />
        </div>
      </div>
    );
  }
}

export default App;
