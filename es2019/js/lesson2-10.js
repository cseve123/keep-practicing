// 反射和代理
// Reflect
// Math.floor.apply(null, [1, 2]);
// 扫代码的时候并没有被执行，真正用apply时才调用Math.floor方法
// 反射根据执行过程中我的条件去调用方法，有别却常规的需要先明确方法
console.log(Reflect.apply(Math.floor, null, [1,2]));
let price = 91.5;
// if (price > 100) {
//   price = Math.floor.apply(null, [price]);
// } else {
//   price = Math.ceil.apply(null, [price]);
// }
console.log(Reflect.apply(price > 100 ? Math.floor : Math.ceil, null, [price]));

// let d = new Date();
let d = Reflect.construct(Date, []);  // 动态实例
console.log(d.getTime());

// 对象和反射的返回值不同
// 3c标准在对象上的属性，在往Reflect上迁移
let student = {};
// Object 返回对象
// Reflect 返回boolean
const r = Reflect.defineProperty(student, 'name', { value: 'Reflect1' });
console.log(student, r);
// Reflect.deleteProperty(student, 'name');
Reflect.get(student, 'name');
Reflect.get([1, 2], 1) // 后面是索引值
Reflect.set(student, 'sex', 'male')
console.log(Reflect.getOwnPropertyDescriptor(student, 'name')); 
console.log(Reflect.getPrototypeOf(d));
console.log('has', Reflect.has(student, 'c'));
// 对象可不可扩展
// Object.freeze(student);
console.log(Reflect.isExtensible(student));
console.log(Reflect.ownKeys(student));
console.log(Reflect.ownKeys([1,2]));

let arr = [1,2,4];
console.log(Reflect.setPrototypeOf(arr, String.prototype));  // 修改原型
console.log(Reflect.getPrototypeOf(arr));

// Proxy 屏蔽原始信息，让其安全，中转,不让用户知道真实的，而是经过处理的
let o = {
  name: 'jc',
  price: 190
}
window.addEventListener('error',(e) => {
  console.log(e.message);
  // todo report 解耦上报
}, true)
let validator = (target, key, value) => {
  if (Reflect.has(target, key)) {
    if (key === 'price') {
      if (value > 300) {
        // 错误上报
        throw new TypeError('price exceed 300');
        // return false
      }
      target[key] = value;
    } else {
      target[key] = value;
    }
  } else {
    return false;
  }
}
let d1 = new Proxy(o, {
  // get (target, key) {
  //   if (key === 'price') {
  //     return target[key] + 20;
  //   } else {
  //     return target[key]
  //   }
  // }
  // 应用--只读
  get (target, key) {
    return target[key] || '';
  },
  // set (target, key, value) {
  //   return false
  // }

  // 应用--校验
  set: validator
});
console.log(d1.price);

//es5-只读
// for(let [key] of Object.entries(o)) {
//   Object.defineProperty(o, key, {
//     writable: false
//   })
// }

// 应用--只读唯一
class Componet {
  constructor () {
    this.proxy = new Proxy({
      id: Math.random().toString(36).slice(-8)
    }, {}) // {}透传不处里
  }
  get id() {
    return this.proxy.id;
  }
}
let com1 = new Componet();
let com2 = new Componet();
for (let i = 0; i<10;i ++) {
  console.log(com1.id, com2.id);
}
com1.id = 123;
console.log(com1.id)

// 应用--阅后即焚-可撤销代理
let d2 = Proxy.revocable(o, {
  get (target, key) {
    if (key === 'price') {
      return target[key] + 20;
    } else {
      return target[key]
    }
  }
});
console.log(d2.proxy.price, d2);
setTimeout(()=> {
  d2.revoke();
  console.log(d2.proxy.price, d2);
})

// 作业
// 组件初始化的时候都赋值一个可读且随机的id
// 临时代理有哪些应用场景
// 答：重组数据的映射、账户信息的保护、
// 如何把接口的数据用代理进行包装