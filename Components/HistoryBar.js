import React from 'react'

class HistoryBar extends React.Component{
  render(){
    return(
      <div>
        {      
              Object.values(JSON.parse(localStorage.getItem('localStore'))).
              map(item=><li>{item.loanAmount}</li>)
           }
      </div>
    )
  }
}
export default HistoryBar