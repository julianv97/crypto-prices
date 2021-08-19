import React, { useReducer } from "react";

import CoinsContext from "./CoinsContext";
import reducer from "./CoinsReducer";

const CoinsState = (props) => {
  const defaultState = {
    coins: [],
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleDispatch = (type, payload) => {
    dispatch({
      type: type,
      payload: payload,
    });
  };

  return (
    <CoinsContext.Provider value={{ state, handleDispatch }}>
      {props.children}
    </CoinsContext.Provider>
  );
};

export default CoinsState;
