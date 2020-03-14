// ES9-Object的扩展
const input = {
  a: 1,
  b: 2
}

const output = {
  ...input,
  c: 3
}
console.log(input, output);

const {a, b, ...rest} = output;
console.log(a,b, rest);
