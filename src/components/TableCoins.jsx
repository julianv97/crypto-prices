import React, { useState, useContext, useEffect } from "react";
import CoinsContext from "../context/CoinsContext";
import CoinRow from "./CoinRow";

const currencies = ["USD", "EUR", "ARS", "CNY"];
const titles = [
  "#",
  "Coin",
  "Price",
  "24h %",
  "24h Volume",
  "Market Cap.",
  "Circulating Supply",
];

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
        className="flex flex-col pb-6 pt-4 md:pt-0 justify-center items-center  w-full min-w-max"
      >
        <div className="flex items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search a coin"
            className="focus:ring-indigo-500 focus:border-indigo-500 block  pl-7 pr-12 sm:text-sm border-gray-300  rounded-md dark:bg-gray-500 dark:border-regal-purple dark:text-gray-50 dark:placeholder-gray-100 "
            onChange={(e) => setSearchCoin(e.target.value)}
          />
          <select
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md dark:text-gray-50 hover:text-gray-800 "
            onChange={(e) => {
              handleDispatch("CHANGE_CURRENCY", e.target.value);
            }}
          >
            {currencies.map((currency) => (
              <option
                value={currency}
                key={currency}
                className="dark:text-gray-900 bg-gray-300 dark:bg-regal-purple "
              >
                {currency}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full   border-t border-gray-200   table-auto border-collapse ">
          <thead className="bg-gray-100 sticky top-0 h-full  w-full divide-y divide-gray-200 border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900 ">
            <tr className="h-full ">
              {titles.map((title, i) => (
                <td
                  key={i}
                  className="px-6 py-3 text-left text-xs h-full font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider "
                >
                  {title}
                </td>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200  dark:divide-gray-500 dark:bg-gray-900 dark:text-gray-200 ">
            {filteredCoins.map((coin) => (
              <CoinRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(TableCoins);
