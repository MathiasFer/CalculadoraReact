type Props = {
  value: string;
};

const DisplayCalculator = ({ value }: Props) => {
  return (
    <input
      type="text"
      value={value}
      readOnly
      className="border p-2 rounded w-64 text-right text-lg"
    />
  );
};

export default DisplayCalculator;