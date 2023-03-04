import { useState, useEffect, useContext } from "react";
import styles from "./Post.module.css";
import { AiOutlineMore } from "react-icons/ai";
import axios from "axios";
// import { Users } from "../../dummyData";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  const { user: currentUser } = useContext(AuthContext);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLike] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  };
  useEffect(() => {
    setIsLike(post.likes.includes(currentUser._id));
  }, [currentUser, post]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=63eba5021c0a5be3328a5a87`);
      console.log(res);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);
  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <Link to={`profile/${user.username}`}>
              <img
                className={styles.postProfileImage}
                src={
                  user.profilepicture
                    ? PF + user.profilepicture
                    : PF + "person/noavatar.jpg"
                }
                alt=""
              />
            </Link>
            <span className={styles.postUsername}>{user.username}</span>
            <span className={styles.postDate}>{format(post.createdAt)}</span>
          </div>
          <div className={styles.postTopRight}>
            <AiOutlineMore />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>{post?.desc}</span>
          <img className={styles.postImage} src={PF + post.img} alt="" />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img
              className={styles.likeIcon}
              src="/assets/like.png"
              alt=""
              onClick={likeHandler}
            />
            <img
              className={styles.likeIcon}
              src="/assets/heart.png"
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
