/* eslint no-unused-labels: 0 */

import React from "react";
import { connect } from "react-redux";
import Link from "redux-first-router-link";
import { goToPage, visitBoxPage } from "../actions";
import Pagination from "./Pagination";
import styles from "../css/Box.scss";
import { formatDate } from "../utils";

const Box = ({ data, visitBoxPage, page, id, currentPage }) => (
  <div>
    {data.length
      ? data.map(item => (
          <div className={styles.story} key={item.ID}>
            <Link to={`/thread/${item.ID}`} className={styles.title}>
              <h3>{item.Title}</h3>
            </Link>
            <div>
              <span>{item.UserNameStarter}</span>
              <span>{formatDate(item.LastUpdated)}</span>
            </div>
            <div>
              <span>Comment {item.PostCount}</span>
              <span>View {item.ViewCount}</span>
            </div>
            <div>
              <a
                className={styles.link}
                href={`https://vozforums.com/showthread.php?t=${item.ID}`}
                target="_blank"
              >{`Thread ${item.ID}`}</a>
            </div>
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
