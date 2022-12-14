import { useEffect, useMemo, useState } from "react";

import { http } from "@libs";

type StarShip = {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  url: string;
  created: string;
  edited: string;
};

type ResponseStarShips = {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarShip[];
};

type Units =
  | "day"
  | "days"
  | "week"
  | "weeks"
  | "month"
  | "months"
  | "year"
  | "years";

export const useStarShips = () => {
  const [valueToCalculate, setValueToCalculate] = useState<number>(0);
  const [starShips, setStarShips] = useState<ResponseStarShips[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const getShips = async () => {
    try {
      setLoading(true);
      const response = await http.get<ResponseStarShips>("/starships");
      setStarShips([response.data]);
    } catch (error: Error | any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getMoreShips = async (url: string) => {};

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCalculateStops = (
    distance: string | number,
    MGLT: string | number,
    consumables: string, // 2 days, 1 week, 1 month, 1 year
  ) => {
    const MGLTNumber = Number(MGLT);
    const numberHoursToTravel = Number(distance) / MGLTNumber / 24; // Convert hours to days;
    const consumablesNumber = handleConsumables(consumables);
    const stops = Math.floor(numberHoursToTravel / consumablesNumber);

    return stops;
  };

  const handleConsumables = (consumables: string) => {
    const consumablesArray = consumables.split(" ");
    const number = Number(consumablesArray[0]);
    const unit = consumablesArray[1] as Units;
    const unitsHashMap = {
      day: 1,
      days: 1,
      week: 7,
      weeks: 7,
      month: 30,
      months: 30,
      year: 365,
      years: 365,
    };

    return number * unitsHashMap[unit];
  };

  const starShipsCalculation = useMemo(() => {
    const starShipsCalculation = starShips.map(({ results }) => {
      return results.map((starShip) => {
        const { MGLT, consumables, name } = starShip;
        const stops = handleCalculateStops(valueToCalculate, MGLT, consumables);
        return {
          name,
          stops,
        };
      });
    });

    return starShipsCalculation;
  }, [handleCalculateStops, starShips, valueToCalculate]);

  return {
    starShips,
    starShipsCalculation,
    getShips,
    loading,
    error,
    setValueToCalculate,
  };
};
