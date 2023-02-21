import styles from "./Topbar.module.css";
import { BsSearch, BsFillPersonFill, BsChatLeftFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <Link to="/" style={{ textDecoration: "none" ,color: "white"}}>
          <span className={styles.topbarLogo}>u&I</span>
        </Link>
      </div>
      <div className={styles.topbarCenter}>
        <div className={styles.searchBar}>
          <BsSearch className={styles.searchIcon} />
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
            <BsFillPersonFill />
            <span className={styles.topbarIconBadge}>1</span>
          </div>
          <div className={styles.topbarIconItem}>
            <BsChatLeftFill />
            <span className={styles.topbarIconBadge}>2</span>
          </div>
          <div className={styles.topbarIconItem}>
            <IoIosNotifications />
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
