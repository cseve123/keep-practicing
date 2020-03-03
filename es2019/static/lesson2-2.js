// let 和const
{
  let  a = 1;
  console.log(a)
}

let b = 2;
// 自带作用域
// 声明不提前

const a = 2
// const a 必须赋值
// a = 1 不可修改

console.log('_______练习题_________');

for (var i = 0;i < 3; i++) {
  setTimeout(function(){
    console.log(i);
  }, 1000);
}
// 得到3个 3

console.log(cc);
let cc = 1;
// 会报错