import React from "react";
import { connect } from "react-redux";
// import { NavLink } from "redux-first-router-link";
import { goToPage } from "../actions";
import styles from "../css/Sidebar.css";

// const Sidebar = ({ onClick, path, boxID }) => (
const Sidebar = ({ onClick, boxID }) => (
  <div className={styles.sidebar}>
    <div className={styles.fixedContainer}>
      <h2>Boxes</h2>

      <span className={activeBox(boxID, 33)} onClick={() => onClick("BOX", 33)}>
        F33
      </span>
      <span className={activeBox(boxID, 17)} onClick={() => onClick("BOX", 17)}>
        F17
      </span>
    </div>
  </div>
);

// const active = (currentPath, path) => {
//   return currentPath.match(path) ? styles.active : "";
// };

const activeBox = (currentBox, boxID) => {
  return currentBox === boxID ? styles.active : "";
};

const mapDispatch = { onClick: goToPage };
const mapState = ({ location, box }) => ({
  path: location.pathname,
  boxID: box.id
});

export default connect(mapState, mapDispatch)(Sidebar);
