const Object1 = (ja1,en1) => {
    const dat1 =
    {
        ja: ja1,
        en: en1
    }
        return dat1
}
const Object2 = (ja2,en2) => 
{
    result = Object1(ja2,en2)
    return result
}
const result = Object1("リンゴ","apple")
console.log(result)