// es5 Array
// for 支持break 和continue
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i<arr.length; i++) {
  console.log(arr[i]);
}
// forEach
arr.forEach(function (item) {
  console.log(item);
})

// every 根据返回值来确定遍历是否继续执行
arr.every(function (item) {
  if (item === 2) {

  } else {
    console.log(item)
  }
  return true;
})

// for in 主要为对象来做,会对索引都会执行
// arr.a = 9;
for (let index in arr) {
  // index 是字符串
  if (index == 2) {
    continue;
  }
  console.log(index, arr[index]);
}

// es6
// for of 遍历，包括对象和数组外，可遍历的对象
for (let item of arr) {
  console.log(item);
}


// 伪数组转换
// es5
// let args = [].slice.call(arguments);  // collection
// let imgs = [].slice.call(document.querySelectorAll('img'));  // nodeList
// es6 Array.from()
// 参数：Array.from(arrLike, mapFn, thisAg)
// 伪数组条件：1，按索引；2，有length
// let args = Array.from(arguments);
let array = Array.from({length: 5}, ()=>1);
console.log(array);


// 数组创建
// es5
// let arr = Array(5);
// let arr2 = ['', ''];
// es6
// Array.of()
let array2 = Array.of(1,3,3,4,5);
console.log(array2);
// Array.fill()
// 参数：Array.fill(val, start, end) 不包含结尾索引
let array3 = Array(5).fill(1);
console.log(array3);
let array4 = [1,3,4,5,6];
console.log(array4.fill(8, 2, 3));


// 查找
// es5
// let find = arr.filter(function (item) {
//   // filter所有满足条件的
//   return item === 3;
// })
// console.log(find);
// es6
// Array.find() 有就返回一个值，没有就undefined
let find = arr.find(function(item) {
  return item % 2 === 0;
})
console.log(find);
// Array.findIndex() 找索引


// 作业
// js哪些元素可以遍历
// 答：字符串，数组，对象，arguments参数，nodeList节点，set, map, 迭代器和生成器
// 如何给数据接口自定义遍历
// 答: 转数组，转对象，转成迭代器
// filter和find的区别
// 答：1，filter返回所有符合条件的，find只返回第一个符合条件的；2，不符合时返回不同，filter返回[]，find返回undefined