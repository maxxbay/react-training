import React, { useState, useEffect, useRef } from 'react';

const Counter3 = () => {
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <div>
      <h1>Renders: {renderCount.current}</h1>
      <h2>Last value: {prevValue.current}</h2>

      <input
        ref={inputRef}
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <button onClick={focus}>onChange</button>
    </div>
  );
};

export default Counter3;
