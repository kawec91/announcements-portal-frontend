import React from "react";

const OutlineButton = ({ title, handlePress }) => {
  return (
    <button
      className="py-2 px-6 border-black border-[1px] rounded-md hover:bg-black hover:text-white duration-150"
      onClick={() => {
        handlePress();
      }}
    >
      {title}
    </button>
  );
};

export default OutlineButton;
