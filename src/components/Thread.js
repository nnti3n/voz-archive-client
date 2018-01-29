import React from "react";
import { connect } from "react-redux";
import styles from "../css/Thread.css";

const Thread = ({ data }) => (
  <div>
    {data.length !== 0
      ? data.map(item => (
          <div className={styles.post}>
            <div>{item.ID}</div>
            <div>{item.Number}</div>
            <div>{item.UserName}</div>
            <div>{item.Time}</div>
            <div dangerouslySetInnerHTML={{ __html: item.Content }} />
            <div>{item.threadID}</div>
          </div>
        ))
      : ""}
  </div>
);

const mapState = state => state.thread || [];

export default connect(mapState)(Thread);
