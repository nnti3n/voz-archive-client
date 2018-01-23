export const isServer = typeof window === "undefined";

export const fetchData = async path =>
  fetch(`http://localhost:8080${path}`).then(data => data.json());
