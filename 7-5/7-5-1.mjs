const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
    // この例では処理が完了したことを返すだけなのでresolveには値を渡さない
    resolve()
    }, timeout)
    })
    
    const promiseA = () => {
        promiseSetTimeout(10000)
        .then(() => {
        console.log("★", new Date())
        })
        promiseSetTimeout(20000)
        .then(() => {
        console.log("🔶", new Date())
        })
    }
    
    console.log("start", new Date())
    promiseA()
    console.log("end", new Date())