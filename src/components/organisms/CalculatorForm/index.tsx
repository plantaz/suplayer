import { InputContainer, ButtonContainer } from "@atoms";
import { calculatorFormStyle } from "./style";

export type CalculatorFormProps = {
  id?: string;
};

export const CalculatorForm = ({ id }: CalculatorFormProps): JSX.Element => {
  return (
    <div className={calculatorFormStyle()}>
      <InputContainer type='number' placeholder='Type the distance' />
      <ButtonContainer>Calculate</ButtonContainer>
    </div>
  );
};
