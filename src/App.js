import React,{Suspense, lazy} from "react";
import Header from "./components/Header";
/* import TableCoins from "./components/TableCoins"; */

import CoinsState from "./context/CoinsState";
const TableCoins = lazy(()=>import('./components/TableCoins'))


function App() {
  return (
    <CoinsState>
      <div className="dark:bg-gray-800 w-full h-full min-h-screen transition duration-500 ">
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
        <TableCoins />
        </Suspense>
      </div>
    </CoinsState>
  );
}

export default App;
