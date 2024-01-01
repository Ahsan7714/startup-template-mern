const mongoose = require('mongoose');

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



    module.exports=mongoose.model("User",userSchema);
