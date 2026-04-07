import { useState } from "react";
import Button from "./components/button";

function App() {
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-2">Counter</h1>
      <p className="text-2xl font-bold mb-2">{count}</p>
      <Button buttonText="Click" onClick={handleClick} />
    </div>
  );
}

export default App;
