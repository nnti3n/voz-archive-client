import React from "react";
import { container } from "../css/Paginate.css";

const Pagination = ({ page, currentPage, visitPage, id }) => (
  <div className={container}>
    <a
      style={{ visibility: currentPage === 1 ? "hidden" : "visible" }}
      onClick={() => {
        if (currentPage > 1 && currentPage < page) {
          visitPage(id, currentPage - 1);
        }
      }}
    >
      Prev{" "}
    </a>
    <a
      style={{ visibility: currentPage === page ? "hidden" : "visible" }}
      onClick={() => {
        if (currentPage < page) {
          visitPage(id, currentPage + 1);
        }
      }}
    >
      Next{" "}
    </a>
    page:{" "}
    <span>
      {currentPage} of {page}
    </span>
  </div>
);

export default Pagination;
