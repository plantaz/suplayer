import { Text } from "@atoms";
import Image from "next/image";
import { shipStopsInfosStyle } from "./style";

export type ShipStopsInfosProps = {
  name: string;
  stops: number | string;
};

export const ShipStopsInfos = ({
  name,
  stops,
}: ShipStopsInfosProps): JSX.Element => {
  return (
    <div className={shipStopsInfosStyle()}>
      <Image
        src='/starships-icons/ship-1.png'
        width={180}
        height={120}
        alt='Ship Icon'
      />

      <Text size='bigger'>{name}</Text>
      <Text>{`Stops: ${stops}`}</Text>
    </div>
  );
};
