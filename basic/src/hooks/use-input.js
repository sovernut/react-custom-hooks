import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setenteredValue] = useState(""); // use state you can reset value
  const [isTouched, setisTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const InputChangeHandler = (event) => {
    setenteredValue(event.target.value);
  };

  const InputBlurHandler = (event) => {
    setisTouched(true);
  };

  const reset = () => {
    setenteredValue("");
    setisTouched(false);
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    InputBlurHandler,
    InputChangeHandler,
    reset
  };
};

export default useInput;
