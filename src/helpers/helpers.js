export function getCurrentPath(location) {
  let path = location.pathname.replaceAll("/", "");
  return path;
}

export const isCurrentPath = (location, item) => {
  console.log("Function isCurrentPath location value");
  console.log(location);
  let path = location.replaceAll("/", "");
  console.log(path + " - " + item);
  return item == path;
};
export const calculateYearsBetweenDates = (d1, d2) => {
  let yearsDiff = d1.getFullYear() - d2.getFullYear();
  return yearsDiff;
};
