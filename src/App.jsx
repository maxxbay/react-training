import Costs from './components/Costs/Costs';

const App = () => {
  const costs = [
    {
      date: new Date(2022, 2, 6),
      description: 'Macbook',
      amount: 999.99,
    },
    {
      date: new Date(2022, 3, 16),
      description: 'iPad',
      amount: 899.99,
    },
    {
      date: new Date(2022, 6, 17),
      description: 'iPhone',
      amount: 1199.99,
    },
    {
      date: new Date(2022, 9, 13),
      description: 'Apple Watch',
      amount: 599.99,
    },
  ];
  return (
    <div>
      <h1>Let's start Training React</h1>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
