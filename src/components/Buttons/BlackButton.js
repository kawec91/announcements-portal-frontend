import React from "react";

const BlackButton = ({ text }) => {
  return (
    <button type="submit" className="px-6 py-2 bg-black text-white rounded-md">
      {text}
    </button>
  );
};

export default BlackButton;
