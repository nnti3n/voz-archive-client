import React from "react";

import Sidebar from "./Sidebar";
import Switcher from "./Switcher";

import styles from "../css/App.scss";

export default () => (
  <div className={styles.container}>
    <div className={styles.app}>
      <Sidebar />
      <Switcher />
    </div>
    <footer className={styles.footer}>
      <div>
        Hello this site is made by{" "}
        <a href="https://github.com/nnti3n" target="_blank">
          nnti3n
        </a>
      </div>
    </footer>
  </div>
);
