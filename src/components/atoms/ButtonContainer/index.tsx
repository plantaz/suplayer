import { VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { button } from "./style";

export type ButtonContainerProps = {
  children?: React.ReactNode;
} & VariantProps<typeof button>;

export const ButtonContainer = ({
  children,
}: ButtonContainerProps): JSX.Element => {
  return (
    <motion.button whileTap={{ scale: 0.9 }} className={button()}>
      {children}
    </motion.button>
  );
};
