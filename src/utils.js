export const isServer = typeof window === "undefined";

console.log(process.env.API);
console.log(process.env.NODE_ENV);

const VOZ_API =
  process.env.NODE_ENV === "production"
    ? process.env.API
    : "http://localhost:8080";

export const fetchData = async path =>
  fetch(`${VOZ_API}${path}`).then(data => data.json());
