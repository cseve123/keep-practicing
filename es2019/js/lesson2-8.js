// 解构赋值
const arr = ['hello', 'word', 'a', 'b', 'c'];
// let firstName = arr[0];
// let subName = arr[1];

let [firstName, subName] = arr;
console.log(firstName, subName);
// 结构赋值支持所有可遍历对象
// Array|Object
// 跳过
let [,,a, ,c] = arr;
let s = 'abcd';
let [s1, ,s3] = s;
let [set1, set2] = new Set([1,2,3]);
console.log(a,c,s1,s3,set1, set2);

let obj1 = {
  name: '1',
  subName: '2'
}
// ??? 浏览器没跑过
// [obj1.name, obj1.subName] = ['s', 'd'];
// console.log(obj1);

for (const [k,v] of Object.entries(obj1)) {
  console.log(k, v);
}

// 剩余参数和默认值
let arr2 = [1,2,3,4,5,6];
let [a2 = 'hello',b2,...last] = arr2;
console.log(last);
// 如果数组是空的到的结果是[undefined, undefined, []]

let obj2 = {
  t: 'title',
  w: undefined, // 默认值替换undefined，不替换null
  
  size: {
    margin: 1,
    padding: 2
  },
  list: [3,4],
  h: 'height',
}
// 别名，默认值
let { t:title,w=123,size: {margin: m}, list: [index],...last2} = obj2;
console.log(title,w,m,index,last2);