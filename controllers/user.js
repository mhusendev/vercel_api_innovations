const models = require('../models/index')
const security =  require('../config/salt')
const SECRET_KEY = "Kmzway87@@";
const jwt = require('jsonwebtoken')
const getAllUser = async (req,res) => {
    try{

        const users = await models.users.findAll({})
        if(users.length !== 0) {
            res.status(200).send({
                status:'OK',
                message: '',
                data:users
            })
        } else {
            res.status(404).send({
                status: 'ERROR',
                message: 'EMPTY',
                data: {}
            })
        }

    }catch(err){
         console.log(err)
         res.status(400).send({
            status:'ERROR',
            message:'',
            data: {}
         })
    }
}

const getUserbytoken = async (req,res) => {
    const token = req.cookies.token
    if(!token) {
        return res.status(401).send({
            status:'ERROR',
            message:'Permission Denied'
        })
        }
    
        try{
           const data = jwt.verify(token,SECRET_KEY)
            
            if(data) {
              return res.status(200).send(data)
            }
            return res.status(401).send({
                status:'ERROR',
                message:'Invalid token'
            })
        }catch(error) {
            console.log(error)
            return res.status(400).send({
                status:'ERROR',
                message:'Request not send'
            })
        }

}
const emailCanUse = async(email)=> {
    try {
      const emailinDb = await models.users.findAll({
        where: {
            email : email
        }
      })
      if(emailinDb.length == 0) return true
      
      return false
     
    }catch(err){
        console.log(err)
    }
}
const registerUser = async (req,res) => {
    try{
       
        const {fullname,email,password,phone,instansi} = await req.body;
        const level = req.headers.admin?1:0
        let encryptPass = await security.encrypt(password)
        const checkemail = await emailCanUse(email)
        console.log(checkemail)
        if(checkemail == false) return res.status(400).send({
            status: 'ERROR',
            message: 'Email sudah terdaftar',
            data: {}
        })
        console.log(encryptPass)
        const users = await models.users.create({
            fullname,email,password: encryptPass,phone,instansi,level
        })

        if(users) {
            res.status(201).send({
                status: 'OK',
                message: 'Registrasi Berhasil',
            })
        }  else {
            res.status(400).send({
                status: 'ERROR',
                message: 'Registrasi Gagal',
            })
        }
    }catch(err) {
        console.log(err)
        res.status(400).send({
            status: 'ERROR',
            message: 'Registrasi Gagal',
 
        })
    }
}

module.exports = { getAllUser, registerUser,getUserbytoken}