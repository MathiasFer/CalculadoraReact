import { useState } from "react";

function App() {
  // navigation state
  const [screen, setScreen] = useState("home");

  // simple calculator state
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // complex calculator state
  const [display, setDisplay] = useState("");

  // simple calc logic
  function handleSum() {
    const res = Number(num1) + Number(num2);
    setResult(res);
  }

  // complex calc logic
  function append(value) {
    setDisplay((prev) => prev + value); // safe update
  }

  function clearDisplay() {
    setDisplay("");
  }

  function calculate() {
    try {
      const res = eval(display); // for learning purposes only
      setDisplay(res.toString());
    } catch {
      setDisplay("Error");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      
      {/* HOME */}
      {screen === "home" && (
        <div>
          <h1>Home</h1>

          <button onClick={() => setScreen("simple")}>
            Simple Calculator
          </button>

          <br /><br />

          <button onClick={() => setScreen("complex")}>
            Complex Calculator
          </button>
        </div>
      )}

      {/* SIMPLE CALCULATOR */}
      {screen === "simple" && (
        <div>
          <h1>Simple Calculator</h1>

          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />

          <br /><br />

          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />

          <br /><br />

          <button onClick={handleSum}>Sum</button>

          <br /><br />

          {result !== null && <h2>Result: {result}</h2>}

          <br />

          <button onClick={() => setScreen("home")}>
            Back
          </button>
        </div>
      )}

      {/* COMPLEX CALCULATOR */}
      {screen === "complex" && (
        <div>
          <h1>Complex Calculator</h1>

          <input
            type="text"
            value={display}
            readOnly
            style={{ width: "220px", textAlign: "right", fontSize: "18px" }}
          />

          <br /><br />

          {/* numbers */}
          <div>
            {[1,2,3].map(n => (
              <button key={n} onClick={() => append(n.toString())}>{n}</button>
            ))}
          </div>
          <div>
            {[4,5,6].map(n => (
              <button key={n} onClick={() => append(n.toString())}>{n}</button>
            ))}
          </div>
          <div>
            {[7,8,9].map(n => (
              <button key={n} onClick={() => append(n.toString())}>{n}</button>
            ))}
          </div>
          <div>
            <button onClick={() => append("0")}>0</button>
          </div>

          <br />

          {/* operators */}
          <div>
            {["+", "-", "*", "/"].map(op => (
              <button key={op} onClick={() => append(op)}>{op}</button>
            ))}
          </div>

          <br />

          {/* actions */}
          <button onClick={calculate}>=</button>
          <button onClick={clearDisplay}>C</button>

          <br /><br />

          <button onClick={() => setScreen("home")}>
            Back
          </button>
        </div>
      )}

    </div>
  );
}

export default App;