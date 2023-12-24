const mongoose=require("mongoose")
const locationSchema=mongoose.Schema({
    address:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    location:{  
        lat:{
            type:Number,
            required:true,
        },
        lng:{
            type:Number,
            required:true,
        }
    },
    menuLink:{
        type:String,
        required:true,
    },
    franchise:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Franchise",
        required:true,
    },
})


module.exports=mongoose.model("Location",locationSchema)
