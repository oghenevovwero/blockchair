function formatter(num) {
  let interNum = ""
  if(interNum.indexOf(".") === -1){
    interNum = num.toFixed(2).toString()
  }else{
    interNum = num.toString();
  }
  const indexOfDot = interNum.indexOf(".");
  let fractionalPart = "";
  fractionalPart = interNum.substring(indexOfDot);
  interNum = interNum.substring(0, indexOfDot);

  let subStringFromEnd = [];
  while (interNum.length > 3) {
    subStringFromEnd = subStringFromEnd.concat(interNum.substring(interNum.length - 3));
    interNum = interNum.substring(0, interNum.length - 3);
  }
  let out = interNum;
  for (let i = subStringFromEnd.length - 1; i > -1; i--) {
    out = out.concat(",").concat(subStringFromEnd.at(i));
  }
  return out + fractionalPart;
}

console.log(formatter(100000000));
