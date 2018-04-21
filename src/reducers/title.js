export default (state = "VozArchive", action = {}) => {
  switch (action.type) {
    case "HOME":
      return "VozArchive";
    case "BOX":
      return `VozArchive: Box F${action.payload.id}`;
    case "THREAD_FETCHED":
      return `VozArchive: Thread ${action.payload.id}`;
    default:
      return state;
  }
};

// const capitalize = str =>
//   str.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
