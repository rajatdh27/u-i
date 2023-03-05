import styles from "./Share.module.css";
import { MdPermMedia, MdLabelImportant, MdLocationOn } from "react-icons/md";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Share() {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const desc = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    try {
      await axios.post("/posts", newPost);
    } catch (err) {}
  };
  return (
    <div className={styles.share}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noavatar.jpg"
            }
            alt=""
            className={styles.shareProfileImg}
          />
          <input
            className={styles.shareInput}
            placeholder={"What's In Your mind " + user.username + "?"}
            ref={desc}
          />
        </div>
        <hr className={styles.shareHr} />
        <form className={styles.shareBottom} onSubmit={submitHandler}>
          <div className={styles.shareOptions}>
            <label htmlFor="file" className={styles.shareOption}>
              <MdPermMedia color="tomato" className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpg,.jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
          <button className={styles.shareButton} type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
