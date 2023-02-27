import styles from "./Login.module.css";
import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
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
          <form className={styles.loginBox} onSubmit={handleClick}>
            <input
              placeholder="Email"
              required
              type="email"
              className={styles.loginInput}
              ref={email}
            />
            <input
              placeholder="Password"
              required
              type="password"
              minLength="6"
              className={styles.loginInput}
              ref={password}
            />
            <button className={styles.loginButton}>Login</button>
            <span className={styles.loginForgot}>Forgot Password?</span>
            <button className={styles.loginRegisterButton} type="submit">
              Create a new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
