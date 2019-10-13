import React from "react";
import Form from "./Form";

import "../css/Form.css";

class LoanCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interestRate: "",
      monthlyPay: "",
      displayMonthly: false
    };
    const localStore = [];
  }
  handleChange = event => {
    this.setState({ loanAmount: event.target.value });
  };

  displayMonthlyPay = async event => {
    event.preventDefault();
    console.log(this.state.loanDuration);
    const loanAmount = event.target.elements.loanAmount.value;
    const loanDuration = event.target.elements.loanDuration.value;
    const api_call = await fetch(
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${loanAmount}&numMonths=${loanDuration}`
    );
    const data = await api_call.json();
    this.setState({
      displayMonthly: true,
      interestRate: data.interestRate,
      monthlyPay: data.monthlyPayment.amount
    });

    localStore.push({
      loanAmount: loanAmount,
      loanDuration: loanDuration
    });
    localStorage.setItem("localStore", JSON.stringify(localStore));
  };

  render() {
    

    return (
      <div className="wrapper">
        <div className="main">
         
          <div className="form-container">      
            <Form displayMonthlyPay={this.displayMonthlyPay} />
            {this.state.displayMonthly ? (
              <div className="label" >
                <br />
                <p>Interest Rate:{this.state.interestRate}</p>
                <br />
                <p>Monthly Pay:{this.state.monthlyPay}</p>
              </div>
            ) : null}
            </div>
            
            </div>
          </div>
        
    );
  }
}

export default LoanCalculator;
