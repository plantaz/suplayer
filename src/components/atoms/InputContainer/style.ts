import { cva } from "class-variance-authority";

export const input = cva(["border-2 bg-transparent p-3 rounded-3xl"], {
  variants: {
    color: {
      primary: "border-white text-white",
    },

    size: {
      sm: "w-64",
    },
  },

  defaultVariants: {
    color: "primary",
    size: "sm",
  },
});
