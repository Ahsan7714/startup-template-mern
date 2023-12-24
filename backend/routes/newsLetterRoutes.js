const express=require("express")
const { addNewsLetter, getAllNewsLetter, deleteAllNewsLetter } = require("../controllers/newsLetterController")
const { authorizeRoles, isAuthenticatedUser } = require("../middleware/auth")
const router=express.Router()


router.route("/add").post(addNewsLetter)
router.route("/").get(isAuthenticatedUser,authorizeRoles("admin"),getAllNewsLetter)
router.route("/").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteAllNewsLetter)


module.exports=router;