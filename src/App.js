import React from "react";
import TableCoins from "./components/TableCoins";

import CoinsState from "./context/CoinsState";

function App() {
  return (
    <CoinsState>
      <TableCoins />
    </CoinsState>
  );
}

export default App;
