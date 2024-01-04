const catchAsyncError = require("../middleware/catchAsyncError");
const FranchiseRequest = require("../models/RequestModel");
const CustomError = require("../utils/errorhandler");
const sendEmail = require("../utils/sendEmail");



exports.getAllRequest = catchAsyncError(async (req, res, next) => {
    console.log("hello landed here")
    const franchiseRequest = await FranchiseRequest.find();

    res.status(200).json({ success: true,franchiseRequest });
    
})


exports.addRequest = catchAsyncError(async (req, res, next) => {
    const franchiseRequest = await FranchiseRequest.create(req.body)
 const email = req.body.email
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

         <h2>Welcome to R&B Tea </h2>

         <p>Dear ${req.body.name},</p>

            <p>Thank you for your interest in R&B Tea franchise. We have received your request and will get back to you as soon as possible.</p>


       
         
         <footer>
             <p>Best regards,<br>Your R&B Tea Franchise Team</p>
         </footer>

     </div>
 </body>
 </html>
`;
 

await  sendEmail({
    email,
    subject: "R&B Tea Franchise Request",
    message: emailTemplate,
    });


    res.status(200).json({ success: true, message: "Request added successfully" })
})


exports.deleteRequest = catchAsyncError(async (req, res, next) => {
    const { id } = req.params
    const franchiseRequest = await FranchiseRequest.findById(id)
    if (!franchiseRequest) {
        return next(new CustomError("Request not found", 404))
    }
    await FranchiseRequest.findByIdAndDelete(id)
    res.status(200).json({ success: true, message: "Request deleted successfully" })
})
