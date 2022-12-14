import { VariantProps } from "class-variance-authority";

import { text } from "./style";

export type TextProps = {
  children?: React.ReactNode;
} & VariantProps<typeof text>;

export const Text = ({ children }: TextProps): JSX.Element => {
  return <p className={text()}>{children}</p>;
};
