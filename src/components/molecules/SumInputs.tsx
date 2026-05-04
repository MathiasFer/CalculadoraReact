import Input from "../atoms/Input";

type Props = {
  num1: string;
  num2: string;
  setNum1: (value: string) => void;
  setNum2: (value: string) => void;
};

const SumInputs = ({ num1, num2, setNum1, setNum2 }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <Input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <Input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
    </div>
  );
};

export default SumInputs;