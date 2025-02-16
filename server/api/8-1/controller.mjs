const getSample1 = (req, res) => {
    const code = req.query.code;

    res.send(JSON.stringify({
        code: code,
        name: "情報太郎"
    }),
)
}
const postSample2 = (req, res) => {
    const { code, postcode, address } = req.body;

    console.log({
        code,
        postcode,
        address
    })

    res.send(JSON.stringify({
        status: "OK",
        postcode: postcode
    })
)
}

const putSample2 = (req, res) => {
    const { code, postcode, address } = req.body;

    console.log({
        code,
        postcode,
        address
    })

    res.send(JSON.stringify({
        status: "OK",
        postcode: postcode
    }))
}

const deleteSample2 = (req, res) => {
    const { code } = req.query;

    res.send(JSON.stringify({
        status: "OK",
        code: code
    }))
}
export const q8_1Controller = {
    getSample1,
    postSample2,
    putSample2,
    deleteSample2,
}