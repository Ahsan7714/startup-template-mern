const catchAsyncError = require('../middleware/catchAsyncError')
const NewsLetter=require('../models/newsLetterModel')

// Add a new email to the news letter
exports.addNewsLetter= catchAsyncError(async(req,res)=>{
    
        const {email}=req.body
        const newLetter=await NewsLetter.create({email})
        res.status(200).json({success:true,message:"Email added to the news letter"})
})


// Get all emails from the news letter
exports.getAllNewsLetter=catchAsyncError(async(req,res)=>{
    const newsLetter=await NewsLetter.find()
    res.status(200).json({success:true,newsLetter})
})


// Delete all emails from the news letter
exports.deleteAllNewsLetter=catchAsyncError(async(req,res)=>{
    await NewsLetter.deleteMany()
    res.status(200).json({success:true,message:"All emails deleted from the news letter"})
})

