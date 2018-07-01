import React from "react";
import T from "prop-types";
import styles from "../css/Paginate.scss";

let RIGHT_ARROW = 39;
let LEFT_ARROW = 37;

class Pagination extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", this._handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this._handleKeyDown);
  }

  _handleKeyDown = () => {
    switch (event.keyCode) {
      case RIGHT_ARROW:
        this.nextPage();
        break;
      case LEFT_ARROW:
        this.prevPage();
        break;
      default:
        break;
    }
  };

  prevPage = () => {
    const { page, currentPage, visitPage, id } = this.props;
    if (currentPage > 1 && currentPage <= page) {
      visitPage(id, currentPage - 1);
    }
  };

  nextPage = () => {
    const { page, currentPage, visitPage, id } = this.props;
    if (currentPage < page) {
      visitPage(id, currentPage + 1);
    }
  };

  render() {
    const { page, currentPage, visitPage, id } = this.props;
    return (
      <div className={styles.container}>
        <a
          style={{ display: currentPage < 3 ? "none" : "inline" }}
          onClick={() => {
            visitPage(id, 1);
          }}
        >
          First
        </a>
        <a
          style={{ display: currentPage === 1 ? "none" : "inline" }}
          onClick={this.prevPage}
        >
          Prev
        </a>
        <a
          style={{ display: currentPage === page ? "none" : "inline" }}
          onClick={this.nextPage}
        >
          Next
        </a>
        page:{" "}
        <span>
          {currentPage} of {page}{" "}
        </span>
        <a
          style={{ display: currentPage > page - 2 ? "none" : "inline" }}
          onClick={() => {
            visitPage(id, page);
          }}
        >
          Last
        </a>
      </div>
    );
  }
}

Pagination.propTypes = {
  id: T.oneOfType([T.string, T.number]),
  page: T.number,
  currentPage: T.number,
  visitPage: T.func
};

export default Pagination;
