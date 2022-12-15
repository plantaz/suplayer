import ReactLoading from "react-loading";

import { Logo } from "@atoms";
import { CalculatorForm, ShipsInfinityScroll } from "@organisms";

import { useStarShips } from "./hooks/useStarShips";
import { homeStyle } from "./style";

export const Home = (): JSX.Element => {
  const {
    error,
    setError,
    getShips,
    starShipsCalculation,
    setValueToCalculate,
    hasMore,
    getMoreShips,
    loading,
  } = useStarShips();
  const hasItems = starShipsCalculation.length > 0;

  return (
    <div className={homeStyle()}>
      <Logo />
      <CalculatorForm
        onClick={getShips}
        onChange={(e) => {
          setError(null);
          setValueToCalculate(Number(e.target.value));
        }}
        error={error}
      />
      {loading && <ReactLoading type='spin' />}
      {hasItems && (
        <ShipsInfinityScroll
          shipsInfos={starShipsCalculation}
          hasMore={hasMore}
          getMoreShips={getMoreShips}
        />
      )}
    </div>
  );
};
