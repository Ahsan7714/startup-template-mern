const mongoose=require("mongoose")

const requestSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
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
    occupation:{
        type:String,
        required:true,
    },
    netWorth:{
        type:String,
        required:true,
    },
    liquidAssets:{
        type:String,
        required:true,
    },
    preferredLocation:{
        type:String,
        required:true,
    },
    notes:{
        type:String,
        required:true,
    },
    howHear:{
        type:String,
        required:true,
    },

})

module.exports=mongoose.model("Request",requestSchema)