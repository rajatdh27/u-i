import { useEffect, useState } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import styles from "./Feed.module.css";
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/63eba5021c0a5be3328a5a87");
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);
  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
        {posts.map((p) => {
          return <Post post={p} key={p._id} />;
        })}
      </div>
    </div>
  );
}
