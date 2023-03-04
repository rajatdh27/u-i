import { useEffect, useState, useContext } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import styles from "./Feed.module.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/" + user._id);
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username, user]);
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
