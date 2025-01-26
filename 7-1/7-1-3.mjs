const ar = ["A","B"]
const calc = (ar,a) =>{
    ar.push(a)
    return a
}
const result = calc(ar,"C")
console.log("配列は",ar)