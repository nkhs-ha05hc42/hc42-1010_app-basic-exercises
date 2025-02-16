const getSample3 = (req, res) => {
    const { code } = req.query;

    const predefinedData = {
        code: "HC42-9821",
        name: "情報太郎"
    }

    if (code === predefinedData.code) {
        res.send(JSON.stringify({
            code: predefinedData.code,
            name: predefinedData.name
        }))
    } else {
        res.send(JSON.stringify({
            status: "error",
            code: code,
            cause: "not found code!"
        }))
    }
}

const postSample3 = (req, res) => {
    const { code, postcode, address } = req.body;

    if (code === "HC42-9821") {
        res.send(JSON.stringify({
            status: "error",
            code: code,
            cause: "code already exists!"
        }))
        return;
    }

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

const putSample3 = (req, res) => {
    const { code, postcode, address } = req.body;

    const predefinedData = {
        code: "HC42-9823",
        postcode: "123-4567",
        address: "旧住所"
    }

    if (code !== predefinedData.code) {
        res.send(JSON.stringify({
            status: "error",
            code: code,
            cause: "not found code!"
        }))
        return;
    }

    const differences = {};
    if (postcode !== predefinedData.postcode) differences.postcode = postcode;
    if (address !== predefinedData.address) differences.address = address;

    console.log(differences);

    res.send(JSON.stringify({
        status: "OK",
        code: code
    }))
}

const deleteSample3 = (req, res) => {
    const { code } = req.query;

    const predefinedData = {
        code: "HC42-9824"
    }

    if (code !== predefinedData.code) {
        res.send(JSON.stringify({
            status: "error",
            code: code,
            cause: "not found code!"
        }))
        return;
    }

    res.send(JSON.stringify({
        status: "OK",
        code: code
    }))
}

export const q8_2Controller = {
    getSample3,
    postSample3,
    putSample3,
    deleteSample3,
}