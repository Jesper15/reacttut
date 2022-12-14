import React from "react";

import './ExpenseItem.scss'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    return (
        <Card className={'expense-item'}>
            <ExpenseDate date={props.date}/>
            <div className={'expense-itemdescription'}>
                <h2>{props.title}</h2>
                <div className={'expense-itemprice'}>€{props.amount.toString()}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
