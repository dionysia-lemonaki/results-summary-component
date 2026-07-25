import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-navy-950 p-4 rounded-full text-white text-lg font-bold hover:bg-linear-to-br hover:from-violet-400 hover:to-blue-500 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-dotted focus-visible:outline-blue-800"
    >
      {children}
    </button>
  );
};

export default Button;
