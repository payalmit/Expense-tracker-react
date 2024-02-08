import React , {useState} from 'react'
import Balance from './Balance.tsx';
import IncomeExpense from './IncomeExpense.tsx';
import TranscationList from './TranscationList.tsx';
import AddTranscation from './AddTranscation.tsx';

interface Transcation {
    text: string;
    amount: number;
  }

const Overview = () => {
    const [transcationsList, setTranscationsList] = useState<Transcation[]>([]);

    const addNewTranscation = (transcation) =>{
        setTranscationsList((prev) => [...prev, transcation]);
        console.log(transcationsList);

    }

    return (
        <div className="container">
            <Balance transcationsList={transcationsList}/>
            <IncomeExpense transcationsList={transcationsList} />
            <TranscationList transcationsList={transcationsList} />
            <AddTranscation addNewTranscation={addNewTranscation} />

        </div>
    )
}

export default Overview