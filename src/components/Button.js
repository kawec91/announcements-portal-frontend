// Button.js
import React from "react";

const Button = ({ active, onMouseDown, children }) => {
  return (
    <span
      onMouseDown={onMouseDown}
      className={`cursor-pointer p-2 ${
        active ? "border-2 border-black font-bold" : ""
      }`}
    >
      {children}
    </span>
  );
};

export default Button;
