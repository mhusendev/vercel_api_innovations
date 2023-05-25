var express = require('express');
var router = express.Router();
var userController = require('../controllers/user')
var middleware = require('../controllers/middleware')
/* GET users listing. */
router.get('/myinfo', userController.getUserbytoken);
router.post('/register',userController.registerUser)
router.post('/login',middleware.authentication)
router.get('/isloggedin',middleware.authorization,(req,res)=> {
    console.log(req.admin)
    res.status(200).send({ status:200,isAdmin:req.admin })
})
router.get('/logout', middleware.authorization,(req,res)=> {
    return res
    .clearCookie("token")
    .status(200)
    .json({ message: "Successfully logged out 😏 🍀" });
})
module.exports = router;
