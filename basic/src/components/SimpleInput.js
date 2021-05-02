import { useState, useRef, useEffect } from "react";
const SimpleInput = (props) => {
  const inputRef = useRef();
  const [enteredName, setenteredName] = useState(""); // use state you can reset value
  const [enteredNameIsValid, setenteredNameIsValid] = useState(false);
  const [enteredNameTouched, setenteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setenteredName(event.target.value);
  };

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("entername is valid !!");
    }
  }, [enteredNameIsValid]);

  const nameInputBlurHandler = (event) => {
    setenteredNameTouched(true);
    if (enteredName.trim() == "") {
      setenteredNameIsValid(false);
      return;
    }
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setenteredNameTouched(true)
    if (enteredName.trim() == "") {
      setenteredNameIsValid(false);
      return;
    }
    console.log(enteredName);
    setenteredNameIsValid(true);
    setenteredName(""); // here useState allow you to reset input

    // const enteredValue = inputRef.current.value;
    // inputRef.current.value = '' // this can reset value but not recommended!
    // console.log(enteredValue);
  };
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputRef}
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
