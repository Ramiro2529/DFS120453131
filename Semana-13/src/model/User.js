 const mongoose = require('mongoose'); 
 const bcryp = require('bcryptjs')

 const UserSchema = new mongoose.Schema({
     nombreUsuario :{type: String , required : true}, 
     email: {type: String, required: true}, 
     password : {type: String, required: true}
    }); 

    UserSchema.methods.encryptPassword = async password => {
        const salt = await bcryp.genSalt(10); 
        return await bcryp.hash(password, salt);
    }

    UserSchema.methods.matchPassword = async function(password){
         return await bcryp.compare(password, this.password); 
    }

    module.exports = mongoose.model("User", UserSchema); 