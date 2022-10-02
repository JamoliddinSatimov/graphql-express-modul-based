const jwt = require("jsonwebtoken")

const sign = (payload) => {
    return jwt.sign(payload, "1q2w3e4r")
}

module.exports = {
    sign
}