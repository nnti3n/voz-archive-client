import React from "react";
import { connect } from "react-redux";

const Thread = ({ data }) => <div>Hello guys length {data.length}</div>;

const mapState = state => state.thread || [];

export default connect(mapState)(Thread);
