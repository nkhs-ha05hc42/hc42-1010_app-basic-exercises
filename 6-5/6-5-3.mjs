let count = 0
let num =0
for(let i=1; i<=100; i++){
    if(i%2 === 0){
        count = count+i
    }
    if(count > 50){
        break
    }
    num++
} 
console.log(`ループ回数${num}回 合計数${count}個`)