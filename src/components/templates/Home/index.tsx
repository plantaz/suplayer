import { Logo } from "@atoms";
import { CalculatorForm } from "@organisms";

import { useStarShips } from "./hooks/useStarShips";
import { homeStyle } from "./style";

export const Home = (): JSX.Element => {
  const {
    starShips,
    error,
    loading,
    getShips,
    starShipsCalculation,
    setValueToCalculate,
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
    </div>
  );
};
