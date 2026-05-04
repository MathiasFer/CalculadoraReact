import type { ChangeEvent } from "react";

type Props = {
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({ type = "text", value, onChange, placeholder }: Props) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border p-2 rounded w-56 text-center"
    />
  );
};

export default Input;