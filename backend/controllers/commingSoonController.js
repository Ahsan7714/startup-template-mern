const catchAsyncError = require("../middleware/catchAsyncError")
const CustomError = require("../utils/errorhandler")


exports.getAllCommingSoonFranchise=catchAsyncError(async(req,res,next)=>{
    const franchise=await CommingSoonFranchise.find()
    res.status(200).json({success:true,franchise})
})

exports.addCommingSoonFranchise=catchAsyncError(async(req,res,next)=>{
    const franchise=await CommingSoonFranchise.create(req.body)
    res.status(200).json({success:true,message:"Franchise added successfully"})
})


exports.deleteCommingSoonFranchise=catchAsyncError(async(req,res,next)=>{
    const {id}=req.params
    const franchise=await CommingSoonFranchise.findById(id)
    if(!franchise){
        return next(new CustomError("Franchise not found",404))
    }
    await franchise.remove()
    res.status(200).json({success:true,message:"Franchise deleted successfully"})
})


