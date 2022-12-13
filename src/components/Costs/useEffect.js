import React, { useState, useEffect } from 'react';

const Counter1 = () => {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json));

    return () => {
      console.log('cleared');
    };
  }, [type]);

  const mouseMoveHandler = e => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <div>
      <h1>Results: {type}</h1>
      <button onClick={() => setType('Users')}>Users</button>
      <button onClick={() => setType('Todos')}>ToDo</button>
      <button onClick={() => setType('Posts')}>Posts</button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
};

export default Counter1;
