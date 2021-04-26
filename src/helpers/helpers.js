export function getCurrentPath (location) {
    let path = location.pathname.replaceAll('/','');
    return path; 
}

export const isCurrentPath = (location, item) => {
    console.log("income location");
    console.log(location)
    let path = location.replaceAll('/','');
    console.log(path + ' - ' + item)
    return item == path;
}
