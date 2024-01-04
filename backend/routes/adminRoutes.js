const express = require('express');
const router = express.Router();


const {getAllFranchises,getFranchise,addFranchise,deleteFranchise}=require("../controllers/userController")
const {getAllLocations, addLocation, deleteLocation}=require("../controllers/locationController");
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const {  getAllNewsLetter, deleteAllNewsLetter } = require("../controllers/newsLetterController")
const { addCommingSoonFranchise, deleteCommingSoonFranchise ,getAllCommingSoonFranchise} = require("../controllers/commingSoonController")
const { addRequest, getAllRequest, deleteRequest } = require("../controllers/franchiseRequestController")

// franchises
router.route("/franchises").get(getAllFranchises)
router.route("/franchise/:id").get(getFranchise)
router.route("/franchise/add").post(addFranchise)
router.route("/franchise/:id").delete(deleteFranchise)
// locations
router.route("/locations").get(isAuthenticatedUser,authorizeRoles("admin"),getAllLocations)
router.route("/location/add").post(isAuthenticatedUser,authorizeRoles("admin"),addLocation)
router.route("/location/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteLocation)

// news letter 
router.route("/newsletters").get(isAuthenticatedUser,authorizeRoles("admin"),getAllNewsLetter)
router.route("/newsletters").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteAllNewsLetter)


// franchise request 

router.route("franchise/requset/add").post(addRequest)

router.route("/franchise/requsets").get(getAllRequest) 

router.route("/franchise/requset/:id").delete(deleteRequest)


router.route("/franchise/requset/reject/:id").delete(deleteRequest)


// comming soon 
router.route("/comming").get(getAllCommingSoonFranchise)
router.route("/comming/add").post(addCommingSoonFranchise)
router.route("/comming/:id").delete(deleteCommingSoonFranchise)






module.exports = router;