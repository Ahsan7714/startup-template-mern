const mongoose=require("mongoose")
const locationSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    thirdPartyLink:{
        type:String,
        required:true,
    },
    franchise:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    closingTime:{
        type:String,
        required:true,
    },
    openTime:{
        type:String,
        required:true,
    },
})


module.exports=mongoose.model("Location",locationSchema)
