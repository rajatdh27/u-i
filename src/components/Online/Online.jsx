import styles from "./Online.module.css";

export default function Online({ user }) {
  return (
    <li className={styles.rightbarFriend}>
      <div className={styles.rightbarProfileImgContainer}>
        <img
          className={styles.rightbarProfileImg}
          src={user.profilePicture}
          alt=""
        />
        <span className={styles.rightbarOnline}></span>
      </div>
      <span className={styles.rightbarUserName}>{user.username}</span>
    </li>
  );
}
