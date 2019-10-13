import React, { Component } from 'react';
import { render } from 'react-dom';
import LoanCalculator from '../Components/LoanCalculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

class App extends Component {
  

  render() {
    return (
      <div>
        
        <LoanCalculator />
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
