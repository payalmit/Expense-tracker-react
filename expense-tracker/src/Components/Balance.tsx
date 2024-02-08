import React from 'react'
import '..'

const Balance = ({transcationsList}) => {

  const totalBalance = () =>{
    const sum = transcationsList.reduce((total, transcationsList) => total + transcationsList.amount , 0);
    return sum;
  }

  return (
    <div className="balance-component" >
        <h2 >Balance</h2>
        <h3 id="balance">{totalBalance()}</h3>
    </div>
  )
}

export default Balance