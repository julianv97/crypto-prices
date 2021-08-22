import React, { useEffect, useReducer, useCallback } from "react";
import axios from "axios";

import CoinsContext from "./CoinsContext";
import reducer from "./CoinsReducer";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const CoinsState = (props) => {
  const initialState = {
    coins: [],
    currency: "usd",
    favCoins: getLocalStorage(),
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.currency}&order=market_cap_desc&per_page=20&page=1&sparkline=false`;

  const getData = useCallback(() => {
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: "SET_COINS", payload: res.data });
      })
      .catch((error) => console.log(error));
  }, [url]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(state.favCoins));
    getData();
    const interval = setInterval(() => {
      getData();
    }, 30000);
    return () => clearInterval(interval);
  }, [getData, state.favCoins]);

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
