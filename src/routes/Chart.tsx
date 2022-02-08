import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";

interface IHistoryData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: { coinId: string | undefined }) {
  const { isLoading, data } = useQuery<IHistoryData[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexCharts
          type="line"
          series={[
            {
              name: "종가",
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            markers: { size: 1 },
            theme: { mode: "dark" },
            chart: {
              toolbar: { show: false },
              background: "transparent",
            },
            stroke: { curve: "smooth" },
            xaxis: {
              categories: data?.map((priceData) => priceData.time_close),
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
