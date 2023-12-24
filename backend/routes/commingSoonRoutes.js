const express=require("express")
const { addCommingSoonFranchise, deleteCommingSoonFranchise } = require("../controllers/commingSoonController")
const router=express.Router()




router.route("/").get(getAllCommingSoonFranchise)
router.route("/add").post(addCommingSoonFranchise)
router.route("/:id").delete(deleteCommingSoonFranchise)

