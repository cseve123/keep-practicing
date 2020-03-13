// export const name = 'hello';
// export const age = 'sex';
// export const arr = [1,2,3];
const name = 'hello';
const age = 'sex';
const arr = [1,2,3];

export default name;  // 默认导出只能有一个
export {
  age,
  arr
}
export function say () {
  console.log(1);
}

class Test {
  constructor () {
    this.id = 2
  }
}
export {
  Test
}