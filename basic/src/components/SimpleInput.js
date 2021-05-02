import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const inputRef = useRef();
  const [enteredName, setenteredName] = useState(""); // use state you can reset value

  const nameInputChangeHandler = (event) => {
    setenteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    setenteredName('') // here useState allow you to reset input 

    // const enteredValue = inputRef.current.value;
    // inputRef.current.value = '' // this can reset value but not recommended!
    // console.log(enteredValue);
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
