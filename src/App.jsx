import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  function sumar() {
    const resultado = Number(num1) + Number(num2);
    alert("Resultado: " + resultado);
  }

  return (
    <div>
      <h1>Calculadora </h1>

      <label>number1:</label>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <label>number2:</label>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={sumar}>Sumar</button>
    </div>
  );
}

export default App;