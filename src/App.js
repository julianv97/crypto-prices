import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
/* import TableCoins from "./components/TableCoins"; */

import CoinsState from "./context/CoinsState";
const TableCoins = lazy(() => import("./components/TableCoins"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <CoinsState>
        <div className="dark:bg-gray-800 w-full h-full min-h-screen  ">
          <Header />
          <TableCoins />
        </div>
      </CoinsState>
    </Suspense>
  );
}

export default App;
