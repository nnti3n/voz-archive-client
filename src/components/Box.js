import React from "react";
import { connect } from "react-redux";

const Box = ({ data }) => (
  <div>
    {data.length
      ? data.map(item => (
          <div key={item.ID}>
            <div>{item.ID}</div>
            <div>{item.Title}</div>
            <div>{item.Source}</div>
            <div>{item.PageCount}</div>
            <div>{item.PostCount}</div>
            <div>{item.ViewCount}</div>
            <div>{item.UserNameStarter}</div>
            <div> </div>
          </div>
        ))
      : "NotFound"}
  </div>
);

const mapState = state => state.box;

export default connect(mapState)(Box);
