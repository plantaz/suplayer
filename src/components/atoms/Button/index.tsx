export type ButtonProps = {
  children?: React.ReactNode;
};

export const Button = ({ children }: ButtonProps): JSX.Element => {
  return <button>{children}</button>;
};
