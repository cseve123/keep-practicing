// ES9-正则
// 原先的‘.’匹配不了uncode字符，和换行符
// s修饰符支持dotAll
console.log(/foo.bar/.test('foo\nbar'));
console.log(/foo.bar/s.test('foo\nbar'));
console.log(/foo.bar/us.test('foo\nbar'));  // 匹配
const re = /foo.bar/s
// 检查有没有
console.log('加了s', re.dotAll);
console.log('加了s', re.flags);

// 命名分组?<name>,会在数据的groups里
const t = '2019-06-07'.match(/(?<year>\d{4})-(?<mon>\d{2})-(?<day>\d{2})/);
console.log(t, t.groups.year);

// 先行和后行断言
let test = 'hello word';
console.log(test.match(/hello(?=\sword)/)); // 正常语句顺序的先行断言
console.log(test.match(/(?<=hello\s)word/));  // ?<= 往左判断是否是

// 作业
let foo = '$foo @foo #foo';
console.log(foo.replace(/(?<=\$)foo/, 'bar'));

