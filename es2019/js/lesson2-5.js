// 对象
// es6 简写
// es6 动态键
let x = 1;
let y = 2;
let obj = {
  x,
  [y + x]: 6,
  hello() {
    console.log('hellp')
  }
}
console.log(obj);

// Set 存储数据是唯一的，数据为可遍历对象
let s = new Set([1,2,3,3,4]);
s.add('6').add(9);
s.delete(9);
// s.clear();
s.has(9);

console.log(s.size, s);
console.log(s.keys());
console.log(s.values());
console.log(s.entries());

// Map 存储数据也是可遍历对象，必须是key、val,也是唯一,函数都可以做键
let m = new Map([[1,2],[4,5]]);
m.set(6,7).set(1,2).set(1,2);
m.get(6);
m.delete(6);
// m.clear();
m.has(6)
console.log(m.size, m);

// 对象拷贝
const target = {
  b: undefined,
  c: {
    d:1
  }
};
const source = {
  a: null,
  b: 2
}
// 浅拷贝-后覆前
Object.assign(target, source, {
  c: {
    f: 1
  }
});
console.log(target);

// weakSet，weakMap
// 不接受原始值，键必须为对象
// 都是对象的弱引用

// 作业
// 如果目标对象传入的是undefined和null会怎样
// 答：会被后传入的值覆盖掉
// 如果源对象的参数是undefined和null会怎么
// 答：会被后传入的值覆盖掉
// 如果目标对象是个嵌套对象，子对象属性会被覆盖么
// 答：源对象把目标给覆盖掉
