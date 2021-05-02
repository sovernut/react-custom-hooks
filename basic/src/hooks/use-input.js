import { useReducer } from "react";

const initState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  let type = action.type;
  if (type === "INPUT") {
    return { ...state, value: action.value };
  }
  if (type === "BLUR") {
    return { ...state, isTouched: true };
  }
  if (type === "RESET") {
    return initState;
  }
  return initState;
};

const useInput = (validateValue) => {
  const [state, dispatch] = useReducer(inputReducer, initState);

  const valueIsValid = validateValue(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const InputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const InputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return {
    value: state.value,
    isValid: valueIsValid,
    hasError,
    InputBlurHandler,
    InputChangeHandler,
    reset,
  };
};

export default useInput;
