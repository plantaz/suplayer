import InfiniteScroll from "react-infinite-scroll-component";
import ReactLoading from "react-loading";

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
      loader={<ReactLoading type='spin' className='mx-auto mt-10' />}
      next={getMoreShips}>
      <div className='grid gap-10 md:grid-cols-3 lg:grid-cols-4'>
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
