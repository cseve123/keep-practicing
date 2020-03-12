// 字符串模板
const a = 20;
const b = 10;
const c = 'javascript';
// const str = 'my age is' + (a + b) + 'I love' + c;
const str = `my age is ${a + b} I love ${c}`;
console.log(str);
 
// 自定义模板
function Price (strings, type) {
  const a = 20;
  const b = 10;
  let [s1] = strings;
  let result;
  if (type === 'retail') {
    result = '购买单价是' + a;
  } else {
    result = '购买的批发价' + b;
  }
  return `${s1}${result}`;
}
let showTxt = Price `你此次购买的${'retail'}`;
console.log(showTxt);

// 作业
// 用Tag函数解决字符串模板问题
// 答题就是上面的例子