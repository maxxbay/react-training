import { useAllert } from 'components/Alert/AlertContext';
import React from 'react';
export default function Main() {
  const { show } = useAllert();
  return (
    <>
      <h1>Hi in example Context</h1>
      <button onClick={() => show('This text is from the Main.js')}>
        Show Alert
      </button>
    </>
  );
}
