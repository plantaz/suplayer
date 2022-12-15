import { Logo } from "@atoms";
import { CalculatorForm, ShipsInfinityScroll } from "@organisms";

import { useStarShips } from "./hooks/useStarShips";
import { homeStyle } from "./style";

export const Home = (): JSX.Element => {
  const {
    error,
    loading,
    getShips,
    starShipsCalculation,
    setValueToCalculate,
    hasMore,
    getMoreShips,
  } = useStarShips();

  return (
    <div className={homeStyle()}>
      <Logo />
      <CalculatorForm
        onClick={getShips}
        onChange={(e) => {
          setValueToCalculate(Number(e.target.value));
        }}
      />
      <ShipsInfinityScroll
        shipsInfos={starShipsCalculation}
        hasMore={hasMore}
        getMoreShips={getMoreShips}
      />
    </div>
  );
};
