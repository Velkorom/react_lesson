import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./Homework03.css";

const Homework03 = () => {
  return (
    <div className="homework03-container">
      <Input
        name="username"
        type="text"
        placeholder="Enter your name"
        label="Name"
      />
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
      />
      <Button text="Submit" onClick={() => alert("Submitted!")} />
    </div>
  );
};

export default Homework03;