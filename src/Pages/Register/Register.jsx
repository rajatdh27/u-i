import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

export default function Register() {
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();
  const handClick = async (e) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      confirmPassword.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLeft}>
          <h3 className={styles.loginLogo}>u&i</h3>
          <span className={styles.loginDesc}>
            Connect with friends and the world around you on u&i
          </span>
        </div>
        <div className={styles.loginRight}>
          <form className={styles.loginBox} onSubmit={handClick}>
            <input
              required
              placeholder="User Name"
              type="text"
              className={styles.loginInput}
              ref={username}
            />
            <input
              required
              placeholder="Email"
              type="email"
              className={styles.loginInput}
              ref={email}
            />
            <input
              required
              placeholder="Password"
              type="password"
              className={styles.loginInput}
              minLength="6"
              ref={password}
            />
            <input
              required
              placeholder="Confirm Password"
              type="password"
              className={styles.loginInput}
              ref={confirmPassword}
            />
            <button className={styles.loginButton} type="submit">
              Sign Up
            </button>
            <span className={styles.loginForgot}>Forgot Password?</span>
            <button className={styles.loginRegisterButton}>
              Login into your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
