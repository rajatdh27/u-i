import styles from "./Login.module.css";

export default function Login() {
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
          <div className={styles.loginBox}>
            <input
              placeholder="Email"
              type="email"
              className={styles.loginInput}
            />
            <input
              placeholder="Password"
              type="password"
              className={styles.loginInput}
            />
            <button className={styles.loginButton}>Login</button>
            <span className={styles.loginForgot}>Forgot Password?</span>
            <button className={styles.loginRegisterButton}>
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
