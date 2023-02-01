import styles from "./Sidebar.module.css";
import { MdRssFeed, MdEventNote } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillPlayCircle, AiFillQuestionCircle } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { BsBookmarkFill } from "react-icons/bs";
import { RiSuitcaseFill } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";

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
          <li className={styles.sidebarFriend}>
            <img
              className={styles.sidebarFriendImage}
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className={styles.sidebarFriendName}>1</span>
          </li>
          <li className={styles.sidebarFriend}>
            <img
              className={styles.sidebarFriendImage}
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className={styles.sidebarFriendName}>2</span>
          </li>
          <li className={styles.sidebarFriend}>
            <img
              className={styles.sidebarFriendImage}
              src="/assets/person/3.jpeg"
              alt=""
            />
            <span className={styles.sidebarFriendName}>3</span>
          </li>
          <li className={styles.sidebarFriend}>
            <img
              className={styles.sidebarFriendImage}
              src="/assets/person/4.jpeg"
              alt=""
            />
            <span className={styles.sidebarFriendName}>4</span>
          </li>
          <li className={styles.sidebarFriend}>
            <img
              className={styles.sidebarFriendImage}
              src="/assets/person/5.jpeg"
              alt=""
            />
            <span className={styles.sidebarFriendName}>5</span>
          </li>
          <li className={styles.sidebarFriend}>
            <img
              className={styles.sidebarFriendImage}
              src="/assets/person/6.jpeg"
              alt=""
            />
            <span className={styles.sidebarFriendName}>6</span>
          </li>
          <li className={styles.sidebarFriend}>
            <img
              className={styles.sidebarFriendImage}
              src="/assets/person/7.jpeg"
              alt=""
            />
            <span className={styles.sidebarFriendName}>7</span>
          </li>
          <li className={styles.sidebarFriend}>
            <img
              className={styles.sidebarFriendImage}
              src="/assets/person/8.jpeg"
              alt=""
            />
            <span className={styles.sidebarFriendName}>8</span>
          </li>

          <li className={styles.sidebarFriend}>
            <img
              className={styles.sidebarFriendImage}
              src="/assets/person/9.jpeg"
              alt=""
            />
            <span className={styles.sidebarFriendName}>9</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
