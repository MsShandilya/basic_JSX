// ChildComponent.js
import React from 'react';

const ChildComponent = ({ state, dispatch }) => {
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};


export default ChildComponent;