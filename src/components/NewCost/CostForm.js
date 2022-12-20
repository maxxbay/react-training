import React, { useState } from 'react';
import './CostForm.css';

const CostForm = props => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  //   const [userInput, setUserInput] = useState({
  //     name: '',
  //     amount: '',
  //     date: '',
  //   });

  const nameChangeHandler = e => {
    e.preventDefault();
    setName(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   name: e.target.value,
    // });
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     name: e.target.value,
    //   };
    // });
  };

  const amountChangeHandler = e => {
    e.preventDefault();
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value,
    // });

    setAmount(e.target.value);
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     amount: e.target.value,
    //   };
    // });
  };

  const dateChangeHandler = e => {
    e.preventDefault();
    setDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     date: e.target.value,
    //   };
    // });
  };

  const submitHandler = e => {
    e.preventDefault();

    const costData = {
      description: name,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveCostData(costData);
    setName('');
    setAmount('');
    setDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name of Item</label>
          <input type="text" value={name} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Sum of purchase</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2022-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Enter expense value</button>
          <button type="button" onClick={props.onCancel}>
            Reset expense value
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
