import Costs from './components/Costs/Costs';
import NewCost from 'components/NewCost/NewCost';

const App = () => {
  const costs = [
    {
      id: 'c1',
      date: new Date(2022, 2, 6),
      description: 'Macbook',
      amount: 999.99,
    },
    {
      id: 'c2',
      date: new Date(2022, 3, 16),
      description: 'iPad',
      amount: 899.99,
    },
    {
      id: 'c3',
      date: new Date(2022, 6, 17),
      description: 'iPhone',
      amount: 1199.99,
    },
    {
      id: 'c4',
      date: new Date(2022, 9, 13),
      description: 'Apple Watch',
      amount: 599.99,
    },
  ];

  const addCostHandler = cost => {
    console.log(cost);
    console.log('App component');
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
