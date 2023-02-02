import Share from "../Share/Share";
import styles from "./Feed.module.css";

export default function Feed() {
  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
      </div>
    </div>
  );
}
