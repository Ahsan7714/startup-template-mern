const mongoose=require("mongoose")
const locationSchema=mongoose.Schema({
    
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
        },
        address:{
            type:String,
            required:true,
        },
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
})


module.exports=mongoose.model("Location",locationSchema)
