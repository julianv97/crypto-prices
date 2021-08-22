import React, { useContext } from "react";
import CoinsContext from "../context/CoinsContext";

const CoinRow = ({ coin }) => {
  const { state } = useContext(CoinsContext);
  return (
    <tr className="font-montserrat">
      <td className=" w-6 px-6 py-4 whitespace-nowrap text-gray-500">
        {coin.market_cap_rank}
      </td>

      <td className="flex items-center w-60  py-4 whitespace-nowrap">
        <img src={coin.image} alt={coin.name} className="w-7 h-7" />
        <div className="flex flex-col lg:flex-row pl-2">
          <span>{coin.name}</span>
          <span className="uppercase text-gray-500 lg:ml-2">{coin.symbol}</span>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        $
        {state.currency === "ARS"
          ? ((coin.current_price / 96) * 180).toLocaleString()
          : coin.current_price.toLocaleString()}
      </td>

      <td
        className={`${
          coin.price_change_percentage_24h > 0
            ? "text-green-600"
            : "text-red-600"
        } px-6 py-4 whitespace-nowrap`}
      >
        {coin.price_change_percentage_24h.toLocaleString()}%
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        ${coin.total_volume.toLocaleString()}
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        ${coin.market_cap.toLocaleString()}
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        {coin.circulating_supply.toLocaleString()}
      </td>
    </tr>
  );
};

export default CoinRow;
