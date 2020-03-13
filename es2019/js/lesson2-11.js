// 生成器
function * loop () {
  for (let i = 0; i < 5; i++) {
    yield console.log(i);
  }
}
const l = loop();
l.next();
l.next();
l.next();
l.next();
l.next();
l.next();
l.next();

function * gen () { // 控制函数内部执行
  let val
  val = yield [1, 2, 3]; // * 是用来遍历的，yield没有返回值
  console.log(val);
}

const l2 = gen();
console.log(l2.next(10));
console.log(l2.return(100));  // return 也能控制内部停止
console.log(l2.next(20));  // 传参是控制内部运行流程

// 解除无限循环
function * gen2 () {
  while (true) {
    try {
      yield 1;
    } catch (error) {
      console.log(error.message);
    }
  }
}
const l3 = gen2();
console.log(l3.next());
console.log(l3.next());
console.log(l3.next());
console.log(l3.throw(new Error('ssss'))); // 抛出异常，相当于continue
console.log(l3.next());

// 应用--抽奖
function * draw (first=1, second=3, third=5) {
  console.log(first,second, third);
  const firstList = ['1A', '1B', '1C'];
  const secondList = ['2A', '2B', '2C', '2D', '2E', '2F'];
  const thirdList = ['3A', '3B', '3C', '3D', '3E', '3F', '3G', '3H'];
  let random;
  let count = 0;
  while (true) {
    if (count < first) {
      random = Math.floor(Math.random() * firstList.length);
      yield firstList[random];
      count++;
      firstList.splice(random, 1);
    } else if (count < first + second) {
      random = Math.floor(Math.random() * secondList.length);
      yield secondList[random];
      count++;
      secondList.splice(random, 1);
    } else if (count < first + second + third) {
      random = Math.floor(Math.random() * thirdList.length);
      yield thirdList[random];
      count++;
      thirdList.splice(random, 1);
    } else {
      return false;
    }
  }
}
let draw1 = draw();
console.log(draw1.next().value);
console.log(draw1.next().value);
console.log(draw1.next().value);
console.log(draw1.next().value);
console.log(draw1.next().value);
console.log(draw1.next().value);
console.log(draw1.next().value);

// 应用--数数
function * app (x=1) {
  while (1) {
    if (x%3 === 0) {
      yield x;
    }
    x++;
  }
}
const draw2 = app();
console.log(draw2.next().value);
console.log(draw2.next().value);
console.log(draw2.next().value);
console.log(draw2.next().value);
console.log(draw2.next().value);