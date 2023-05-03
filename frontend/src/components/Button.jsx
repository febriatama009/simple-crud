import clsx from "clsx";
import React from "react";

//props to receive passing data
const Button = ({
  className = "bg-green-600",
  children,
  text,
  type = "button",
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        `[&>svg]:w-5 [&>svg]:h-5 inline-flex justify-center whitespace-nowrap gap-x-2 items-center text-slate-50 px-4 py-2 shadow-none rounded-md my-3 text-sm`
      )}
    >
      {text || children}
    </button>
  );
};

export default Button;
// clsx berguna untuk membuat multifunction dalam 1 props
