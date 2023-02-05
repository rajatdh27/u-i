import { useState } from "react";
import styles from "./Post.module.css";
import { AiOutlineMore } from "react-icons/ai";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLike] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  };
  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img
              className={styles.postProfileImage}
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className={styles.postUsername}>
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className={styles.postDate}>{post.date}</span>
          </div>
          <div className={styles.postTopRight}>
            <AiOutlineMore />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>{post?.desc}</span>
          <img className={styles.postImage} src={post.photo} alt="" />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img
              className={styles.likeIcon}
              src="assets/like.png"
              alt=""
              onClick={likeHandler}
            />
            <img
              className={styles.likeIcon}
              src="assets/heart.png"
              alt=""
              onClick={likeHandler}
            />
            <span className={styles.postLikeCounter}>
              {like} people like it!
            </span>
          </div>
          <div className={styles.postBottomRight}>
            <span className={styles.postCommentText}>
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
