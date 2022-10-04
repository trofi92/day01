import useInput from "../hooks/use-input";
import { useNavigate } from "react-router-dom";
import { authService } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const JoinEmail = () => {
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        authService,
        validValue.email,
        validValue.pw
      );
      console.log(user);
    } catch (e) {
      return e.message.replace("Error : ", "제대로 좀 입력해라;");
    }
  };

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

  const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,50})$/i;

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,12}$/;

  console.log(validValue);

  return (
    <form
      // method="POST"
      // action="/user-logged-in"
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "black",
      }}
    >
      <div className="form-control">
        <label>E-mail : </label>
        <input
          name="email"
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          placeholder="이메일 주소"
          style={{ width: "200px" }}
          type="email"
          maxLength="50"
        />
        {hasError && (
          <p className="error-text">이메일 주소를 작성하라고</p>
        )}
      </div>
      <div className="control-group">
        <div className={inputClasses}></div>
        <div className="form-control">
          <label htmlFor="PW">PW : </label>
          <input
            name="pw"
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            placeholder="8~12자, 특수문자, 숫자 각 1개 이상"
            style={{ width: "200px" }}
            type="password"
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
            placeholder="비밀번호를 확인해주세요"
            style={{ width: "200px" }}
            type="password"
            minLength="8"
            maxLength="12"
          />
        </div>
      </div>
      <div className="form-actions">
        <button
          disabled={!isValid}
          onClick={() =>
            validValue.pw === validValue.cpw &&
            passwordRegex.test(validValue.pw) &&
            validValue.pw.length > 7 &&
            validValue.cpw.length > 7 &&
            emailRegex.test(validValue.email) === true
              ? register() && navigator("/")
              : alert("check your form, dumbass")
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default JoinEmail;
