import React from "react";
import { connect } from "react-redux";
import styles from "../css/Thread.css";
import { visitThreadPage } from "../actions";
import Pagination from "./Pagination";

const Thread = ({ data, page, visitThreadPage, currentPage, id }) => (
  <div>
    <div>
      {data.length !== 0
        ? data.map(item => (
            <div className={styles.post} key={item.ID}>
              <div>#{item.Number}</div>
              <div>{item.ID}</div>
              <div>{item.UserName}</div>
              <div>{item.Time}</div>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: item.Content }}
              />
              <div>{item.threadID}</div>
            </div>
          ))
        : ""}
    </div>
    {data.length ? (
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
