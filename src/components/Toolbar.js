// Toolbar.js
import React from "react";

const Toolbar = ({ children }) => {
  return (
    <div style={{ borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
      {children}
    </div>
  );
};

export default Toolbar;
