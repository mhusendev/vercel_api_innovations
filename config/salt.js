// const bcrypt = require("bcrypt")

const encrypt =  async (password) => {
    //  const hash = await bcrypt.hash(password, 10);
    let hash = password
    return hash
}

const compare = async (password,hash) => {
    // let isValid = false
    //  const result = await bcrypt.compare(password, hash);
    let result 
    console.table(password,hash)
    if(password == hash) {
        result = true
    } else {
        result = false
    }
    console.log(result)
    return result
}

module.exports= {encrypt, compare}