import InfiniteScroll from "react-infinite-scroll-component";

import { ShipStopsInfos } from "@molecules";

export type ShipsInfinityScrollProps = {
  shipsInfos: {
    name: string;
    stops: number | string;
  }[];
};

export const ShipsInfinityScroll = ({
  shipsInfos,
}: ShipsInfinityScrollProps): JSX.Element => {
  return (
    <InfiniteScroll
      dataLength={shipsInfos.length}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      next={() => {}}>
      <div className='grip gap-4'>
        {shipsInfos.map((shipInfo) => (
          <ShipStopsInfos
            key={shipInfo.name}
            name={shipInfo.name}
            stops={shipInfo.stops}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};
