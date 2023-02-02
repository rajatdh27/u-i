import styles from "./Share.module.css";
import { MdPermMedia, MdLabelImportant, MdLocationOn } from "react-icons/md";
import { BsEmojiLaughingFill } from "react-icons/bs";

export default function Share() {
  return (
    <div className={styles.share}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className={styles.shareProfileImg}
          />
          <input
            className={styles.shareInput}
            placeholder="What's In Your Mind"
          />
        </div>
        <hr className={styles.shareHr} />
        <div className={styles.shareBottom}>
          <div className={styles.shareOptions}>
            <div className={styles.shareOption}>
              <MdPermMedia color="tomato" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Photo or Video</span>
            </div>
            <div className={styles.shareOption}>
              <MdLabelImportant color="blue" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Tag</span>
            </div>
            <div className={styles.shareOption}>
              <MdLocationOn color="green" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Location</span>
            </div>
            <div className={styles.shareOption}>
              <BsEmojiLaughingFill
                color="goldenrod"
                className={styles.shareIcon}
              />
              <span className={styles.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button className={styles.shareButton}>Share</button>
        </div>
      </div>
    </div>
  );
}
