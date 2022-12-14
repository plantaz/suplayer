export type InputProps = {
  type: HTMLInputElement["type"];
  placeholder?: string;
  children?: React.ReactNode;
};

export const Input = ({
  children,
  type,
  placeholder,
}: InputProps): JSX.Element => {
  return <input type={type} placeholder={placeholder} />;
};
