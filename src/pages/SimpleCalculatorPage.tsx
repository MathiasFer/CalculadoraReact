import Button from "../components/atoms/Button";
import SumInputs from "../components/molecules/SumInputs";
import { useSum } from "../hooks/useSum";

type Props = {
  goHome: () => void;
};

const SimpleCalculatorPage = ({ goHome }: Props) => {
  const { num1, num2, setNum1, setNum2, result, calculate } = useSum();

  return (
    <div className="flex flex-col items-center gap-4">

      <h1 className="text-2xl font-semibold">
        Simple Calculator
      </h1>

      <SumInputs
        num1={num1}
        num2={num2}
        setNum1={setNum1}
        setNum2={setNum2}
      />

      <Button text="Sum" onClick={calculate} />

      {result !== null && (
        <p className="text-lg">
          Result: {result}
        </p>
      )}

      <Button text="Back" onClick={goHome} />

    </div>
  );
};

export default SimpleCalculatorPage;