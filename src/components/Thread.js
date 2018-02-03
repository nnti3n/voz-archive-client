import React from "react";
import { connect } from "react-redux";
import styles from "../css/Thread.css";
import { highlight } from "../css/App.css";
import { visitThread } from "../actions";

const Thread = ({ data, page, visitThread, currentPage, id }) => (
  <div>
    {data.length !== 0
      ? data.map(item => (
          <div className={styles.post}>
            <div>#{item.Number}</div>
            <div>{item.ID}</div>
            <div>{item.UserName}</div>
            <div>{item.Time}</div>
            <div dangerouslySetInnerHTML={{ __html: item.Content }} />
            <div>{item.threadID}</div>
          </div>
        ))
      : ""}
    <div>
      {data.length > 0
        ? Array.from(Array(page).keys()).map(item => (
            <a
              key={item + 1}
              className={currentPage === item + 1 ? highlight : null}
              onClick={() => visitThread(id, item + 1)}
            >
              {item + 1}{" "}
            </a>
          ))
        : ""}
    </div>
  </div>
);

const mapState = state => state.thread || [];
const mapDispatch = { visitThread };

export default connect(mapState, mapDispatch)(Thread);
