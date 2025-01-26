const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
    // この例では処理が完了したことを返すだけなのでresolveには値を渡さない
    resolve()
    }, timeout)
    })
    const promiseA = async () => {
        await promiseSetTimeout(10000)
        console.log("★", new Date())
    }
    const promiseB = async () => {
        await promiseSetTimeout(20000)
        console.log("🔶", new Date())
    }
   console.log("start", new Date())
   promiseA()
   promiseB()
   console.log("end", new Date())