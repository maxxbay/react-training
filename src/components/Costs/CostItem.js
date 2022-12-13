import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';
import React, { useState } from 'react';
import Button from './Button';

const CostItem = props => {
  const [description, setDescription] = useState(props.description);
  // console.log('Text in component definition');

  const changeDescriptionHandler = () => {
    setDescription('New cost-named item');
  };

  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
      <Button onClick={changeDescriptionHandler}>Change item</Button>
    </Card>
  );
};

export default CostItem;
