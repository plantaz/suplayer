import { Meta, StoryObj } from "@storybook/react";

import { ShipStopsInfos, ShipStopsInfosProps } from ".";

export default {
  title: "Molecules/ShipStopsInfos",
  component: ShipStopsInfos,
  args: {
    name: "Millennium Falcon",
    stops: 2,
  },
} as Meta<ShipStopsInfosProps>;

export const Default: StoryObj<ShipStopsInfosProps> = {
  args: {},
};
