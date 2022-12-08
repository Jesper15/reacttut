import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.scss';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const [showExpenseForm, setShowExpenseForm] = useState(false);

    return (
        <div className="new-expense">
            {showExpenseForm ? <ExpenseForm setShowExpenseForm={setShowExpenseForm} onSaveExpenseData={saveExpenseDataHandler} /> : <button onClick={e => setShowExpenseForm(true)}>Add expense</button>}
    </div>
    );
};

export default NewExpense;
