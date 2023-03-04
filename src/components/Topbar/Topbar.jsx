import styles from "./Topbar.module.css";
import { useContext } from "react";
import { BsSearch, BsFillPersonFill, BsChatLeftFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(user.profilePicture);
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
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
          src={
            user && user.profilePicture !== null && user.profilePicture !== ""
              ? PF + user.profilePicture
              : PF + "person/noavatar.jpg"
          }
          alt=""
          className={styles.topbarImage}
        ></img>
      </div>
    </div>
  );
}
