import styles from "./Friends.module.css";

export default function Friends({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className={styles.sidebarFriend}>
      <img
        className={styles.sidebarFriendImage}
        src={PF + user.profilePicture}
        alt=""
      />
      <span className={styles.sidebarFriendName}>{user.username}</span>
    </li>
  );
}
