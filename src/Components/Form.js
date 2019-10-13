import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Divider from "@material-ui/core/Drawer";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: 500,
      loanDuration: 6
    };
  }
  handleLoanAmountChange = event => {
    this.setState({ loanAmount: event.target.value });
  };

  handleLoanDurationChange = event => {
    this.setState({ loanDuration: event.target.value });
  };

  render() {
    return (
      <div>
          
          <div className="sidebar">
            <MenuList>
              {Object.values(
                JSON.parse(localStorage.getItem("localStore"))
              ).map(item => (
                <MenuItem
                  onClick={() =>
                    this.setState({
                      loanAmount: item.loanAmount,
                      loanDuration: item.loanDuration
                    })
                  }
                >
                  LoanAmount : {item.loanAmount} <br />
                  LoanDuration : {item.loanDuration}
                </MenuItem>
              ))}
            </MenuList>
            </div>
            
            <form onSubmit={this.props.displayMonthlyPay}>
              <label className="label">
                Loan Amount :
                <input
                  type="text"
                  name="loanAmount"
                  value={this.state.loanAmount}
                  onChange={this.handleLoanAmountChange}
                />
                <div className="slidecontainer">
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    value={this.state.loanAmount}
                    className="slider"
                    id="myRange"
                    onChange={this.handleLoanAmountChange}
                  />
                </div>
              </label>
              <br />
              <label className="label">
                Loan Duration :
                <input
                  type="text"
                  name="loanDuration"
                  value={this.state.loanDuration}
                  onChange={this.handleLoanDurationChange}
                />
              </label>
              <br />
              <button>Check</button>
            </form>
            </div>
          
        
    );
  }
}
export default Form;
