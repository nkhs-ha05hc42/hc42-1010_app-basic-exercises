const callbackA = () => {
    setTimeout(() => {
    console.log('★', new Date())
    setTimeout(() => {
    console.log('🔶', new Date())
    }, 3000)
    setTimeout(() => {
        console.log('end', new Date())
    }, 5000)
    }, 2000)
   }
   console.log("start", new Date())
   callbackA()