const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
    // この例では処理が完了したことを返すだけなのでresolveには値を渡さない
    resolve()
    }, timeout)
    })

    const END = async () => {
        await promiseSetTimeout(5000)
        console.log("end", new Date())
    }

   const promiseA = async () => {
    await promiseSetTimeout(2000)
        console.log("★", new Date())
        await END()
    await promiseSetTimeout(3000)
        console.log("🔶", new Date())
   }
   console.log("start", new Date())
   promiseA()