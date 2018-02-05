import React from "react";
import { connect } from "react-redux";
import styles from "../css/Thread.css";
import { highlight, container } from "../css/Paginate.css";
import { visitThreadPage } from "../actions";

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
    <div className={container}>
      {data.length > 0
        ? Array.from(Array(page).keys()).map(item => (
            <a
              key={item + 1}
              className={currentPage === item ? highlight : null}
              onClick={() => visitThreadPage(id, item + 1)}
            >
              {item + 1}{" "}
            </a>
          ))
        : ""}
    </div>
  </div>
);

const mapState = state => state.thread || [];
const mapDispatch = { visitThreadPage };

export default connect(mapState, mapDispatch)(Thread);
