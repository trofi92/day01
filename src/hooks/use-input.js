import { useState } from "react";
const useInput = (validation) => {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    pw: "",
    cpw: "",
  });
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validation(enteredValue.email);
  const hasError = isTouched && !enteredValueIsValid;
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  const inputClasses = hasError
    ? "form-control invalid"
    : "form-control";

  const onBlurHandler = (e) => {
    setIsTouched(true);
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    const nextForm = {
      ...enteredValue,
      [e.target.name]: e.target.value,
    };
    setEnteredValue(nextForm);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (enteredValueIsValid) return;
    reset();
  };

  return {
    value: enteredValue,
    setEnteredValue: setEnteredValue,
    isValid: enteredValueIsValid,
    hasError,
    onBlurHandler,
    onChangeHandler,
    reset,
    inputClasses,
    submitFormHandler,
  };
};
export default useInput;
