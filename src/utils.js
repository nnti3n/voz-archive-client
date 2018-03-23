export const isServer = typeof window === "undefined";

const VOZ_API =
  process.env.NODE_ENV === "production"
    ? "http://vozarchive.me:8080"
    : "http://localhost:8080";

export const fetchData = async path =>
  fetch(`${VOZ_API}${path}`).then(data => data.json());
