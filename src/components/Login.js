import { useState, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  browserSessionPersistence,
  setPersistence,
  signOut,
} from "firebase/auth";
import { authService } from "../firebase-config";
import { loggedIn, loggedOut } from "../utils";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useLayoutEffect(() => {
    onAuthStateChanged(authService, (currentUser) => {
      if (user) {
        currentUser !== null
          ? setIsLoggedIn(true)
          : setIsLoggedIn(false);
        console.log(currentUser);
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
      loggedIn();
    } catch (e) {
      return e.message.replace("Error : ", "지랄;");
    }
  };

  //logout
  const logout = async () => {
    await signOut(authService);
    loggedOut();
    sessionStorage.clear();
    console.log(user);
  };

  return isLoggedIn ? (
    <div>
      <button onClick={logout} style={{ width: "70px" }}>
        Logout
      </button>
      <Link to="/dashboard">
        <p style={{ cursor: "pointer" }}>Go to Dashboard</p>
      </Link>
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
        <label>Email : </label>
        <input
          placeholder="Email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          style={{ width: "200px" }}
        />
        <label>Password : </label>
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
