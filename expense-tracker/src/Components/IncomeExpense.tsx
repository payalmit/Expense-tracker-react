import React from 'react'

const IncomeExpense = ({transcationsList}) => {
    
    const income =() =>{
        const incomeTrancation = transcationsList.filter(transcationList => transcationList.amount>0);
        const totalIncome = incomeTrancation.reduce((sum, incomeTrancation) => sum + incomeTrancation.amount, 0);
        return totalIncome;
    }

    const expense =() =>{
        const expenseTrancation = transcationsList.filter(transcationList => transcationList.amount<0);
        const totalexpense = expenseTrancation.reduce((sum, expenseTrancation) => sum + expenseTrancation.amount, 0);
        return totalexpense;
    }


    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income()}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense()}</p>
            </div>
        </div>
    )
}

export default IncomeExpense