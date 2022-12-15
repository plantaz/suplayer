import { InputContainer, ButtonContainer } from "@atoms";
import React from "react";
import { calculatorFormStyle } from "./style";

export type CalculatorFormProps = {
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: Error | null;
};

export const CalculatorForm = ({
  onClick,
  onChange,
  error,
}: CalculatorFormProps): JSX.Element => {
  return (
    <div className={calculatorFormStyle()}>
      <InputContainer
        error={error}
        type='number'
        placeholder='Type the distance'
        onChange={onChange}
      />
      <ButtonContainer onClick={onClick}>Calculate</ButtonContainer>
    </div>
  );
};
