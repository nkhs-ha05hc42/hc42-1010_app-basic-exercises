const callbackA = (a, b) => {
    setTimeout(() => {
        const result = plus(a, b)
        console.log(result, new Date)
console.log('end', new Date)
    }, 2000)
}
const plus = (a, b) => {
    return a + b
}
console.log("start", new Date())
callbackA(2, 3)