import React from "react";
import { connect } from "react-redux";
import { NavLink } from "redux-first-router-link";
import { goToPage } from "../actions";
import styles from "../css/Sidebar.css";

// const Sidebar = ({ onClick, path, boxID }) => (
const Sidebar = () => (
  <div className={styles.sidebar}>
    <div className={styles.fixedContainer}>
      <h2>SEO-FRIENDLY LINKS</h2>

      <NavLink activeClassName={styles.active} to="/box/33">
        F33
      </NavLink>
    </div>
  </div>
);

// const active = (currentPath, path) => {
//   return currentPath.match(path) ? styles.active : "";
// };
//
// const activeBox = (currentBox, boxID) => {
//   return currentBox === boxID ? styles.active : "";
// };

const mapDispatch = { onClick: goToPage };
const mapState = ({ location, box }) => ({
  path: location.pathname,
  boxID: box.id
});

export default connect(mapState, mapDispatch)(Sidebar);
