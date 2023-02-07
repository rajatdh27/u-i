import styles from "./Rightbar.module.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className={styles.birthdayContainer}>
          <img className={styles.birthdayImg} src="/assets/gift.png" alt="" />
          <span className={styles.birthdayText}>
            <b>Sawako</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img className={styles.rightbarAd} src="/assets/ad.png" alt="" />
        <h4 className={styles.rightbarTitle}>Online Friends</h4>
        <ul className={styles.rightbarFriendList}>
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className={styles.rightbarTitle}>User Information</h4>
        <div className={styles.rightbarInfo}>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>City: </span>
            <span className={styles.rightbarInfoKey}>New York</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>From: </span>
            <span className={styles.rightbarInfoKey}>Madrid</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>Relationship: </span>
            <span className={styles.rightbarInfoKey}>Single</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className={styles.rightbar}>
      <div className={styles.rightbarWrapper}>
        <ProfileRightbar />
      </div>
    </div>
  );
}
