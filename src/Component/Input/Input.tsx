import React from "react";
export const Input = (props: any) => {
  const {label, placeholder, onchange, name, type, value} = props;
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={onchange}
        onChange={onchange}
        name={name}
        value={value}
      />
    </div>
  );
};
export default Input;
