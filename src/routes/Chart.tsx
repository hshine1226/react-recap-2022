import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

function Chart({ coinId }: { coinId: string | undefined }) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return <h1>Chart!</h1>;
}

export default Chart;
