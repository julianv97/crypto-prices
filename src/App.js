import React from "react";
import Header from "./components/Header";
import TableCoins from "./components/TableCoins";

import CoinsState from "./context/CoinsState";

function App() {
  return (
    <CoinsState>
      <div className="dark:bg-gray-800 w-full h-full min-h-screen transition duration-500 ">

      <Header />
      <TableCoins />
      </div>
    </CoinsState>
  );
}

export default App;
