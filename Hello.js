import React from 'react';

class Hello extends React.Component{
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
    
    </div>
  )
}
}

export default Hello;
