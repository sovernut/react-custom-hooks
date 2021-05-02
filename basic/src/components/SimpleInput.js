import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setenteredName] = useState(""); // use state you can reset value
  const [enteredNameTouched, setenteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const [enteredEmail, setenteredEmail] = useState(""); // use state you can reset value
  const [enteredEmailTouched, setenteredEmailTouched] = useState(false);
  const enteredEmailIsValid = enteredEmail.indexOf("@") >= 0;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const formIsValid = !(nameInputIsInvalid || emailInputIsInvalid)

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

  const emailInputChangeHandler = (event) => {
    setenteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setenteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setenteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setenteredName(""); // here useState allow you to reset input
    setenteredEmail("")
    setenteredNameTouched(false);
    setenteredEmailTouched(false);
    // const enteredValue = inputRef.current.value;
    // inputRef.current.value = '' // this can reset value but not recommended!
    // console.log(enteredValue);
  };

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailInputIsInvalid
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
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must correct</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
