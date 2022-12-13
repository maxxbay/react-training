import React, { useState, useEffect, useRef, useMemo } from 'react';

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

const Counter2 = () => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);
  const styles = useMemo(
    () => ({
      color: colored ? 'darkred' : 'lightgreen',
    }),
    [colored]
  );

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log('Styles change');
  }, [styles]);

  return (
    <div>
      <h1 style={styles}>Calculate : {computed}</h1>

      <button onClick={() => setNumber(prev => prev + 1)}>One Plus</button>
      <button onClick={() => setNumber(prev => prev - 1)}>One Minus</button>
      <button onClick={() => setColored(prev => !prev)}>Colored</button>
    </div>
  );
};

export default Counter2;
