const map6_6_2 = new Map()
map6_6_2.set("A","カレー")
map6_6_2.set("B","定食")
map6_6_2.delete("A")
for(const [key, value] of map6_6_2){
    console.log(key, value)
}