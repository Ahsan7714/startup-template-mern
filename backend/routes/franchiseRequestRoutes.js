const express=require("express")
const { addRequest, getAllRequest, deleteRequest, acceptRequest } = require("../controllers/franchiseRequestController")
const router=express.Router()




router.route("/add").post(addRequest)

router.route("/").get(getAllRequest) 

router.route("/:id").delete(deleteRequest)

router.route("/accept/:id").delete(deleteRequest)

router.route("/reject/:id").delete(deleteRequest)


module.exports=router;