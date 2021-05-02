import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    InputChangeHandler: nameInputChangeHandler,
    InputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    InputChangeHandler: lastNameInputChangeHandler,
    InputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    InputChangeHandler: emailInputChangeHandler,
    InputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((val) => val.includes("@"));

  const isFormValid = enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

  const formSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmit}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
            type="text"
            id="name"
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
            type="text"
            id="name"
          />
          {lastNameInputHasError && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          type="text"
          id="name"
        />
        {emailInputHasError && (
            <p className="error-text">Email must contain "@"</p>
          )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
