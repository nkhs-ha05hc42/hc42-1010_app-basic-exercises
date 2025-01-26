const promiseSetTimeout = (timeout) =>
    new Promise((resolve) => {
    setTimeout(() => resolve(), timeout)
    })
   const func1 = async () => {
    await promiseSetTimeout(3000)
    return await Promise.resolve("Test1")
   }
   const func2 = async () => {
    await promiseSetTimeout(2500)
    return await Promise.resolve("New")
   }
   const func3 = async () => {
    const [result1, result2] = await Promise.all([func1(), func2()])
    console.log(result2, result1, new Date())
   }
   console.log("start", new Date())
   func3()
   console.log("end", new Date())