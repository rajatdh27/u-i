import { useEffect, useState } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import styles from "./Feed.module.css";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/63eba5021c0a5be3328a5a87");
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
        {/* {Posts.map((p) => {
          return <Post post={p} key={p.id} />;
        })} */}
      </div>
    </div>
  );
}
