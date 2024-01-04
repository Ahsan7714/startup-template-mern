const Location=require("../models/locationModel");
const Franchise=require("../models/userModel")
const CustomError = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");


exports.searchLocation=catchAsyncError(async(req,res,next)=>{

    const address=req.query.address;

    const locations=await Location.find({
         address:{
            $regex:address,
            $options:'i'
        }
    })


    
    res.status(200).json({success:true,locations})
})

exports.getAllLocations=catchAsyncError(async(req,res,next)=>{
    const locations=await Location.find({})
    res.status(200).json({success:true,locations})
})


exports.addLocation=catchAsyncError(async(req,res,next)=>{
const {email,name,image,address,thirdPartyLink,close_time,open_time}=req.body; 
    const franchiseExist=await Franchise.findOne({email:req.body.email})
    if(!franchiseExist){
        return next(new CustomError("Franchise not found",404))
    }

    const locationExist=await Location.findOne({email:req.body.email})
    if(locationExist){
        return next(new CustomError("Location added for a franchinse associated with this email ",400))
    }

const franchise=franchiseExist._id;
    





    const location=await Location.create({email,name,image,address,thirdPartyLink,close_time,open_time,franchise})
    res.status(200).json({success:true,message:"Location added successfully"})
})


exports.deleteLocation=catchAsyncError(async(req,res,next)=>{
    const location=await Location.findById(req.params.id);
    if(!location){
        return next(new CustomError("Location not found",404))
    }
    await Location.findByIdAndDelete(req.params.id)
    res.status(200).json({success:true,message:"Location deleted successfully"})
})


exports.getLocation=catchAsyncError(async(req,res,next)=>{
    const location=await Location.findById(req.params.id);
    if(!location){
        return next(new CustomError("Location not found",404))
    }
    res.status(200).json({success:true,location})
})



