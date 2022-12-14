import { cva } from "class-variance-authority";

export const button = cva([""], {
  variants: {
    color: {
      primary: "bg-white",
    },
    size: {
      small: "w-32 h-12",
    },
    border: {
      rounded: "rounded-3xl",
    },
  },

  defaultVariants: {
    color: "primary",
    size: "small",
    border: "rounded",
  },
});
