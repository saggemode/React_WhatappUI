import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import "./register.css";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
    };

    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Navigate to={`/`} />;
  }
  if (user.loading) {
    return <p>Loading...!</p>;
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <Alert variant="success" style={{ width: "42rem" }}>
            <Alert.Heading>{user.message}</Alert.Heading>
          </Alert>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
          <span className="loginDesc"> {user.message}</span>
        
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={userSignup}>
            <input
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              value={email}
              className="loginInput"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              required
              value={password}
              className="loginInput"
              type="password"
              minLength="3"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
