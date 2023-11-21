const User = require("../models/userModel");
const bcrypt = require("bcrypt");


//Encrypt Password

const securePassword = async(password)=>{

    try {

        const passwordHash = await bcrypt.hash(password,10);
        console.log(passwordHash);
        return passwordHash;
        
    } catch (error) {
        console.log(error.message);
        
    }
};

//user Register
const loadRegister = async (req, res) => {
    try {
      res.render("registration");
    } catch (error) {
      console.log(error.message);
    }
  };
  
//Create User
const createUser = async (req, res) => {
    try {
            const emailCheck = req.body.email;
            const checkData =await user.findOne({email:emailCheck})
            if(checkData){
                res.render('registration',{userCheck:'User already exists,Please try with alternative email'})
            }else{
                
                const sPassword = await securePassword(req.body.password);
                const User = new user({
                    fname: req.body.fname,
                    lname:req.body.lname,
                    email: req.body.email, 
                    password:sPassword,
                    is_admin: 0
                });
                console.log(req.body);
                const userData = await User.save();
        
                if (userData) {
                    res.render('registration', { message: "Registration Successful, Please verify your email" })
                }
                 else {
                    res.render('registration', { message: "Registration failed" })
                }
            }
    }

            
     catch (error) {
        console.log(error.message)
        // console.log("error is here in inserting");
    }

}

module.exports = {
    createUser,
    loadRegister,



};

