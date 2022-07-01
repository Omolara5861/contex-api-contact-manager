import React from 'react';
import './App.css';

function App() {
  const name = 'React';
  const showTitle = true;
  const showMath = true;
  let math;

  if (showMath) {
    math = 50 + 60;
  }
  else {
    math = null;
  }
  return (
    <div className="App">
      {showTitle ? <h1>Hello {name}</h1> : null}
      <h4>{math}</h4>
    </div>
  );
}

export default App;
