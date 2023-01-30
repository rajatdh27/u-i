import styles from "./Topbar.module.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <span className={styles.topbarLogo}>u&I</span>
      </div>
      <div className={styles.topbarCenter}>
        <div className={styles.searchBar}>
          <Search className={styles.searchIcon} />
          <input
            placeholder="Search for a friend, post or video"
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.topbarRight}>
        <div className={styles.topbarLinks}>
          <span className={styles.topbarLink}>HomePage</span>
          <span className={styles.topbarLink}>Timeline</span>
        </div>
        <div className={styles.topbarIcons}>
          <div className={styles.topbarIconItem}>
            <Person />
            <span className={styles.topbarIconBadge}>1</span>
          </div>
          <div className={styles.topbarIconItem}>
            <Chat />
            <span className={styles.topbarIconBadge}>2</span>
          </div>
          <div className={styles.topbarIconItem}>
            <Notifications />
            <span className={styles.topbarIconBadge}>3</span>
          </div>
        </div>
        <img
          src="/assets/person/8.jpeg"
          alt=""
          className={styles.topbarImage}
        ></img>
      </div>
    </div>
  );
}
