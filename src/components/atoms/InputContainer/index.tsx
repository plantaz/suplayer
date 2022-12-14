import { VariantProps } from "class-variance-authority";
import { input } from "./style";

export type InputContainerProps = {
  type: HTMLInputElement["type"];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
} & VariantProps<typeof input>;

export const InputContainer = ({
  type,
  placeholder,
  onChange,
}: InputContainerProps): JSX.Element => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={input()}
      onChange={onChange}
    />
  );
};
