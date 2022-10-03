import useInput from "../hooks/use-input";
import { useNavigate } from "react-router-dom";

const JoinValid = () => {
  const navigator = useNavigate();

  const {
    value: validValue,
    isValid,
    hasError,
    onBlurHandler,
    onChangeHandler,
    inputClasses,
    submitFormHandler: onSubmit,
  } = useInput((value) => value !== "");
  //   console.log(enteredValue.name.id);
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "black",
      }}
    >
      <div className="control-group">
        <div className={inputClasses}>
          <label htmlFor="ID">ID : </label>
          <input
            type="text"
            name="id"
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            placeholder="ID"
            style={{ width: "200px" }}
            required
            minLength="5"
            maxLength="12"
          />
          {hasError && (
            <p className="error-text">ID must not be empty</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="PW">PW : </label>
          <input
            name="pw"
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            placeholder="PW"
            style={{ width: "200px" }}
            type="password"
            required
            minLength="8"
            maxLength="12"
          />
        </div>
        <div className="form-control">
          <label htmlFor="check PW">check PW : </label>
          <input
            name="cpw"
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            placeholder="Check your PW"
            style={{ width: "200px" }}
            type="password"
            required
            minLength="8"
            maxLength="12"
          />
        </div>
        <div className="form-control">
          <label>E-mail : </label>
          <input
            name="email"
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            placeholder="E-MAIL"
            style={{ width: "200px" }}
            type="email"
            required
            maxLength="50"
          />
        </div>
      </div>
      <div className="form-actions">
        <button
          disabled={!isValid}
          onClick={() =>
            validValue.pw !== validValue.cpw
              ? alert("check your password, dumbass")
              : navigator("/")
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default JoinValid;
