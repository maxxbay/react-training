import React, { useState, useCallback } from 'react';
import ItemsList from './itemsList';

const Counter2 = () => {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'darkred' : 'lightgreen',
  };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element ${i + 1}`);
  }, [count]);

  return (
    <div>
      <h1 style={styles}>All items : {count}</h1>

      <button onClick={() => setCount(prev => prev + 1)}>One Plus</button>
      <button onClick={() => setColored(prev => !prev)}>Colored</button>
      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
};

export default Counter2;
