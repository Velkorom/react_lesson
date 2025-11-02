import React from "react";
import "./Input.css";

const Input = ({ name, type = "text", placeholder, label }) => {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="custom-input"
      />
    </div>
  );
};

export default Input;