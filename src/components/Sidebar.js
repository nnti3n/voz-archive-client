import React from "react";
import { connect } from "react-redux";
// import { NavLink } from "redux-first-router-link";
import { goToPage } from "../actions";
import styles from "../css/Sidebar.scss";

// const Sidebar = ({ onClick, path, boxID }) => (
class Sidebar extends React.Component {
  state = { isHide: false };
  componentDidMount() {
    window.addEventListener("scroll", this.hideBar);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideBar);
  }
  hideBar = () => {
    let { isHide } = this.state;
    window.scrollY > this.prev
      ? !isHide && this.setState({ isHide: true })
      : isHide && this.setState({ isHide: false });

    this.prev = window.scrollY;
  };

  render() {
    const { onClick, boxID } = this.props;
    const { isHide } = this.state;
    return (
      <div className={styles.sidebar}>
        <div
          className={styles.fixedContainer}
          style={{ transform: isHide ? "translateY(-100px)" : "translateY(0)" }}
        >
          <h2>Boxes</h2>

          <span
            className={activeBox(boxID, 33)}
            onClick={() => onClick("BOX", 33)}
          >
            F33
          </span>
          <span
            className={activeBox(boxID, 17)}
            onClick={() => onClick("BOX", 17)}
          >
            F17
          </span>
        </div>
      </div>
    );
  }
}

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
