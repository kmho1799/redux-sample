import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
};

function App({ value, onIncrement, onDecrement }: Props) {
  return (
    <div className="App">
      {/* clicked : {value} times */}
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>
    </div>
  );
}

export default App;
