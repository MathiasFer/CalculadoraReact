import { useState } from "react";

export const useSum = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const res = Number(num1) + Number(num2);
    setResult(res);
    alert(`The result is ${res}`);
  };

  return {
    num1,
    num2,
    setNum1,
    setNum2,
    result,
    calculate,
  };
};