import React from "react";

interface ButtonProps {
  className?: string;
  variant?: "orange" | "large";

  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <button
      className={`text-white no-underline inline-block ${
        variant === "orange" ? `bg-accent` : `bg-primary`
      } ${variant === "large" ? `py-5 px-8 text-xl` : `px-5 py-3`}${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
