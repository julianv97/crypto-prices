const reducer = (state, action) => {
  if (action.type === "SET_COINS") {
    return { ...state, coins: action.payload };
  }

  if (action.type === "SET_SEARCH") {
    return { ...state, search: action.payload };
  }
};

export default reducer;
