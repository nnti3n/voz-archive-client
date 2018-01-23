import React from "react";

import Sidebar from "./Sidebar";
import Switcher from "./Switcher";

import styles from "../css/App.css";

export default () => (
  <div>
    <div className={styles.app}>
      <Sidebar />
      <Switcher />
    </div>
  </div>
);
