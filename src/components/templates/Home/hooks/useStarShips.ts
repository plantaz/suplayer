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

  const hasMore = useMemo(() => {
    return starShips[starShips.length - 1]?.next !== null;
  }, [starShips]);

  const getShips = async () => {
    const url = "/starships";

    try {
      setLoading(true);
      const response = await http.get<ResponseStarShips>(url);
      setStarShips([response.data]);
    } catch (error: Error | any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getMoreShips = async () => {
    if (hasMore) {
      const lastItem = starShips[starShips.length - 1]
        ? starShips.length - 1
        : 0;
      const page = starShips[lastItem]?.next?.split("=")[1];
      const url = `/starships/?page=${page}`;

      try {
        setLoading(true);
        const response = await http.get<ResponseStarShips>(url);
        setStarShips([...starShips, response.data]);
      } catch (error: Error | any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };

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
    const starShipsCalculation: {
      name: string;
      stops: number;
    }[] = [];
    starShips.forEach(({ results }) => {
      return results.forEach((starShip) => {
        const { MGLT, consumables, name } = starShip;
        const stops = handleCalculateStops(valueToCalculate, MGLT, consumables);

        starShipsCalculation.push({
          name,
          stops,
        });
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
    getMoreShips,
    hasMore,
    setValueToCalculate,
  };
};
