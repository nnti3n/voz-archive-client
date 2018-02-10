const thread = ["THREAD", "THREAD_WITH_PAGE"];
const box = ["BOX", "BOX_WITH_PAGE"];

const isPath = (type, path) => path.indexOf(type) > -1;

export default (state = "next", action = {}) => {
  if (!action.meta || !action.meta.location) {
    return state;
  }

  const type = action.type;
  const prevType = action.meta.location.prev.type;

  if (type === prevType) {
    return state;
  }
  if (type === "HOME") {
    return "back";
  } else if (isPath(type, box) && prevType === "HOME") {
    return "next";
  } else if (isPath(type, box) && isPath(prevType, thread)) {
    return "back";
  } else if (isPath(type, thread)) {
    return "next";
  }

  return state;
};
