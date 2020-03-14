// ES9-Promise 最后finally(),不论成功或失败都会执行
const Gen = (time) => {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      if (time < 500) {
        reject(time);
      } else {
        resolve(time);
      }
    },time)
  })
}

Gen(Math.random() * 1000)
.then(val => console.log('resove', val))
.catch(err => console.log('reject', err))
.finally(() => {console.log('fish')})
