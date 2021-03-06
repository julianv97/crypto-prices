const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COINS":
      return { ...state, coins: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "PREVENT_DEFAULT":
      action.payload.preventDefault();
      return { ...state };
    case "CHANGE_CURRENCY":
      return { ...state, currency: action.payload };
    default:
      throw new Error("no hay dispatch");
  }
};

export default reducer;
