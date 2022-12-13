import { AlertProvider } from 'components/Alert/AlertContext';
import React from 'react';
import Alert from '../Alert/Alert';
import Main from './Main';

const Counter2 = () => {
  return (
    <AlertProvider>
      <div>
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  );
};

export default Counter2;
