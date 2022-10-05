import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  browserSessionPersistence,
  setPersistence,
  signOut,
} from "firebase/auth";
import { authService, firebaseConfig } from "../firebase-config";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = authService;
  // const apiKey = firebaseConfig.apiKey;
  //setState : login
  useEffect(() => {
    onAuthStateChanged(authService, (currentUser) => {
      if (user) {
        setPersistence(auth, browserSessionPersistence);
      } else {
        setUser(currentUser);
      }
    });
  });

  //login
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        authService,
        email,
        pw
      );
      console.log(user);
      setIsLoggedIn(true);
    } catch (e) {
      setIsLoggedIn(false);
      return e.message.replace("Error : ", "지랄;");
    }
  };

  //logout
  const logout = async () => {
    await signOut(authService);
    console.log(user);

    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <div>
      <button onClick={logout} style={{ width: "70px" }}>
        Logout
      </button>
      <h1>{email}</h1>
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
