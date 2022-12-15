import { VariantProps } from "class-variance-authority";
import { input } from "./style";

export type InputContainerProps = {
  type: HTMLInputElement["type"];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: Error | null;
  placeholder?: string;
} & VariantProps<typeof input>;

export const InputContainer = ({
  type,
  placeholder,
  onChange,
  error,
}: InputContainerProps): JSX.Element => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={input()}
        onChange={onChange}
      />
      <p className='text-red-600 text-center mt-4'>{error?.message}</p>
    </div>
  );
};
