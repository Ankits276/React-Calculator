import React from "react";

const Button = (props: any) => {
  const {name, label, placeholder, onclick, value} = props;

  return (
    <>
      <label>{label}</label>
      <button
        name={name}
        placeholder={placeholder}
        onClick={onclick}
        value={value}
      ></button>
    </>
  );
};
export default Button;
