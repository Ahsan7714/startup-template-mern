const catchAsyncError = require("../middleware/catchAsyncError")
const Menu=require("../models/MenuModel");
const User=require("../models/userModel");
const CustomError = require("../utils/errorhandler");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");

exports.getAllFranchises=catchAsyncError(async(req,res,next)=>{
    const users=await User.find({role:"franchise"});
    res.status(200).json({success:true,users})
})


exports.getFranchise=catchAsyncError(async(req,res,next)=>{
    const user=await User.findById(req.params.id);
    if(!user){
        return next(new CustomError("User not found",404))
    }
    res.status(200).json({success:true,user})
})


exports.addFranchise=catchAsyncError(async(req,res,next)=>{
    const franchiseExist=await User.findOne({email:req.body.email})
    if(franchiseExist){
        return next(new CustomError("Franchise already exist",400))
    }
    const user=await User.create(req.body)
    user.save();
    const menu = await Menu.create({ franchise: user._id, series: [] });
    menu.save();
    const emailTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to the Franchise</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f8f8f8;
                margin: 0;
                padding: 0;
                color: #333333;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

            h2 {
                color: #3F691F;
            }

            p {
                color: #666666;
                line-height: 1.6;
            }

            ul {
                list-style-type: none;
                padding: 0;
            }

            li {
                margin-bottom: 10px;
            }

            footer {
                margin-top: 20px;
                text-align: center;
                color: #999999;
            }
        </style>
    </head>
    <body>
        <div class="container">

            <h2>Welcome to R&B Tea Franchise!</h2>

            <p>Dear ${req.body.franchise.owner_name},</p>

            <p>Congratulations! You have successfully joined our franchise.</p>

            <p>Your account details:</p>
            <ul>
                <li><strong>Email:</strong> ${req.body.email}</li>
                <li><strong>Password:</strong> ${req.body.password}</li>
            </ul>

            <p>Thank you for choosing to be a part of R&B Tea franchise. If you have any questions or need assistance, feel free to contact us.</p>

            <footer>
                <p>Best regards,<br>Your R&B Tea Franchise Team</p>
            </footer>

        </div>
    </body>
    </html>
  `;
    
    await sendEmail({
        email: req.body.email,
        subject: "Welcome to R&B Tea Franchise",
        message: emailTemplate,
      });


    res.status(200).json({success:true,message:"Franchise added successfully"})
})





exports.deleteFranchise=catchAsyncError(async(req,res,next)=>{
    const {id}=req.params
    const user=await User.findById(id)
    if(!user){
        return next(new CustomError("Franchise not found",404))
    }
    await User.findByIdAndDelete(id)
    res.status(200).json({success:true,message:"Franchise deleted successfully"})
})


exports.login=catchAsyncError(async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password){
        throw new CustomError("Please enter email and password",400)
    }

    const user=await User.findOne({email}).select("+password")
    if(!user){
        return next(new CustomError("Invalid email or password",401))
    }

    const isPasswordMatched=await user.comparePassword(password)
    if(!isPasswordMatched){
        return next(new CustomError("Invalid email or password",401))
    }
    sendToken(user,200,res)
}
)



exports.logout=catchAsyncError(async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).json({success:true,message:"Logged out successfully"})
})


exports.forgotPassword=catchAsyncError(async(req,res,next)=>{
    const email=req.body.email;
    const user=await User.findOne({email})
    if(!user){
        return next(new CustomError("User not found",404))
    }
    const resetToken=user.getResetPasswordToken()
    await user.save({validateBeforeSave:false})
    const resetPasswordUrl=`${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`
    const emailTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f8f8f8;
                margin: 0;
                padding: 0;
                color: #333333;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

            h2 {
                color: #3F691F;
            }

            p {
                color: #666666;
                line-height: 1.6;
            }

            ul {
                list-style-type: none;
                padding: 0;
            }

            li {
                margin-bottom: 10px;
            }

            footer {
                margin-top: 20px;
                text-align: center;
                color: #999999;
            }
        </style>
    </head>
    <body>
        <div class="container">

            <h2>Password Reset Request</h2>

            <p>Dear ${user.owner_name},</p>

            <p>You have requested a password reset. Please go to the following link to reset your password:</p>
            <a href=${resetPasswordUrl}>${resetPasswordUrl}</a>

            <p>If you did not request a password reset, please ignore this email.</p>

            <footer>
                <p>Best regards,<br>Your R&B Tea Franchise Team</p>
            </footer>

        </div>
    </body>
    </html>
    `;
    try{
        await sendEmail({
            email:user.email,
            subject:"Password Reset Request",
            templateData:emailTemplate
        })
        res.status(200).json({success:true,message:`Email sent to ${user.email}`})
    }catch(error){
        user.resetPasswordToken=undefined
        user.resetPasswordExpire=undefined
        await user.save({validateBeforeSave:false})
        return next(new CustomError("Email could not be sent",500))
    }
}
)



exports.resetPassword=catchAsyncError(async(req,res,next)=>{
    const resetPasswordToken=crypto.createHash("sha256").update(req.params.token).digest("hex")
    const user=await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()}
    })
    if(!user){
        return next(new CustomError("Invalid reset token",400))
    }
    if(req.body.password !== req.body.confirmPassword){
        return next(new CustomError("Password does not match",400))
    }
    user.password=req.body.password
    user.resetPasswordToken=undefined
    user.resetPasswordExpire=undefined
    await user.save()
    sendToken(user,200,res)
}
)


// contact us route with full name email and message 
exports.contactUs=catchAsyncError(async(req,res,next)=>{
    const {name,email,message}=req.body;
    const emailTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Us</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f8f8f8;
                margin: 0;
                padding: 0;
                color: #333333;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

            h2 {
                color: #3F691F;
            }

            p {
                color: #666666;
                line-height: 1.6;
            }

            ul {
                list-style-type: none;
                padding: 0;
            }

            li {
                margin-bottom: 10px;
            }

            footer {
                margin-top: 20px;
                text-align: center;
                color: #999999;
            }
        </style>
    </head>
    <body>
        <div class="container">

            <h2>Contact Us</h2>
            <p>We recieved a message from your side  </p>
            <p>Message: ${message}</p>
            <p>From: ${name}</p>
            <p>Email: ${email}</p>
            <p>Thank you for contacting us. We will get back to you as soon as possible.</p>
            
            <footer>
                <p>Best regards,<br>Your R&B Tea Franchise Team</p>
            </footer>

        </div>
    </body>
    </html>
    `;
    try{
        await sendEmail({
            email:req.body.email,
            subject:"Contact Us",
            message:emailTemplate
        })
        res.status(200).json({success:true,message:`Email sent to ${req.body.email}`})
    }catch(error){
        console.log(error)
        return next(new CustomError("Email could not be sent",500))
    }
}
)




// get own menu 
exports.getOwnMenu = catchAsyncError(async (req, res, next) => {
    const menu = await Menu.findOne({ franchise: req.user._id }).populate({
        path: "series",
        model: "Series",
    })
    if (!menu) {
        return next(new CustomError("Menu not found", 404));
    }
    res.status(200).json({ success: true, menu });
    }
);
