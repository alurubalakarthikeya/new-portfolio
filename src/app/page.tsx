import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/navbar";


export default function Home() {
  return (
    <div className={styles.page}>

      <Image
        src="/main-img.png"
        alt="Main character"
        width={500}
        height={500}
        className={styles.mainImg}
        priority
      />
    </div>
  );
}
