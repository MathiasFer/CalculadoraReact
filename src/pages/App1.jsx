import { useState } from "react";

function App1({ goHome }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  function sum() {
    const res = Number(num1) + Number(num2);
    setResult(res);
  }

  return (
    <div className="flex flex-col items-center gap-4">

      <h1 className="text-2xl font-semibold">
        Simple Calculator
      </h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
        className="border p-2 rounded w-48 text-center"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
        className="border p-2 rounded w-48 text-center"
      />

      <button
        onClick={sum}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Sum
      </button>

      {result !== null && (
        <p className="text-lg font-medium">
          Result: {result}
        </p>
      )}

      <button
        onClick={goHome}
        className="text-sm text-gray-500"
      >
        Back
      </button>

    </div>
  );
}

export default App1;