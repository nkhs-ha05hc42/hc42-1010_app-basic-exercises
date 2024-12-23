const arrayTexts = ["A","Text","Array"]
console.log(arrayTexts[0], arrayTexts[1], arrayTexts[2])
arrayTexts[1] = "NewText"
const arrayTexts2 = [ ...arrayTexts ]
console.log(arrayTexts2[0], arrayTexts2[1], arrayTexts2[2])