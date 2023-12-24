const catchAsyncError = require("../middleware/catchAsyncError");
const FranchiseRequest = require("../models/franchiseRequestModel");
const User=require("../models/userModel")



exports.getAllRequest = catchAsyncError(async (req, res, next) => {
    const franchiseRequest = await FranchiseRequest.find();

    res.status(200).json({ success: true, franchiseRequest });

})


exports.addRequest = catchAsyncError(async (req, res, next) => {
 
    const franchiseRequest = await FranchiseRequest.create(req.body)
    res.status(200).json({ success: true, message: "Request added successfully" })
})


exports.deleteRequest = catchAsyncError(async (req, res, next) => {
    const { id } = req.params
    const franchiseRequest = await FranchiseRequest.findById(id)
    if (!franchiseRequest) {
        return next(new CustomError("Request not found", 404))
    }
    await franchiseRequest.remove()
    res.status(200).json({ success: true, message: "Request deleted successfully" })
})
