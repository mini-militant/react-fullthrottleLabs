import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Drawer';

class HistoryBar extends React.Component{

  setLoanVariables=()=>{
    console.log('hiform history')
    
  }

  render(){
    console.log(this.props)
    return(
      <div>
      <MenuList>
        {     
              Object.values(JSON.parse(localStorage.getItem('localStore'))).
              map(item=>
              <MenuItem onClick={this.setLoanVariables}>
              LoanAmount : {item.loanAmount} <br/>
              LoanDuration : {item.loanDuration}             
              </MenuItem>)
              
           }
           
        </MenuList>
      </div>
      
    )
  }
}
export default HistoryBar