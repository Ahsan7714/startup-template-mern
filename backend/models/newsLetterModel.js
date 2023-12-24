const mongoose=require("mongoose")

const newLetterSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("NewsLetter",newLetterSchema)