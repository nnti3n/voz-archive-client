export const isServer = typeof window === "undefined";

const VOZ_API =
  process.env.NODE_ENV === "production"
    ? "http://ec2-54-169-119-62.ap-southeast-1.compute.amazonaws.com:8080"
    : "http://localhost:8080";

export const fetchData = async path =>
  fetch(`${VOZ_API}/${path}`).then(data => data.json());
