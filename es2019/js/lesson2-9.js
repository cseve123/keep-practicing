// Promise
function loadScript (src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => {
    callback && callback();
  }
  document.head.append(script);
}

function test () {
  console.log('test');
}
loadScript('./1.js', function() {
  loadScript('./2.js', function () {
    loadScript('./3.js', test);
  })
});

// es6
function loadScript2 (src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(src);
    }
    script.onerror = (msg) => {
      // 不要用throw
      // 利用catch
      reject(new Error('sss'));
    }
    document.head.append(script);
  })
}
loadScript2('./4.js')
.then(() => {
  loadScript2('./2.js'); // 这句话不能阻断后面的因为还是返回了promise, 要用return中断
  console.log('123',loadScript2('./2.js'));
}, () => {
  console.log('error')
})
.then(()=>{
  console.log('>>>>>>>', loadScript2('./3.js'))
})
.catch((error)=> {
  console.log(error)
})


// promise静态方法
function test (bool) {
  if (bool) {
    return new Promise((resolve, reject) => {
      resolve(23);
    })
  } else {
    return Promise.resolve(42);  // 静态转换
  }
}
test(false).then((val) => {
  console.log(val);
})

// 多个promise
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject(3); // 一个失败就catch
Promise.all([p1,p2,p3]).then((data) => {
  console.log('all>>>>', data);
},() => {
  console.log('all error')
})

const p4 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('race1');
  }, 1000)
})

const p5 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('race2');
  }, 3000)
})

Promise.race([p4(), p5()]).then((val) => {
  console.log(val);
})