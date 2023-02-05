import Post from "../Post/Post";
import Share from "../Share/Share";
import styles from "./Feed.module.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
        {Posts.map((p) => {
          return <Post post={p} key={p.id} />;
        })}
      </div>
    </div>
  );
}
