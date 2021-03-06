import React from "react";
import { connect } from "react-redux";
import styles from "../css/Thread.scss";
import Link from "redux-first-router-link";
import { visitThreadPage } from "../actions";
import Pagination from "./Pagination";
import { formatDate } from "../utils";

const Thread = ({ data, page, visitThreadPage, currentPage, id }) => (
  <div>
    <div>
      <div className={styles.title}>
        <Link to={`/thread/${id}`}>Thread: {data.thread.Title}</Link>
      </div>
      {data.posts.length !== 0
        ? data.posts.map(item => (
            <div className={styles.comment} key={item.ID}>
              <div className={styles.comment__meta}>
                <div className={styles.order}>#{item.Number}</div>
                <div>{item.UserName}</div>
                <div className={styles.time}>{formatDate(item.Time)}</div>
              </div>
              <div
                className={styles.comment__text}
                dangerouslySetInnerHTML={{ __html: item.Content }}
              />
              <div>{item.threadID}</div>
            </div>
          ))
        : ""}
    </div>
    {data.posts.length ? (
      <Pagination
        page={page}
        visitPage={visitThreadPage}
        currentPage={currentPage}
        id={id}
      />
    ) : null}
  </div>
);

const mapState = state => state.thread || [];
const mapDispatch = { visitThreadPage };

export default connect(mapState, mapDispatch)(Thread);
