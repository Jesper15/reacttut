import React, {useState} from "react";

import './Expenses.scss'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    // console.log(filteredYear);
    const filterExpenses = props.items.filter(expense => expense.date.getFullYear() == filteredYear);

    return (<Card className="expenses">
        <ExpensesFilter selected={filteredYear} setFilteredYear={setFilteredYear}/>
        <ExpensesList items={filterExpenses}/>
    </Card>)
}

export default Expenses