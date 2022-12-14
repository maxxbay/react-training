import React, { useState } from 'react';
import CostItem from './CostItem';
import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';

const Costs = props => {
  const [selectedYear, setSelectedYear] = useState('2022');
  const yearChangeHandler = year => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />

        <CostItem
          date={props.costs[0].date}
          description={props.costs[0].description}
          amount={props.costs[0].amount}
        />
        <CostItem
          date={props.costs[1].date}
          description={props.costs[1].description}
          amount={props.costs[1].amount}
        />
        <CostItem
          date={props.costs[2].date}
          description={props.costs[2].description}
          amount={props.costs[2].amount}
        />
        <CostItem
          date={props.costs[3].date}
          description={props.costs[3].description}
          amount={props.costs[3].amount}
        />
      </Card>
    </div>
  );
};
export default Costs;
