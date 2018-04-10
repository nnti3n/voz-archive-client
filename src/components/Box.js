/* eslint no-unused-labels: 0 */

import React from "react";
import { connect } from "react-redux";
import { goToPage, visitBoxPage } from "../actions";
import Pagination from "./Pagination";
import styles from "../css/Box.css";
// import { excludeThreads } from "../utils";

const Box = ({ data, visitBoxPage, goToPage, page, id, currentPage }) => (
  <div>
    {data.length
      ? data.map(item => (
          <div
            className={styles.card}
            key={item.ID}
            onClick={() => goToPage("THREAD", item.ID)}
          >
            <div>{item.ID}</div>
            <div>{item.Title}</div>
            {/*<div>{item.Source}</div>*/}
            <div>{item.PageCount}</div>
            <div>{item.PostCount}</div>
            <div>{item.ViewCount}</div>
            <div>{item.UserNameStarter}</div>
            <div> </div>
          </div>
        ))
      : "NotFound"}
    {data.length ? (
      <Pagination
        page={page}
        visitPage={visitBoxPage}
        currentPage={currentPage}
        id={id}
      />
    ) : null}
  </div>
);

const mapState = state => state.box;
const mapDispatch = { visitBoxPage, goToPage };

export default connect(mapState, mapDispatch)(Box);
