const express = require('express');
const router = express.Router();


const {getAllFranchises,getFranchise,addFranchise,deleteFranchise}=require("../controllers/userController")
const {getAllLocations, addLocation, deleteLocation}=require("../controllers/locationController");
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const {  getAllNewsLetter, deleteAllNewsLetter } = require("../controllers/newsLetterController")
const { addCommingSoonFranchise, deleteCommingSoonFranchise ,getAllCommingSoonFranchise} = require("../controllers/commingSoonController")
const { addRequest, getAllRequest, deleteRequest } = require("../controllers/franchiseRequestController")

// franchises  Done
router.route("/action/franchises").get(isAuthenticatedUser,authorizeRoles("admin"),getAllFranchises)
router.route("/action/franchise/:id").get(isAuthenticatedUser,authorizeRoles("admin"),getFranchise)
router.route("/action/franchise/add").post(isAuthenticatedUser,authorizeRoles("admin"),addFranchise)
router.route("/action/franchise/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteFranchise)

// locations  Done
router.route("/locations").get(isAuthenticatedUser,authorizeRoles("admin"),getAllLocations)
router.route("/location/add").post(isAuthenticatedUser,authorizeRoles("admin"),addLocation)
router.route("/location/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteLocation)

// news letter Done

router.route("/newsletters").get(isAuthenticatedUser,authorizeRoles("admin"),getAllNewsLetter)
router.route("/newsletters").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteAllNewsLetter)


// franchise request  Done 

router.route("/franchise/requset/add").post(addRequest)

router.route("/franchise/requsets").get(isAuthenticatedUser,authorizeRoles("admin"),getAllRequest) 

router.route("/franchise/requset/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteRequest)




    // comming soon  Done
router.route("/comming").get(getAllCommingSoonFranchise)
router.route("/comming/add").post(isAuthenticatedUser,authorizeRoles("admin"),addCommingSoonFranchise)
router.route("/comming/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteCommingSoonFranchise)






module.exports = router;