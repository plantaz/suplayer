import { VariantProps } from "class-variance-authority";
import { input } from "./style";

export type InputContainerProps = {
  type: HTMLInputElement["type"];
  upperCase?: boolean;
  placeholder?: string;
  children?: React.ReactNode;
} & VariantProps<typeof input>;

export const InputContainer = ({
  children,
  type,
  placeholder,
}: InputContainerProps): JSX.Element => {
  return <input type={type} placeholder={placeholder} className={input()} />;
};
