// ES8-对象描述符 defineProperty
const data = {
  Por: '1/2',
  Dub: '3/4',
  Lim: '5/6'
}

Object.defineProperty(data, 'Lim', {
  enumerable: false,
  writable: false
})
console.log(Object.keys(data));
// 查看数据权限
console.log(Object.getOwnPropertyDescriptors(data));
console.log(Object.getOwnPropertyDescriptor(data, 'Lim'));