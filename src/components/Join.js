import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

export const Join = () => {
  //회원가입 하나의 state에 객체로 저장
  const [form, setForm] = useState({
    id: "",
    pw: "",
    cpw: "",
    email: "",
    name: "",
    birth: "",
  });

  // const [timer, setTimer] = useState();

  const onChange = (e) => {
    e.preventDefault();
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  //validation 저장
  // const [valid, setValid] = useState({
  //   validId: true,
  //   validPw: true,
  //   validName: true,
  //   validEmail: true,
  // });

  //validation 설정 : validation의 어떤 값에서 문제가 발생했는지 감지
  // const checkValid = ({ category, status }) => {
  //   const validation = {
  //     ...valid,
  //     [category]: status,
  //   };
  //   setValid(validation);
  // };

  // ID validation
  // const idValidation = (e) => {
  //   if (form.id.trim().length > 0) {
  //     if (timer) {
  //       clearTimeout(timer);
  //     }
  //   }
  //   const newTimer = setTimeout(async () => {
  //     try {
  //       await axios.get("").then((res) => {
  //         if (res.data === true) {
  //           return checkValid({ category: "validId", status: false });
  //         }
  //         return checkValid({ category: "validId", status: true });
  //       });
  //     } catch {
  //       alert("WTF DUDE?");
  //     }
  //   }, 500);
  //   setTimer(newTimer);
  // };

  return (
    <>
      <div>fuck your identification</div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
          color: "black",
        }}
      >
        <label>ID : </label>
        <input
          name="id"
          placeholder="ID"
          onChange={onChange}
          style={{ width: "200px" }}
          type="text"
          required
          maxLength="12"
        />
        <label>PW : </label>
        <input
          name="pw"
          placeholder="PW"
          onChange={onChange}
          style={{ width: "200px" }}
          type="password"
          required
          maxLength="8"
        />
        <label>Confirm PW : </label>
        <input
          name="cpw"
          placeholder="Check your PW"
          onChange={onChange}
          style={{ width: "200px" }}
          type="password"
          required
          maxLength="8"
        />
        <label>E-mail : </label>
        <input
          name="email"
          placeholder="email"
          onChange={onChange}
          style={{ width: "200px" }}
          type="email"
          required
          maxLength="50"
        />
        <label>Name : </label>
        <input
          name="name"
          placeholder="NAME"
          onChange={onChange}
          style={{ width: "200px" }}
          type="text"
          required
          maxLength="12"
        />
        <label>BirthDate : </label>
        <input
          name="birth"
          onChange={onChange}
          style={{ width: "200px" }}
          type="date"
          required
          maxLength="12"
        />
        <Link to="/">
          <button
            style={{
              width: "100px",
            }}
            type="submit"
            onSubmit={console.log(form)}
          >
            Welcome
          </button>
        </Link>
      </form>
    </>
  );
};
