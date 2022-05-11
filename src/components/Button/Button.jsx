import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { buttonText } = props;
  return <button className="button primary">{buttonText}</button>;
};

export default Button;
