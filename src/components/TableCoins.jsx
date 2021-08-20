import React, { useState, useContext, useEffect } from "react";
import CoinsContext from "../context/CoinsContext";

const currencies = ["USD", "EUR", "ARS", "CNY"];

const TableCoins = () => {
  const { state, handleDispatch } = useContext(CoinsContext);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");

  useEffect(() => {
    setFilteredCoins(() => {
      return state.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchCoin.toLowerCase())
      );
    });
  }, [state.coins, searchCoin]);

  return (
    <div>
      <h1>Search a coin</h1>
      <form action="" onSubmit={(e) => handleDispatch("PREVENT_DEFAULT", e)}>
        <input
          type="text"
          name=""
          id=""
          className="bg-red-300"
          onChange={(e) => setSearchCoin(e.target.value)}
        />
        <select
          onChange={(e) => {
            handleDispatch("CHANGE_CURRENCY", e.target.value);
          }}
        >
          {currencies.map((currency) => (
            <option value={currency} key={currency} >
              {currency}
            </option>
          ))}
        </select>
      </form>
      {filteredCoins.map((coin) => {
        return (
          <div key={coin.name} className="flex">
            <img src={coin.image} alt={coin.name} className="w-8 h-8"></img>
            <div>
            <span>{coin.name}</span>
            <span>
              {state.currency === "ARS"
                ? ((coin.current_price / 96.5) * 179).toFixed(2)
                : coin.current_price.toFixed(2)}
            </span>
            </div>
          </div>
        );
        //CARTEL CUANDO NO ENCUENTRA LA MONEDA
      })}
    </div>
  );
};

export default React.memo(TableCoins);
