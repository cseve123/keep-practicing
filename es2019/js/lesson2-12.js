// 迭代器--遍历
let authors = {
  all: {
    fic: ['a', 'b', 'c'],
    sec: ['ee', 'cc','bb'],
    thi: ['ttt', 'hhh', 'nnn']
  }
}
//  es5
// ???怎么解耦了
// let result = []
// for (const [, v] of Object.entries(authors.all)) {
//   result = result.concat(v);
// }
// console.log('>>>>', result);

// 自定义遍历器接口
// authors[Symbol.iterator] = function () {  // [Symbol.iterator] 可迭代协议
//   // 输入 this
//   let list = this.all;
//   let keys = Reflect.ownKeys(list);
//   let values = [];
//   // 输出的格式  迭代协议
//   return {
//     next () {
//       if (!values.length) {
//         if (keys.length) {
//           values = list[keys[0]];
//           keys.shift();
//         }
//       }
//       return {
//         done: !values.length,
//         value: values.shift()
//       }
//     }
//   }
// }

// 配合生成器
authors[Symbol.iterator] = function * () {
  // 输入 this
  let list = this.all;
  let keys = Reflect.ownKeys(list);
  let values = [];
  while (1) {
    if (!values.length) {
      if (keys.length) {
        values = list[keys[0]];
        keys.shift();
        yield values.shift();
      } else {
        return false;
      }
    } else {
      yield values.shift();
    }
  }
}

let r = [];
for (let v of authors) {
  r.push(v);
}
console.log(r);

// 作业
// 什么是自定义遍历，如果有复杂的数据结构会使用自定义遍历吗
// 什么是迭代协议和可迭代协议
// 可迭代协议是在定义是[Symbol.Iterator], 而迭代协议是在返回的格式上必须是next(){return {done: false, value:1}}
// Generator和Iterator的关联关系理解