import React from "react";
import { connect } from "react-redux";

const Thread = ({ data }) => (
  <div>
    {data.length !== 0
      ? data.map(item => (
          <div>
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
