import { useState } from "react";
const useInput = (validation) => {
  const [enteredValue, setEnteredValue] = useState({
    id: "",
    pw: "",
    cpw: "",
    email: "",
  });
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validation(enteredValue.id);
  const hasError = isTouched && !enteredValueIsValid;
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  const inputClasses = hasError
    ? "form-control invalid"
    : "form-control";

  const onBlurHandler = (e) => {
    // e.target.focus();
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
