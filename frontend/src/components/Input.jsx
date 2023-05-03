import React, { useEffect, useRef } from "react";

const Input = ({ isFocused = false, type = "text", ...props }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input
        {...props}
        className="transition border-slate-600 duration-300 w-full focus:outline-none focus:ring px-6 py-2 focus:ring-blue-200 focus:border-blue-400 shadow-sm rounded-lg
        my-1 text-sm font-light"
        type={type}
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
