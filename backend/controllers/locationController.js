


exports.getAllLocations=catchAsyncError(async(req,res,next)=>{

    const address=req.query.address;

    const locations=await Location.find({
        address:{
            $regex:search,
            $options:'i'
        }
    })


    
    res.status(200).json({success:true,locations})
})


exports.addLocation=catchAsyncError(async(req,res,next)=>{
    const location=await Location.create(req.body)
    res.status(200).json({success:true,message:"Location added successfully"})
})


exports.deleteLocation=catchAsyncError(async(req,res,next)=>{
    const location=await Location.findById(req.params.id);
    if(!location){
        return next(new CustomError("Location not found",404))
    }
    await location.remove()
    res.status(200).json({success:true,message:"Location deleted successfully"})
})


exports.getLocation=catchAsyncError(async(req,res,next)=>{
    const location=await Location.findById(req.params.id);
    if(!location){
        return next(new CustomError("Location not found",404))
    }
    res.status(200).json({success:true,location})
})


exports.updateLocation=catchAsyncError(async(req,res,next)=>{
    const location=await Location.findById(req.params.id);
    if(!location){
        return next(new CustomError("Location not found",404))
    }
    location.name=req.body.name;
    location.address=req.body.address;
    location.location.lat=req.body.lat;
    location.location.lng=req.body.lng;
    await location.save()
    res.status(200).json({success:true,message:"Location updated successfully"})
})
