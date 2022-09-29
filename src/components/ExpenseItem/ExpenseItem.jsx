import React, { useState } from "react";

import './ExpenseItem.scss'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = ( ) => {
        setTitle('New button');
        console.log(title);
    };

    return (
        <Card className={'expense-item'}>
            <ExpenseDate date={props.date}/>
            <div className={'expense-itemdescription'}>
                <h2>{title}</h2>
                <div className={'expense-itemprice'}>€{props.amount.toString()}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;
