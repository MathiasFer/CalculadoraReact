type Props = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button = ({ text, onClick, className = "" }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded bg-gray-200 hover:bg-gray-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;