const express =require("express");
const user_Route = express();
const logger = require("morgan");
const userCtrl = require("../controller/userCtrl");




//setting
user_Route.set('view engine','ejs');
user_Route.set('views','./views/users')





//using
user_Route.use(logger('dev'))



//Routes for users

user_Route.get('/',(req,res)=>{
    res.render('login')
    
});
user_Route.get('/register',userCtrl.loadRegister);
user_Route.post('/register',userCtrl.createUser);




module.exports = user_Route;