import DisplayCalculator from "../components/atoms/DisplayCalculator";
import Keypad from "../components/molecules/Keypad";
import Button from "../components/atoms/Button";
import { useCalculator } from "../hooks/useCalculator";

type Props = {
  goHome: () => void;
};

const CalculatorPage = ({ goHome }: Props) => {
  const { display, append, clear, calculate } = useCalculator();

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-semibold">Calculator</h1>

      <DisplayCalculator value={display} />

      <Keypad
        onAppend={append}
        onClear={clear}
        onCalculate={calculate}
      />

      <Button text="Back" onClick={goHome} />
    </div>
  );
};

export default CalculatorPage;
