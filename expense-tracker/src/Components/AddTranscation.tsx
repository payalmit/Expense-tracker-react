import React from 'react'
import { useState } from 'react';

interface Transcation{
    text : String,
    amount : Number
}

const AddTranscation = ({addNewTranscation}) => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    

   const handleSubmit =  (event)  =>{
    event.preventDefault();
    const  transcation : Transcation = {
        text : text,
        amount : amount
    }
    console.log(transcation);
    addNewTranscation(transcation);
    setAmount(0);
    setText("");

   }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..." 
                    value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)</label>
                    <input type="number" id="amount" placeholder="Enter Amount..."  
                     value={amount === 0 ? '' : amount} onChange={(e) => setAmount(Number(e.target.value))}/>
                </div>
                <button className="btn" type='submit'>Add transaction</button>

            </form>
        </>
    )
}

export default AddTranscation