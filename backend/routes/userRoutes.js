const express = require('express');
const router = express.Router();



const {login,getOwnMenu, logout, contactUs}=require("../controllers/userController");
const {addSeriesToMenu,addDrinkToSeriesInMenu,getAllSeriesAndDrinksInMenu,getAllSeriesInMenu,getAdminMenu,getAllDrinksInSeriesInMenu, deleteDrink,deleteSeries}=require("../controllers/menuController") 
const { isAuthenticatedUser } = require('../middleware/auth');
const { searchLocation } = require('../controllers/locationController');
const { addNewsLetter } = require('../controllers/newsLetterController');

// franchise 
router.route('/login').post(login)


// adding  series to menu
router.route("/menu/series").post(isAuthenticatedUser,addSeriesToMenu)
// add drink to series 
router.route("/menu/drink").post(isAuthenticatedUser,addDrinkToSeriesInMenu)

 
// get all series 
router.route("/menu/series").get(isAuthenticatedUser,getAllSeriesInMenu)

// getting all drinks of a series
router.route("/menu/series/:seriesId/drinks").get(getAllDrinksInSeriesInMenu)
// get all series in admin menu
router.route("/menu/admin/series").get(getAdminMenu)
// delete a drink 
router.route("/menu/drink/:drinkId").delete(isAuthenticatedUser,deleteDrink)
// delete a series 
router.route("/menu/series/:seriesId").delete(isAuthenticatedUser,deleteSeries)

// Search Locations 
router.route("/search/location").get(searchLocation)

// newsletter 
router.route("/newsletter/add").post(addNewsLetter)

// Logout 
router.route("/logout").post(logout)


router.route("/contact-us").post(contactUs)

module.exports = router;