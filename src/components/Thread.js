import React from "react";
import { connect } from "react-redux";

const Thread = ({ thread }) => <div>Hello guys length {thread.length}</div>;

const mapState = state => state.thread || [];

export default connect(mapState)(Thread);
