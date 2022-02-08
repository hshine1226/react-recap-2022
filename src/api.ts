import axios from "axios";

const BASE_URL = "https://api.coinpaprika.com/v1";

export async function fetchCoins() {
  return axios.get(`${BASE_URL}/coins`).then((response) => response.data);
}

export async function fetchCoinInfo(coinId: string | undefined) {
  return axios
    .get(`${BASE_URL}/coins/${coinId}`)
    .then((response) => response.data);
}

export async function fetchCoinTickers(coinId: string | undefined) {
  return axios
    .get(`${BASE_URL}/tickers/${coinId}`)
    .then((response) => response.data);
}

export async function fetchCoinHistory(coinId: string | undefined) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2; // 2주전 데이터까지 조회
  return axios
    .get(`${BASE_URL}/coins/${coinId}/ohlcv/historical`, {
      params: { start: startDate, end: endDate },
    })
    .then((response) => response.data);
}
