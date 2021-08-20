import React, { useEffect, useReducer } from "react";
import axios from "axios";

import CoinsContext from "./CoinsContext";
import reducer from "./CoinsReducer";

let url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

const CoinsState = (props) => {
  const initialState = {
    coins: [],
    search: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: "SET_COINS", payload: res.data });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDispatch = (type, payload) => {
    dispatch({ type: type, payload: payload });
  };

  return (
    <CoinsContext.Provider value={{ state, handleDispatch }}>
      {props.children}
    </CoinsContext.Provider>
  );
};

export default CoinsState;
