import React from "react";
import styles from "../css/Paginate.scss";

const Pagination = ({ page, currentPage, visitPage, id }) => (
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
      onClick={() => {
        if (currentPage > 1 && currentPage <= page) {
          visitPage(id, currentPage - 1);
        }
      }}
    >
      Prev
    </a>
    <a
      style={{ display: currentPage === page ? "none" : "inline" }}
      onClick={() => {
        if (currentPage < page) {
          visitPage(id, currentPage + 1);
        }
      }}
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

export default Pagination;
