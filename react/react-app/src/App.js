import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-6 font-sans">
      <div className="flex w-full max-w-xl flex-col items-center gap-5">
        <button
          type="button"
          id="btn"
          className="cursor-pointer rounded border border-gray-400 bg-gray-100 px-4 py-1.5 text-base hover:bg-gray-200"
          onClick={handleClick}
        >
          Click
        </button>
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
