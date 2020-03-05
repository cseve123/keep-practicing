// 函数
// 默认值
// es5
// function f (x, y, z) {
//   if (x === undefined) {
//     x = 5;
//   }
//   if (y === undefined) {
//     y = 7;
//   }
// }
// es6
function f (x, y = 7, z = x + y) {
  console.log(Array.from(arguments));
  console.log(f.length) // 获取没有默认值的参数长度
  return x + y + z
}
console.log(f(1, undefined,undefined));

// 参数的获取
// es5
// function sum () {
//   let num = 0;
//   // Array.prototype.forEach.call(arguments, function (item) {
//   //   num += item * 1;
//   // })
//   Array.from(arguments).forEach(function (item) {
//     num += item * 1;
//   })
//   return num;
// }

// es6
function sum (base, ...nums) {
  let num = 0;
  nums.forEach(function (item) {
    num += item * 1;
  });
  return base + num;
}
console.log(sum(1, 2, 3));

// 参数打散
let data = [4, 7, 9];
function san (x, y, z) {
  return x + y + z;
}
// es5
// console.log(san.apply(this, data));
// es6
console.log(san(...data));

// 箭头函数 () => {}
// es5 调用时
let test = {
  name: 'test',
  say: function () {
    console.log(this.name);
  }
}
test.say();
// es6 定义时
let test2 = {
  name: 'test2',
  say: ()=> {
    console.log(this.name, this);
    // undefined, {}
    // 因为webpack把代码放进了eval()里，这里的this不是window
  }
}
test2.say();


// 作业
// 如何使用箭头函数来实现一个数组的排序问题
let zuoy1 = [3,4,5,6,2,1];
let zuoy11 = zuoy1.sort((a,b)=>{
  return a - b;
})
console.log(zuoy11);
// 箭头函数对this的处理还有什么妙用
// 答：绑定在定义时的对象而不是调用者，没有自己this，使用的事上层作用域的this；变不变只要上层作用域不变就行