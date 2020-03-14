// ES10
// JSON.stringify对unicode的支持
console.log(JSON.stringify('\u{D800}'));

// Array.flat 打平数组，按传入维度打平
let arr = [1, [2,3], [4,5], [6, [7,8]]];
console.log(arr.flat(2));

// Array.flatMap  相当于先map在flat
let arr2 = [1,2,3];
arr2.flatMap(item => {
  console.log(item * 2)
})


// String--trim
let str = '  log  ';
console.log(str);
console.log(str.replace(/^\s+|\s+$/g, ''));
console.log(str.trimStart());
console.log(str.trimLeft());
console.log(str.trimRight());
console.log(str.trimEnd());
console.log(str.trim());

let str2 = `"foo" and "bar" and "baz"`
// es5
function select (reg, str) {
  const matches = [];
  while (true) {
    const match = reg.exec(str);
    if (match === null) {
      break;
    }
    matches.push(match[1]);
  }
  return matches;
}
console.log(select(/"([^"]*)"/g, str2));
console.log(str2.match(/"([^"]*)"/g));  // 会把正则的全局都输出“”xx“”

function select2 (reg, str) {
  const matches = [];
  str.replace(reg, function(all, first) {  // 替换接收函数，第一个是全部，第二个是捕获
    console.log('全部', all, first);
    matches.push(first);
  })
  return matches;
}
console.log(select2(/"([^"]*)"/g, str2));

// matchAll 捕获得到的对象
function select3 (reg, str) {
  const matches = [];
  for (const item of str.matchAll(reg)) {
    matches.push(item[1]);
  }
  return matches;
}
console.log('matchAll', select3(/"([^"]*)"/g, str2));

// fromEntries
let arr3 = [['foo', 1], ['bar', 2]];  // formEntries将这样的数组变成了键值对
const obj = Object.fromEntries(arr3);
console.log(obj);

// Object.entries  将键值对变成上面的数组形式
let obj2 = {
  adc: 1,
  dcf: 2,
  ddddfe: 3
}
let res = Object.fromEntries(Object.entries(obj2).filter(([key, val]) => {
  return key.length > 3;
}))
console.log('entries', res);


try {
  
} catch (error) {  // es10 小括号参数可以去掉
  
}

// 新的数字类型BigInt
// console.log(11n);

// 作业
// url的search返回object
let arrList1 = location.search.replace('?', '').split('&');
const arrList2 = arrList1.map(item => {
  return item.split('=');
})
console.log(Object.fromEntries(arrList2));