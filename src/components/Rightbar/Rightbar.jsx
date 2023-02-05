import styles from "./Rightbar.module.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";

export default function Rightbar() {
  return (
    <div className={styles.rightbar}>
      <div className={styles.rightbarWrapper}>
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
      </div>
    </div>
  );
}
