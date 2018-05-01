import React from "react";
import { spinner } from "../css/Switcher.css";

export default () => (
  <div className={spinner}>
    <div>
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  </div>
);
