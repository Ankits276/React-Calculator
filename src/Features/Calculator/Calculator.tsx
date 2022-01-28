import React from "react";
import Button from "../../Component/Button/Button";
import Input from "../../Component/Input/Input";
import "./Calculator.css";

const Calculator = () => {
  const _handleOnchange = () => {};
  const calculate = () => {};
  return (
    <div>
      <Input
        type="text"
        lable="Input"
        name="display_input"
        value="display_input"
        onChange={_handleOnchange}
      />
      <Input
        type="text"
        lable="Output"
        name="display_input"
        value="display_input"
        onChange={_handleOnchange}
      />
      <Button lable="+" name="plus" value="plus" onClick={calculate} />
      <Button lable="-" name="minus" value="minus" onClick={calculate} />
      <Button lable="*" name="multi" value="multi" onClick={calculate} />
      <Button lable="/" name="divide" value="divide" onClick={calculate} />
    </div>
  );
};
export default Calculator;
