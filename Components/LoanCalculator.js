import React from "react";

class LoanCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: 500,
      interestRate: "",
      monthlyPay: "",
      displayMonthly: false
    };
    
  }
  componentDidMount(){
    const loanAmountLocalStorage=localStorage.getItem('loanAmount');
    const loanDurationLocalStorage=localStorage.getItem('loanDuration');
    
  }
  handleChange = event => {
    this.setState({ loanAmount: event.target.value });
  };

  displayMonthlyPay = async event => {
    event.preventDefault();

    const loanAmount = event.target.elements.loanAmount.value;
    const loanDuration = event.target.elements.loanDuration.value;
    const api_call = await fetch(
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${loanAmount}&numMonths=${loanDuration}`
    );
    const data = await api_call.json();
    this.setState({
      displayMonthly: !this.state.displayMonthly,
      interestRate: data.interestRate,
      monthlyPay: data.monthlyPayment.amount
    });
    localStorage.setItem("loanAmount", this.state.loanAmount);
    localStorage.setItem("loanDuration", loanDuration);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.displayMonthlyPay}>
          <label>
            Loan Amount:
            <input
              type="text"
              name="loanAmount"
              value={this.state.loanAmount}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Loan Duration:
            <input type="text" name="loanDuration" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>

        <div className="slidecontainer">
          <input
            type="range"
            min="500"
            max="5000"
            value={this.state.loanAmount}
            className="slider"
            id="myRange"
            onChange={this.handleChange}
          />

          {this.state.displayMonthly ? 
            <div>
              <p>InterestRate:{this.state.interestRate}</p>
              <p>Monthly Pay:{this.state.monthlyPay}</p>
            </div>
           : null}
           <h2>Items from local storage</h2>
           {
            
              
           }
        </div>
      </div>
    );
  }
}

export default LoanCalculator;