import React, { useState, useContext, useEffect } from "react";
import CoinsContext from "../context/CoinsContext";
import CoinRow from "./CoinRow";

const currencies = ["USD", "EUR", "ARS", "CNY"];
const titles = ["Coin", "Price", "Price Change", "24h Volume", "Market-Cap"];

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
      <form
        action=""
        onSubmit={(e) => handleDispatch("PREVENT_DEFAULT", e)}
        className="w-96 flex"
      >
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Search a coin:
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="focus:ring-indigo-500 focus:border-indigo-500 block pl-7 pr-12 border-gray-300 rounded-md w-full"
            onChange={(e) => setSearchCoin(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500  rounded-md"
              onChange={(e) => {
                handleDispatch("CHANGE_CURRENCY", e.target.value);
              }}
            >
              {currencies.map((currency) => (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>

      <table className="min-w-full divide-y divide-gray-200 table-fixed">
        <thead className="">
          <tr className="text-sm sticky top-0 bg-gray-50  ">
            {titles.map((title, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {filteredCoins.map((coin) => (
            <CoinRow coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(TableCoins);
