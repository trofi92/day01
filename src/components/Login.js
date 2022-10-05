import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  browserSessionPersistence,
  setPersistence,
  signOut,
} from "firebase/auth";
import { authService } from "../firebase-config";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useLayoutEffect(() => {
    onAuthStateChanged(authService, (currentUser) => {
      if (user) {
        // setUser(currentUser);
        console.log(currentUser);
        currentUser !== null
          ? setIsLoggedIn(true)
          : setIsLoggedIn(false);
        return setPersistence(authService, browserSessionPersistence);
      } else {
        setUser(currentUser);
      }
      return currentUser;
    });
  });

  //login
  const login = async () => {
    try {
      await signInWithEmailAndPassword(authService, email, pw);
    } catch (e) {
      return e.message.replace("Error : ", "지랄;");
    }
  };

  //logout
  const logout = async () => {
    await signOut(authService);
    sessionStorage.clear();
    console.log(user);
  };

  return isLoggedIn ? (
    <div>
      <button onClick={logout} style={{ width: "70px" }}>
        Logout
      </button>
      <h1>{user.email}</h1>
    </div>
  ) : (
    <form onSubmit={(e) => e.preventDefault()}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <hr />
        <label>EMAIL : </label>
        <input
          placeholder="Email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          style={{ width: "200px" }}
        />
        <label>PW : </label>
        <input
          placeholder="Password"
          name="pw"
          onChange={(e) => {
            setPw(e.target.value);
          }}
          style={{ width: "200px" }}
          type="password"
        />
        <div style={{ display: "inline-block" }}>
          <button onClick={login} style={{ width: "70px" }}>
            Login
          </button>
          <Link to="/register">
            <button style={{ width: "70px" }}>Join</button>
          </Link>
        </div>
      </div>
    </form>
  );
};
