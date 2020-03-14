// ES9
// for await of
function Gen (time) {
  return new Promise((resovle)=> {
    setTimeout(()=> {
      resovle(time);
    },time);
  })
}

async function test() {
  let arr = [Gen(2000), Gen(100), Gen(1000)];
  // for (const i of arr) { // 全部执行而不是按顺序执行的
  //   console.log(Date.now(), await i.then(console.log)); // await能执行但输出顺序不对
  // }
  for await (const i of arr) {
    console.log(Date.now(), i);
  }
}
test();

const obj = {
  count: 0,
  Gen (time) {
    return new Promise((resove)=>{
      setTimeout(()=> {
        resove({
          done: false,
          value: time
        })
      }, time)
    })
  },
  [Symbol.asyncIterator]() {
    let self = this;
    return {
      next () {
        self.count++;
        if (self.count < 4) {
          return self.Gen(Math.random() * 1000 )
        } else {
          return Promise.resolve({
            done: true,
            value: ''
          })
        }
      }
    }
  }
}

async function test2() {
  for await (const i of obj) {  // 上面将对象做成自定义可遍历
    console.log(Date.now(), i);
  }
}
test2();