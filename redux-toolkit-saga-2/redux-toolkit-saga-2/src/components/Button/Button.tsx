interface ButtonProps {
  type?: string;
  addClassNames?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button = ({ type, addClassNames, onClick, children }: ButtonProps) => {
  let color = 'purple';

  if (type === 'error') color = 'red';
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-500 hover:bg-${color}-700 focus:outline-none py-3 px-6 text-white shadow rounded ${addClassNames}`}
    >
      {children}
    </button>
  );
};
