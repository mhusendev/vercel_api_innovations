const bcrypt = require("bcrypt")

const encrypt =  async (password) => {
     const hash = await bcrypt.hash(password, 10);

    return hash
}

const compare = async (password,hash) => {
    let isValid = false
     const result = await bcrypt.compare(password, hash);
    return result
}

module.exports= {encrypt, compare}