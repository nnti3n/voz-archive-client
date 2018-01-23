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
  } else if (type === "BOX" && prevType === "HOME") {
    return "next";
  } else if (type === "BOX" && prevType === "THREAD") {
    return "back";
  } else if (type === "THREAD") {
    return "next";
  }

  return state;
};
