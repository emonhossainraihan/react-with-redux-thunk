export const loading = () => {
  return {
    type: "LOADING"
  };
};

export const ageUpAsnc = val => {
  return { type: "AGE_UP", payload: val };
};

export const ageUp = val => {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(ageUpAsnc(val));
    }, 3000);
  };
};

export const ageDown = val => {
  return { type: "AGE_DOWN", payload: val };
};
