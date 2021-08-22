import React from "react";
import useDarkMode from "../customHooks/useDarkMode";
import { BsMoon, BsSun } from "react-icons/bs";

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className=" w-full text-right flex	justify-end pr-6 pt-4 ">
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
  );
};

export default Header;
