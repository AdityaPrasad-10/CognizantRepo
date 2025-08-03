import { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    alert("Hello! Member1");
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = (e) => {
    alert("I was clicked");
  };

  return (
    <div style={{ margin: '20px' }}>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
      <button onClick={handleClick}>Click on me</button>

      <CurrencyConverter />
    </div>
  );
}

export default App;
