const mongoose = require('mongoose');
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
 const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:"franchise",
    },
    franchise:{
        name:{
            type:String,
            required:true,
        },
        phone:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        owner_name:{
            type:String,
            required:true,
        },
        
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
},{
    timestamps:true,


})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }

    this.password=await bcrypt.hash(this.password,10)
})
// JWT TOKEN
userSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{      
        expiresIn:process.env.JWT_EXPIRE
    })
}

//Compare Password
userSchema.methods.comparePassword=async function(enteredPassword){
    return await  bcrypt.compare(enteredPassword,this.password)

}

userSchema.methods.getResetPasswordToken=function(){
    const resetToken=crypto.randomBytes(20).toString("hex")
    this.resetPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex")
    this.resetPasswordExpire=Date.now()+30*60*1000
    return resetToken
}


    module.exports=mongoose.model("User",userSchema);
