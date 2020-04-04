const initialState = {
  age: 20
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGE_UP":
      return {
        ...state,
        age: state.age + action.payload,
        loading: !state.loading
      };

    case "AGE_DOWN":
      return {
        ...state,
        age: state.age - action.payload
      };
    case "LOADING":
      return {
        ...state,
        loading: true
      };
    default:
      return { ...state };
  }
};

export default reducer;
