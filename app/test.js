const path = window.location.pathname
let hashId = "";
if (path.charAt(path.length - 1) === "/") {
  //in case the browser appends a / at the end
  const toStrip = path.substring(0, path.length - 1);
  hashId = toStrip.substring(toStrip.lastIndexOf("/") + 1);
} else {
  hashId = path.substring(path.lastIndexOf("/") + 1);
}

console.log(hashId);
