import React, { useContext } from "react";
import CoinsContext from "../context/CoinsContext";
import useDarkMode from "../customHooks/useDarkMode";
import { BsMoon, BsSun } from "react-icons/bs";

const Header = () => {
  const { state } = useContext(CoinsContext);
  console.log(state.coins);
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className=" w-full text-right flex flex-col	justify-between pr-6 ">
      <div className="flex justify-end font-montserrat ">
        <div className="flex flex-col md:flex-row pr-6 pt-2 text-sm">
          <div>
            <span className="pr-2 text-gray-600 dark:text-gray-100 font-semibold">
              Market Cap:
            </span>
            <span className="text-blue-700 dark:text-regal-purple">
              $
              {state.coins.length > 0
                ? state.coins
                    .reduce((sum, coin) => sum + coin.market_cap, 0)
                    .toLocaleString()
                : 0}
            </span>
          </div>
          <div className="md:pl-4">
            <span className="pr-2 text-gray-600 dark:text-gray-100 font-semibold">
              24h Vol:
            </span>
            <span className="text-blue-700 dark:text-regal-purple">
              $
              {state.coins.length > 0
                ? state.coins
                    .reduce((sum, coin) => sum + coin.total_volume, 0)
                    .toLocaleString()
                : 0}
            </span>
          </div>
        </div>
        <div className="pt-2">
          <span
            className="w-8 dark:text-white  transition duration-500 text-2xl cursor-pointer text-right	"
            onClick={() => {
              setTheme(colorTheme);
              console.log("entra");
            }}
          >
            {colorTheme === "light" ? <BsMoon /> : <BsSun />}
          </span>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center ml-4">
          <img src="../images/logobtc.png" alt="logo" className="w-12 h-16" />
          <h1 className="dark:text-gray-300 text-black font-josefin text-xl pl-4">
            Crypto Prices
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
