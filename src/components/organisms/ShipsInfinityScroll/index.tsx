import InfiniteScroll from "react-infinite-scroll-component";

import { ShipStopsInfos } from "@molecules";

export type ShipsInfinityScrollProps = {
  shipsInfos: {
    name: string;
    stops: number | string;
  }[];
  hasMore: boolean;
  getMoreShips: () => void;
};

export const ShipsInfinityScroll = ({
  shipsInfos,
  hasMore,
  getMoreShips,
}: ShipsInfinityScrollProps): JSX.Element => {
  return (
    <InfiniteScroll
      dataLength={shipsInfos.length}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      next={getMoreShips}>
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
