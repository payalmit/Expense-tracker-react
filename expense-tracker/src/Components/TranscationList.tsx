import React from 'react'

const TranscationList = ({transcationsList, deleteTranscation}) => {
  return (
    <div>
        <h3>History</h3>
        <ul id="list" className="list">
            {
              transcationsList.map((tran, id) => (
                <li>
                  {tran.text}<span>{tran.amount > 0 ? "Income" : "Expense"}</span><span>{tran.amount}</span>
                  <span><button style={{background: 'red', color: '#fff' }} onClick={() => deleteTranscation(tran)}>Delete</button></span>
                </li>
              ))
            }
        </ul>
    </div>
  )
}

export default TranscationList
