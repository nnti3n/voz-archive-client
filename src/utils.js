export const isServer = typeof window === "undefined";

console.log(process.env.API);
console.log(process.env.NODE_ENV);

const VOZ_API =
  process.env.NODE_ENV === "production"
    ? process.env.API
    : "http://localhost:8080";

export const fetchData = async path =>
  fetch(`${VOZ_API}${path}`).then(data => data.json());

export const excludeThreads = [6735473, 6609261, 3613304, 2024506, 5523490];
