import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleIdInput = (e) => {
    setId(e.target.value);
  };

  const handlePwInput = (e) => {
    setPw(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (id !== "" && pw !== "") {
      return setIsLoggedIn(true);
    } else {
      alert("WTF?");
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <h1>Welcome to Hell</h1>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <hr />
          <label>ID : </label>
          <input
            name="id"
            onChange={handleIdInput}
            style={{ width: "200px" }}
            type="text"
            required
            maxLength="12"
          />
          <label>PW : </label>
          <input
            name="pw"
            onChange={handlePwInput}
            style={{ width: "200px" }}
            type="password"
            required
            maxLength="8"
          />
          <div style={{ display: "inline-block" }}>
            <button
              type="submit"
              onClick={onSubmit}
              style={{ width: "100px" }}
            >
              Login
            </button>

            <Link to="/join">
              <button style={{ width: "100px" }}>Join</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
