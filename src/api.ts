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
