import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: 500
    };
  }
  handleChange = event => {
    this.setState({ loanAmount: event.target.value });
  };

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Loan Amount:
            <input
              type="text"
              name="name"
              value={this.state.loanAmount}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Loan Duration:
            <input type="text" name="name" />
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
          <p>
            Value: <span id="demo" />
          </p>
        </div>
      </div>
    );
  }
}

export default Hello;
