import { useState } from "react";

function App2({ goHome }) {
  const [display, setDisplay] = useState("");

  function append(value) {
    setDisplay((prev) => prev + value);
  }

  function clearDisplay() {
    setDisplay("");
  }

  function calculate() {
    try {
      const res = eval(display);
      setDisplay(res.toString());
    } catch {
      setDisplay("error");
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">

      <h1 className="text-2xl font-semibold">
        Calculator
      </h1>

      {/* display */}
      <input
        type="text"
        value={display}
        readOnly
        className="border p-2 rounded w-64 text-right text-lg"
      />

      {/* buttons */}
      <div className="grid grid-cols-4 gap-2 w-64">

        {/* row 1 */}
        <button onClick={clearDisplay} className="bg-gray-300 p-3 rounded">C</button>
        <button onClick={() => append("/")} className="bg-gray-200 p-3 rounded">/</button>
        <button onClick={() => append("*")} className="bg-gray-200 p-3 rounded">*</button>
        <button onClick={() => append("-")} className="bg-gray-200 p-3 rounded">-</button>

        {/* row 2 */}
        <button onClick={() => append("7")} className="bg-gray-100 p-3 rounded">7</button>
        <button onClick={() => append("8")} className="bg-gray-100 p-3 rounded">8</button>
        <button onClick={() => append("9")} className="bg-gray-100 p-3 rounded">9</button>
        <button onClick={() => append("+")} className="bg-gray-200 p-3 rounded">+</button>

        {/* row 3 */}
        <button onClick={() => append("4")} className="bg-gray-100 p-3 rounded">4</button>
        <button onClick={() => append("5")} className="bg-gray-100 p-3 rounded">5</button>
        <button onClick={() => append("6")} className="bg-gray-100 p-3 rounded">6</button>
        <button onClick={calculate} className="bg-black text-white p-3 rounded row-span-2">=</button>

        {/* row 4 */}
        <button onClick={() => append("1")} className="bg-gray-100 p-3 rounded">1</button>
        <button onClick={() => append("2")} className="bg-gray-100 p-3 rounded">2</button>
        <button onClick={() => append("3")} className="bg-gray-100 p-3 rounded">3</button>

        {/* row 5 */}
        <button onClick={() => append("0")} className="bg-gray-100 p-3 rounded col-span-2">0</button>
        <button onClick={() => append(".")} className="bg-gray-100 p-3 rounded">.</button>

      </div>

      <button onClick={goHome} className="text-sm text-gray-500">
        Back
      </button>

    </div>
  );
}

export default App2;
