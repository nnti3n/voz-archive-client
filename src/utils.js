export const isServer = typeof window === "undefined";

const VOZ_API =
  process.env.NODE_ENV === "production"
    ? process.env.API
    : "http://localhost:8080";

console.log(VOZ_API);
console.log(process.env.NODE_ENV);

export const fetchData = async path =>
  fetch(`${VOZ_API}${path}`).then(data => data.json());

export const excludeThreads = [6735473, 6609261, 3613304, 2024506, 5523490];

import isAfter from "date-fns/is_after";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import format from "date-fns/format";

export function formatDate(date) {
  let now = new Date();
  if (isAfter(date, now.setDate(now.getDay() - 2))) {
    return distanceInWordsToNow(date, {
      addSuffix: true
    });
  }
  return format(date, "MM/DD/YYYY");
}
