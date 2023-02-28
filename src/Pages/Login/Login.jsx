import styles from "./Login.module.css";
import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { SpinningCircles } from "react-loading-icons";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
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
            <button className={styles.loginButton} disabled={isFetching}>
              {isFetching ? (
                <SpinningCircles stroke="#000" style={{ height: "2rem" }} />
              ) : (
                "Login"
              )}
            </button>
            <span className={styles.loginForgot}>Forgot Password?</span>
            <button
              className={styles.loginRegisterButton}
              type="submit"
              disabled={isFetching}
            >
              {isFetching ? (
                <SpinningCircles stroke="#000" style={{ height: "2rem" }} />
              ) : (
                "Create a new account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
