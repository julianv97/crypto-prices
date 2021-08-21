import React, { useContext } from "react";
import CoinsContext from "../context/CoinsContext";

const CoinRow = ({ coin }) => {
  const { state } = useContext(CoinsContext);
  return (
    <tr key={coin.name}>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-8 w-8">
            <img className="h-8 w-8 rounded-full" src={coin.image} alt="" />
          </div>
          <div className="ml-4 flex ">
            <div className="text-sm font-medium text-gray-900">{coin.name}</div>
            <div className="text-sm text-gray-500">{coin.symbol}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {state.currency === "ARS"
            ? ((coin.current_price / 96.5) * 179).toFixed(2)
            : coin.current_price.toFixed(2)}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {coin.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {coin.name}
      </td>
    </tr>
  );
};

export default CoinRow;
