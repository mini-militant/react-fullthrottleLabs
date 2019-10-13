import React from 'react'

class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: 500,
      loanDuration:'',
      
    };
  }
  handleChange = event => {
    this.setState({  loanAmount: event.target.value });
  };
  render(){
    return(
      <div>
        <form onSubmit={this.props.displayMonthlyPay}>
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
            <input type="text" name="loanDuration" 
               />
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
      </div>
      </div>
    )
  }
}
export default Form