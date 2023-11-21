const mongoose = require('mongoose'); 


// Schema of the Mongo model
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        
    },

    lname:{
        type:String,
        required:true
        
    },
    
    email:{
        type:String,
        required:true,
        unique:true
    },

    // phone:{
    //     type:integer,
    //     required:true,
    //     unique:true
        
    // },
        
    password:{
        type:String,
        required:true
    },

    // is_verified:{
    //     type:Number,
    //     default:0

    // },
    // is_admin:{
    //     type:Boolean,
    //     default:false
    // }
},

{timeStamps:true});



const user = mongoose.model('User',userSchema);


module.exports = user;


