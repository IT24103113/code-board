import { useState } from "react";
import Button from "./components/button";
import Form from "./components/form";

function App() {
  // Parent Component
  const [buttonText, setButtonText] = useState("Click 1");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  const handleAddToCart = () => {
    alert("Item added to cart");
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-6 font-sans">
      <div className="flex w-full max-w-xl flex-col items-center gap-5">
        <h1>Counter</h1>
        <Button buttonText={buttonText} onClick={handleClick} />
        <p
          className="m-0 text-7xl font-semibold leading-none text-black"
          aria-label="count"
        >
          {count}
        </p>
      </div>
    </div>
  );
}

export default App;
