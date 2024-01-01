const mongoose=require("mongoose")


const drinkSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    series:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Series",
        required:true,
    },
    franchise:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
},{
    timestamps:true,
})

module.exports=mongoose.model("Drink",drinkSchema)