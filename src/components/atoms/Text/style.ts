import { cva } from "class-variance-authority";

export const text = cva([], {
  variants: {
    color: {
      primary: "text-white",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
      bigger: "text-xl",
    },
  },

  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});
