export function getCurrentPath(location) {
  let path = location.pathname.replaceAll("/", "");
  return path;
}

export const isCurrentPath = (locationProp, item, isBrowser) => {
  let matches = false;
  if (isBrowser) {
    let path = locationProp.replaceAll("/", "");
    matches = item == path;
  }
  return matches;
};
export const calculateYearsBetweenDates = (d1, d2) => {
  let yearsDiff = d1.getFullYear() - d2.getFullYear();
  return yearsDiff;
};
