import { Meta, StoryObj } from "@storybook/react";

import { CalculatorForm, CalculatorFormProps } from ".";

export default {
  title: "Organisms/CalculatorForm",
  component: CalculatorForm,
  args: {},
} as Meta<CalculatorFormProps>;

export const Default: StoryObj<CalculatorFormProps> = {
  args: {},
};
