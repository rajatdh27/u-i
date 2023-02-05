import styles from "./Sidebar.module.css";
import { MdRssFeed, MdEventNote } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillPlayCircle, AiFillQuestionCircle } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { BsBookmarkFill } from "react-icons/bs";
import { RiSuitcaseFill } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";
import { Users } from "../../dummyData";
import Friends from "../Friends/Friends";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <MdRssFeed className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Feed</span>
          </li>
          <li className={styles.sidebarListItem}>
            <BsFillChatLeftTextFill className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Chats</span>
          </li>
          <li className={styles.sidebarListItem}>
            <AiFillPlayCircle className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Video</span>
          </li>
          <li className={styles.sidebarListItem}>
            <HiUserGroup className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Group</span>
          </li>
          <li className={styles.sidebarListItem}>
            <BsBookmarkFill className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Bookmark</span>
          </li>
          <li className={styles.sidebarListItem}>
            <AiFillQuestionCircle className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Questions</span>
          </li>
          <li className={styles.sidebarListItem}>
            <RiSuitcaseFill className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Jobs</span>
          </li>
          <li className={styles.sidebarListItem}>
            <MdEventNote className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Events</span>
          </li>
          <li className={styles.sidebarListItem}>
            <GiGraduateCap className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Courses</span>
          </li>
        </ul>
        <button className={styles.sidebarButton}>Show More</button>
        <hr className={styles.sidebarHr}></hr>
        <ul className={styles.sidebarFriendList}>
          {Users.map((u) => {
            return <Friends key={u.id} user={u} />;
          })}
        </ul>
      </div>
    </div>
  );
}
