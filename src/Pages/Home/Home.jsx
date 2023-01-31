import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className={styles.homeContainer}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
