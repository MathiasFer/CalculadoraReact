import Button from "../atoms/Button";

type Props = {
  onAppend: (value: string) => void;
  onClear: () => void;
  onCalculate: () => void;
};

const Keypad = ({ onAppend, onClear, onCalculate }: Props) => {
  const buttons = [
    "C", "/", "*", "-",
    "7", "8", "9", "+",
    "4", "5", "6", "=",
    "1", "2", "3",
    "0", "."
  ];

  return (
    <div className="grid grid-cols-4 gap-2 w-64">

      {buttons.map((btn, index) => {
        const key = `keypad-${index}-${btn}`;
        if (btn === "C") {
          return <Button key={key} text={btn} onClick={onClear} />;
        }

        if (btn === "=") {
          return (
            <Button
              key={key}
              text={btn}
              onClick={onCalculate}
              className="bg-black text-white row-span-2"
            />
          );
        }

        return (
          <Button
            key={key}
            text={btn}
            onClick={() => onAppend(btn)}
            className={btn === "0" ? "col-span-2" : ""}
          />
        );
      })}
    </div>
  );
};

export default Keypad;