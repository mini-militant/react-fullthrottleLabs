import React from 'react';

class Hello extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loanAmount:''
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render(){
  return(
    <div>
    <form>
  <label>
    Loan Amount:
    <input type="text" name="name" />
  </label><br/>
  <label>
    Loan Duration:
    <input type="text" name="name" />
  </label><br/>
  <input type="submit" value="Submit" />
</form> 
  <div class="slidecontainer">
  <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
  <p>Value: <span id="demo"></span></p>
  </div>   
    </div>
  )
}
}

export default Hello;
