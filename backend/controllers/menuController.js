const catchAsyncError = require("../middleware/catchAsyncError");
const Menu = require("../models/MenuModel");
const Series = require("../models/seriesModel");
const Drink = require("../models/drinkModel");
const User=require("../models/userModel")
const CustomError = require("../utils/errorhandler");
const cloudinary = require("cloudinary");

// Controller for adding a series to the menu
exports.addSeriesToMenu = catchAsyncError(async (req, res, next) => {
  const {name,image } = req.body;

  // implment cloudinary here to upload image in series folder 

  const myCloud = await cloudinary.v2.uploader.upload(image, {
    folder: "series",
    width: 800,
    crop: "scale",
  });
  console.log(myCloud)





  const series = await Series.create({name,image:myCloud.secure_url,drinks:[],franchise:req.user._id});
  
  const menu = await Menu.find({ franchise: req.user._id });
  // add series to menu 
  if (menu.length === 0) {
    await Menu.create({ series: [series._id], franchise: req.user._id });
  } else {
    await Menu.findOneAndUpdate(
      { franchise: req.user._id },
      { $push: { series: series._id } },
      { new: true }
    );
  }

  res.status(201).json({ success: true, menu });
});

// Controller for adding a drink to a series in the menu
exports.addDrinkToSeriesInMenu = catchAsyncError(async (req, res, next) => {
  const {name,image, seriesId,  } = req.body;
  const franchiseId = req.user._id;

const myCloud=await cloudinary.v2.uploader.upload(image,{
  folder:"drinks",
  width:800,
  crop:"scale"
})



const drink=await Drink.create({name,image:myCloud.secure_url,series:seriesId,franchise:franchiseId})

  const menu = await Menu.findOne({ franchise: franchiseId }).populate({
    path: "series",
    model: "Series",
    populate: {
      path: "drinks",
      model: "Drink",
    },
  })
    ;
  // update the series in the menu
  const series = await Series.findOneAndUpdate(
    { _id: seriesId },
    { $push: { drinks: drink._id } },
    { new: true }
  );


  res.status(201).json({ success: true, menu });
});

// Controller for getting all series and drinks in the menu
exports.getAllSeriesAndDrinksInMenu = catchAsyncError(async (req, res, next) => {

// display all the series and drinks in the menu with thier details
  const menu = await Menu.find({ franchise: req.user._id }).populate({
    path: "series",
    model: "Series",
    populate: {
      path: "drinks",
      model: "Drink",
    },
  });

  if (!menu) {
    return next(new CustomError("Menu not found", 404));
  }

  res.status(200).json({ success: true, menu });
});
// Controller for getting all series in the menu
exports.getAllSeriesInMenu = catchAsyncError(async (req, res, next) => {

  const series = await Series.find({ franchise: req.user._id })

  if (!series) {
    return next(new CustomError("Series not found", 404));
  }


  res.status(200).json({ success: true, series });
});




// Controller for getting details of a specific drink in the menu
exports.getDrinkDetailsInMenu = catchAsyncError(async (req, res, next) => {
  const { drinkId } = req.params;

  const drink = await Drink.findById(drinkId).populate("series", "name");

  if (!drink) {
    return next(new CustomError("Drink not found", 404));
  }

  res.status(200).json({ success: true, drink });
});

// controller for getting all drinks in the a series in the menu
exports.getAllDrinksInSeriesInMenu = catchAsyncError(async (req, res, next) => {
  const { seriesId } = req.params;

  const drinks = await Drink.find({ series: seriesId });

  if (!drinks) {
    return next(new CustomError("Drinks not found", 404));
  }

  res.status(200).json({ success: true, drinks });
});


exports.getAdminMenu=catchAsyncError(async(req,res,next)=>{
  // get the menu of the admin
  // first get the admin id 
  const admin=await User.findOne({role:"admin"})
  if(!admin){
    return next(new CustomError("Admin not found", 404));
  }

  const menu=await Menu.findOne({franchise:admin._id}).populate({
    path: "series",
    model: "Series",
  });

if(!menu){
  return next(new CustomError("Menu not found", 404));
}



    res.status(200).json({success:true,menu})
})

exports.getAllSeriesOfAdmin=catchAsyncError(async(req,res,next)=>{
    const series=await Series.find({role:"admin"}).populate({
        path:"drinks",
        model:"Drink"
    })
    res.status(200).json({success:true,series})
})

exports.getAlldrinksOfSeries=catchAsyncError(async(req,res,next)=>{
    const {seriesId}=req.params
    const drinks=await Drink.find({series:seriesId})
    res.status(200).json({success:true,drinks})
})

exports.deleteDrink=catchAsyncError(async(req,res,next)=>{




  const {drinkId}=req.params
  const drink=await Drink.findById(drinkId)
  if(!drink){
    return next(new CustomError("Drink not found", 404));
  }
   await Drink.findByIdAndDelete(drinkId)
  res.status(200).json({success:true,message:"Drink deleted"})
})



exports.deleteSeries=catchAsyncError(async(req,res,next)=>{
  const {seriesId}=req.params
  const series=await Series.findById(seriesId)
  if(!series){
    return next(new CustomError("Series not found", 404));
  }
  // first delete all drinks associated with this series
  await Drink.deleteMany({series:seriesId})

  await Series.findByIdAndDelete(seriesId)
  res.status(200).json({success:true,message:"Series deleted"})
})



exports.getAllDrinksInMenu=catchAsyncError(async(req,res,next)=>{
  const drinks=await Drink.find({franchise:req.user._id})
  res.status(200).json({success:true,drinks})
})
