const values = [2,2,2,3]
const valueSet = new Set(values)
for(const value of values){
    valueSet.add(value)
}
console.log(valueSet)
console.log(Array.from(valueSet.values()))