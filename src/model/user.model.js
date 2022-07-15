const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required : true},
        email: {type:String, required : true},
        phone: { type:Number, required :true },
        adress:{ type : String, required : true}

    },{
        versionKey: false,
        timestamps: true,
    }
) 

module.exports = mongoose.model('user',userSchema)