import { useState } from "react";

export const useCalculator = () => {
  const [display, setDisplay] = useState("");

  const append = (value: string) => {
    setDisplay((prev) => prev + value);
  };

  const clear = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      const res = eval(display);
      setDisplay(res.toString());
    } catch {
      setDisplay("error");
    }
  };

  return {
    display,
    append,
    clear,
    calculate,
  };
};