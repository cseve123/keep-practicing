// 正则
// es6-y修饰符，起头的必须匹配
const s = 'aaa_aa_a';
const r1 = /a+/g;
const r2 = /a+/y;
console.log(r1.exec(s));
console.log(r2.exec(s));
console.log(r1.exec(s));
console.log(r2.exec(s));

// es6-unicode u修饰符
// 𠮷 0xD842 0xDFB7
// http://www.fileformat.info/info/unicode/char/20bb7/index.htm
let s1 = '𠮷';
let s2 = '\uD842\uDFB7';
console.log(/^\uD842/.test(s2)); // 按字符匹配
console.log(/^\uD842/u.test(s2)); // 按unicode匹配
console.log(/^.$/.test(s1)); // 字符不匹配的中文
console.log(/^.$/u.test(s1)); // 有unicode匹配
console.log(/\u{20BB7}/u.test(s1));  // 匹配码点值
console.log(/𠮷{2}/u.test('𠮷𠮷'));  // u的范围匹配

// 扩展
// Unicode及编码方式概述
// Unicode转utf-16的转码公式