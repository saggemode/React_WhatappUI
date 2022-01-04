import React, { useState } from "react";
import "./login.css";
import { login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  // if (auth.authenticate) {
  //   return <Navigate to={`/`} />;
  // }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={userLogin}>
            <input
              placeholder="Email"
              type="email"
              required
              value={email}
              className="loginInput"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              required
              value={password}
              minLength="3"
              className="loginInput"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginButton" type="submit">
              Submit
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
