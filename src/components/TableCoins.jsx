import React, { useContext } from "react";
import CoinsContext from "../context/CoinsContext";

const TableCoins = () => {
  const { state, handleDispatch } = useContext(CoinsContext);

  const filteredCoins = state.coins.filter((coin) =>
    coin.name.toLowerCase().includes(state.search.toLowerCase())
  );

  return (
    <div>
      <h1>Search a coin</h1>
      <form action="" onSubmit={(e) => handleDispatch("PREVENT_DEFAULT", e)}>
        <input
          type="text"
          name=""
          id=""
          className="bg-red-300"
          onChange={(e) => handleDispatch("SET_SEARCH", e.target.value)}
        />
      </form>
      {filteredCoins.map((coin) => {
        return (
          <div key={coin.id}>
            <span>{coin.name}</span>
            <span>{coin.current_price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TableCoins;
