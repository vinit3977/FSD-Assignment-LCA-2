
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <a href="../" className="back-nav-btn">
        <span className="back-arrow">←</span>
        <span>Back to Portfolio</span>
      </a>

      <div className="container">
        <div className="badge-pill">
          <span className="badge-dot"></span>
          <span>ASSIGNMENT 06</span>
        </div>

        <h1>Counter Application</h1>
        <p className="subtitle">Interactive state management powered by React useState</p>

        <div className="counter-display">
          <span className="display-label">Current Count</span>
          <h2>{count}</h2>
        </div>

        <div className="buttons">
          <button className="btn-increment" onClick={increment}>
            <span>+</span> Increment
          </button>

          <button className="btn-decrement" onClick={decrement}>
            <span>−</span> Decrement
          </button>

          <button className="btn-reset" onClick={reset}>
            <span>↺</span> Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
