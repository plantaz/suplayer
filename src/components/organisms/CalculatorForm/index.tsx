import { InputContainer, ButtonContainer } from "@atoms";
import React from "react";
import { calculatorFormStyle } from "./style";

export type CalculatorFormProps = {
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CalculatorForm = ({
  onClick,
  onChange,
}: CalculatorFormProps): JSX.Element => {
  return (
    <div className={calculatorFormStyle()}>
      <InputContainer
        type='number'
        placeholder='Type the distance'
        onChange={onChange}
      />
      <ButtonContainer onClick={onClick}>Calculate</ButtonContainer>
    </div>
  );
};
