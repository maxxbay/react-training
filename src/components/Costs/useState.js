import React, { useState } from 'react';
function computeInitialCounter() {
  console.log('Some calculations');
  return Math.trunc(Math.random() * 20);
}

const Counter = () => {
  //   const [count, setCount] = useState(computeInitialCounter);

  const [count, setCount] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now(),
  });
  const increment = () => {
    // setCount(count + 1);
    setCount(prev => {
      return prev + 1;
    });
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  function updateTitle() {
    setState(prev => {
      return { ...prev, title: 'New item' };
    });
  }

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={updateTitle}>Change item</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Counter;
