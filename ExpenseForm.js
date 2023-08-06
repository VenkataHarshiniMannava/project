import React, { useState } from 'react';

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title:', enteredTitle);
    console.log('Amount:', enteredAmount);
    console.log('Date:', enteredDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" value={enteredAmount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>Date</label>
        <input type="date" value={enteredDate} onChange={handleDateChange} />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
