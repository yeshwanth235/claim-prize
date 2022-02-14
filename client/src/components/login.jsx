import React, { useState } from "react";

import logo from "../assets/logo512.png";
import AuthService from "../services/AuthService";
import Modal from "./modal";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const onEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onPasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const postLogin = (e) => {
    e.preventDefault();
    AuthService.login(email, password).then(
      (response) => {
        console.log(email);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );
  };

  return (
    <div>
      <div className="bg">
        <div className="bg-small"></div>
        <div className="bg-large"></div>
      </div>
      <div className="login-nav">
        <h1>CLAIM SWAG</h1>
        <Link class="link" to="/">
          Register
        </Link>
        <Link class="link" to="/login">
          Login
        </Link>
        <Link class="link" to="/about">
          About
        </Link>
        <Link class="link" to="/">
          Home
        </Link>
      </div>

      <div className="main-login">
        <h1>LOGIN</h1>
        <form onSubmit={postLogin}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={onEmailChange}
            required
            placeholder="Email"
          />
          <br />
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={onPasswordChange}
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
          <br />
          <button>
            <h3>Login</h3>
          </button>
          <p>or</p>
          <Link class="link" to="/Register">
            Create a Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
