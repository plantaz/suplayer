import { cva } from "class-variance-authority";

export const text = cva(["font-bold"], {
  variants: {
    color: {
      primary: "text-white",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
      bigger: "text-2xl",
    },
  },

  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});
