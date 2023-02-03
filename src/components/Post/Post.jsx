import styles from "./Post.module.css";
import { AiOutlineMore } from "react-icons/ai";

export default function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img
              className={styles.postProfileImage}
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className={styles.postUsername}>Itachi</span>
            <span className={styles.postDate}>5 min</span>
          </div>
          <div className={styles.postTopRight}>
            <AiOutlineMore />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>Hey! It's my first post :)</span>
          <img className={styles.postImage} src="assets/person/1.jpeg" alt="" />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img className={styles.likeIcon} src="assets/like.png" alt="" />
            <img className={styles.likeIcon} src="assets/heart.png" alt="" />
            <span className={styles.postLikeCounter}>32 people like it!</span>
          </div>
          <div className={styles.postBottomRight}>
            <span className={styles.postCommentText}>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
