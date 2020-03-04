// 全局变量和作用域
window.abc = 123;
abc = 123;
// 有区别没有var 声明式挂在window的全局

// 函数作用域和局部作用域
function test () {
  var a = 3; 
  return a + 4;
}
test();

// 块级作用域

// 动态作用域