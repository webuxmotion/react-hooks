import React, { useState } from 'react';

function calc() {
  console.log('calc');

  return Math.trunc(Math.random() * 20);
}

function App() {
  const [counter, setCounter] = useState(() => calc());

  const [state, setState] = useState({
    title: 'Counter',
    data: Date.now(),
  });

  function increment() {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setCounter(prev => prev + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState(prev => ({
      ...prev,
      title: `New title with counter: ${counter}`
    }))
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">Plus</button>
      <button onClick={decrement} className="btn btn-danger">Minus</button>
      <button onClick={updateTitle} className="btn btn-default">Change name</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
