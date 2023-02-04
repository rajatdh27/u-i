import styles from "./Rightbar.module.css";

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
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className={styles.rightbarOnline}></span>
            </div>
            <span className={styles.rightbarUserName}>Madara Uchiha</span>
          </li>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className={styles.rightbarOnline}></span>
            </div>
            <span className={styles.rightbarUserName}>Madara Uchiha</span>
          </li>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className={styles.rightbarOnline}></span>
            </div>
            <span className={styles.rightbarUserName}>Madara Uchiha</span>
          </li>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className={styles.rightbarOnline}></span>
            </div>
            <span className={styles.rightbarUserName}>Madara Uchiha</span>
          </li>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className={styles.rightbarOnline}></span>
            </div>
            <span className={styles.rightbarUserName}>Madara Uchiha</span>
          </li>
          <li className={styles.rightbarFriend}>
            <div className={styles.rightbarProfileImgContainer}>
              <img
                className={styles.rightbarProfileImg}
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className={styles.rightbarOnline}></span>
            </div>
            <span className={styles.rightbarUserName}>Madara Uchiha</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
