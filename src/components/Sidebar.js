import React from "react";
import { connect } from "react-redux";
import { NavLink } from "redux-first-router-link";
import { goToPage } from "../actions";
import styles from "../css/Sidebar.css";

const Sidebar = ({ onClick, path }) => (
  <div className={styles.sidebar}>
    <h2>SEO-FRIENDLY LINKS</h2>

    <NavLink activeClassName={styles.active} exact to="/">
      HOME
    </NavLink>

    <NavLink activeClassName={styles.active} exact to="/box/33">
      F33
    </NavLink>

    <div style={{ height: 20 }} />
    <h2>EVENT HANDLERS</h2>

    <span className={active(path, "/")} onClick={() => onClick("HOME")}>
      HOME
    </span>

    <span
      className={active(path, "/box/:id")}
      onClick={() => onClick("BOX", { id: 33 })}
    >
      F33
    </span>
  </div>
);

const active = (currentPath, path) =>
  currentPath === path ? styles.active : "";

const mapDispatch = { onClick: goToPage };
const mapState = ({ location }) => ({ path: location.pathname });

export default connect(mapState, mapDispatch)(Sidebar);
