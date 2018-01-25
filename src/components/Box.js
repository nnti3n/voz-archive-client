/* eslint no-unused-labels: 0 */

import React from "react";
import { connect } from "react-redux";
import { goToPage } from "../actions";
import styles from "../css/Box.css";

const Box = ({ data, goToPage }) => (
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
  </div>
);

const mapState = state => state.box;
const mapDispatch = { goToPage };

export default connect(mapState, mapDispatch)(Box);
