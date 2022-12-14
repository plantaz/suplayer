import { Logo } from "@atoms";
import { CalculatorForm } from "@organisms";
import { homeStyle } from "./style";

export const Home = (): JSX.Element => {
  return (
    <div className={homeStyle()}>
      <Logo />
      <CalculatorForm />
    </div>
  );
};
