const getFruits = (req, res) => {
    const fruits = [
        { en: "apple", ja: "りんご" },
        { en: "lemon", ja: "レモン" },
        { en: "grape", ja: "ぶどう" }
    ]

    res.send(JSON.stringify(fruits));
}

const getFruitByName = (req, res) => {
    const fruits = [
        { en: "apple", ja: "りんご" },
        { en: "lemon", ja: "レモン" },
        { en: "grape", ja: "ぶどう" }
    ]

    const fruitName = req.params.name;

    const fruit = fruits.find(f => f.en === fruitName);

    if (fruit) {
        res.send(JSON.stringify(fruit));
    } else {
        res.send(JSON.stringify({
            status: "error",
            en: fruitName,
            cause: "not found!"
        }))
    }
}

export const q8_3Controller = {
    getFruits,
    getFruitByName,
}