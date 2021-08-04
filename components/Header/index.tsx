import { FC } from "react";
import styles from "./styles.module.css";

interface IHeader {}

const Header: FC<IHeader> = (props) => {
  return <div className={styles.header}>
    <div className={styles.user}>User goes here</div>
  </div>;
};

export default Header;
