module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsOpening = [];
  let obj = [];
  let arrBadBrackets = [];

  bracketsConfig.forEach (item => {
    if(item[0] === item [1]){
      arrBadBrackets.push(item[0])
    }
  });

  bracketsConfig.forEach(element => {
    obj.push([...element])
  });
  obj.forEach(item => {
    item.reverse();
  });
  obj = Object.fromEntries(obj);

  for (let i = 0; i<bracketsConfig.length; i++) {
    bracketsOpening.push(bracketsConfig[i][0]);
  };

  for (let i = 0; i<str.length; i++) {
    let lastValue = stack[stack.length-1];
    if (arrBadBrackets.includes(str[i])){
      if(lastValue === str[i]){
        stack.pop();
      }else if (lastValue !== str[i]){
        stack.push(str[i]);
      }
    } else if (bracketsOpening.includes(str[i])){
      stack.push(str[i]);
    } else {
      if (stack.length === 0){
      return false;
      }
      if (lastValue === obj[str[i]]) {
        stack.pop();
      }else{
        return false;
      }}};

  return stack.length === 0;
}
