import styles from "./Friends.module.css";

export default function Friends({ user }) {
  return (
    <li className={styles.sidebarFriend}>
      <img
        className={styles.sidebarFriendImage}
        src={user.profilePicture}
        alt=""
      />
      <span className={styles.sidebarFriendName}>{user.username}</span>
    </li>
  );
}
