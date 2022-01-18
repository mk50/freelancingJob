import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state = initialState, action) => {
  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: true };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return initialState;
  }
  return state;
};

const useInput = (validate, type = false) => {
  const [enteredInput, dispatch] = useReducer(inputReducer, initialState);

  let isValid = validate(enteredInput.value);

  const valueHasError = !isValid && enteredInput.isTouched;

  const inputChangeHandler = (e) => {
    if (type) {
      let currentOTPInput = e.target;
      //prettier-ignore
      let nextOTPInput = currentOTPInput.parentElement?.nextElementSibling?.children[0];
      if (nextOTPInput) {
        nextOTPInput.focus();
        dispatch({ type: "CHANGE", value: currentOTPInput.value });
      } else {
        dispatch({ type: "CHANGE", value: currentOTPInput.value });
      }
    } else {
      dispatch({ type: "CHANGE", value: e.target.value });
    }
  };
  const inputBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };
  const inputResetHandler = (e) => {
    dispatch({ type: "RESET" });
  };

  return {
    isValid,
    inputBlurHandler,
    inputChangeHandler,
    inputResetHandler,
    hasError: valueHasError,
    value: enteredInput.value,
  };
};

export default useInput;
