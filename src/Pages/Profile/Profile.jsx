import { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import axios from "axios";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/username=madara`);
      setUser(res.data);
    };
  }, []);
  console.log(user);
  return (
    <>
      <Topbar />
      <div className={styles.profile}>
        <Sidebar />
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileCover}>
              <img
                className={styles.profileCoverImg}
                src="/assets/post/3.jpeg"
                alt=""
              />
              <img
                className={styles.profileUserImg}
                src="/assets/person/4.jpeg"
                alt=""
              />
            </div>
            <div className={styles.profileInfo}>
              <h4 className={styles.profileInfoName}>{user.username}</h4>
              <span className={styles.profileInfoDesc}>{user.desc}</span>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <Feed username="madara" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
