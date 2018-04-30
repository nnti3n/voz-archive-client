export default (state = "VozArchive", action = {}) => {
  switch (action.type) {
    case "HOME":
      return "Vozforums Archive";
    case "BOX":
      return `Box: F${action.payload.id}`;
    case "THREAD_FETCHED":
      return `Thread: ${action.payload.data.thread.Title}`;
    default:
      return state;
  }
};

// const capitalize = str =>
//   str.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
