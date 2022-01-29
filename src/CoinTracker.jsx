import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState("");
  const [coinName, setCoinName] = useState("");
  const [coinCount, setCoinCount] = useState(0);
  const [isCoinSelect, setIsCoinSelect] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [coinPrice, setCoinPrice] = useState(0);

  useEffect(() => {
    const getCoinTickers = async () => {
      fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setCoins(response);
          setLoading(false);
        });
    };
    getCoinTickers();
  }, []);

  useEffect(() => {
    if (dollars ? !isNaN(dollars) : false) {
      setInputDisabled(false);
    } else {
      setInputDisabled(true);
    }
    setCoinCount(dollars / coinPrice);
  }, [coinPrice, dollars]);

  const onChange = (event) => {
    setDollars(event.target.value);
  };

  const onClick = (event) => {
    setCoinPrice(event.target.value);
    setIsCoinSelect(true);
  };

  return (
    <div>
      <h1>This is Coin Tracker({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <div>
            <label htmlFor="dollars">How much do you have dollars? </label>
            <input
              id="dollars"
              placeholder="Type here"
              value={dollars}
              onChange={onChange}
            ></input>
          </div>
          <div>
            <select onChange={onClick} disabled={inputDisabled}>
              <option>Select the coin</option>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.quotes["USD"].price}>
                  {coin.name} ({coin.symbol}): ${coin.quotes["USD"].price} USD
                </option>
              ))}
            </select>
          </div>
          {isCoinSelect ? (
            <strong>
              You will get the {coinCount} {coinName} coin
            </strong>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default CoinTracker;
