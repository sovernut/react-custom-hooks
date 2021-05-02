import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setenteredName] = useState(""); // use state you can reset value
  const [enteredNameTouched, setenteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setenteredName(event.target.value);
    // if (event.target.value.trim() !== "") { // using "event.target.value" because state is not set immediatly (it scheduled for change) if using enterdname it will use lastest value
    //   setenteredNameIsValid(true);
    //   return;
    // }
  };

  const nameInputBlurHandler = (event) => {
    setenteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setenteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setenteredName(""); // here useState allow you to reset input
    setenteredNameTouched(false);
    // const enteredValue = inputRef.current.value;
    // inputRef.current.value = '' // this can reset value but not recommended!
    // console.log(enteredValue);
  };

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name can't be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
