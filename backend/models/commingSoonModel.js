const mongoose=require("mongoose")


const commingSoonSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
})

module.exports=mongoose.model("CommingSoon",commingSoonSchema)