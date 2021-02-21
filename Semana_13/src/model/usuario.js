const mongoose = require('mongoose');
const bcryp = require('bcryptjs');

const UserSchema = new mongoose.Schema({

    nombreUsuario: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }

});

UserSchema.methods.encryptPassword = async pass => {
    const salt = await bcryp.genSalt(10);
    return await bcryp.hash(pass, salt);

}

UserSchema.methods.matchPassword = async function(pass) {
    return await bcryp.compare(pass, this.pass);
}

module.exports = mongoose.model("User", UserSchema);