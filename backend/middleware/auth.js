const catchAsyncError=require("./catchAsyncError")
const jwt=require("jsonwebtoken")
const User=require("../models/userModel")
const CustomError = require("../utils/errorhandler")

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
    // console.log(token);
  
    if (!token) {
      return next(new CustomError("please login to access this recsource", 401));
    }
  
    try
    {
        console.log("1 getting here")
        const decodedData =await jwt.verify(token,process.env.JWT_SECRET);
        console.log("2 token get")
console.log("3 getting user")
    req.user = await User.findOne({_id:decodedData.id});
    }catch(err){
        return next(new CustomError("User not found with this id", 404));
    }
    next();
  });

  exports.authorizeRoles = (...roles) => {
    return async (req, res, next) => {
        try {
 

            if (!roles.includes(req.user.role)) {
                throw new CustomError(`Role: ${req.user.role} is not allowed to access this resource`, 403);
            }

            next();
        } catch (error) {
            next(error); // Forward any errors to the error handling middleware
        }
    };
};
