// es8
// async wait
async function fireAsync() {
  return 7;  //相当于Promise.resolve(7);
}
// 返回的是Promise
console.log(fireAsync());
fireAsync().then((val) => {
  console.log(val);
})

// 让其按语句顺序执行
async function secAsync () {
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(1);
    },1000);
  })
  console.log(await promise1);  // 相当于执行了resovle
  console.log(await 12);  // 自动转换为Promise.resolve(12)
  console.log(await Promise.resolve(123));
  console.log(2);
  console.log(3);
  return 4;
}
secAsync().then((val)=> {
  console.log(val);
})