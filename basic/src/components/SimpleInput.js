import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const inputRef = useRef();
  const [enteredName, setenteredName] = useState(""); // use state you can reset value
  const [enteredNameValid, setEnteredNameValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setenteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() == "") {
      setEnteredNameValid(false);
      return;
    }
    console.log(enteredName);
    setEnteredNameValid(true);
    setenteredName(""); // here useState allow you to reset input

    // const enteredValue = inputRef.current.value;
    // inputRef.current.value = '' // this can reset value but not recommended!
    // console.log(enteredValue);
  };

  const nameInputClasses = enteredNameValid
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
          value={enteredName}
        />
        {!enteredNameValid && <p className="error-text">Name can't be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
