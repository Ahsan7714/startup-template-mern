const { getAllLocations, addLocation, deleteLocation, updateLocation, getLocation } = require('../controllers/locationController');

const router = require('express').Router();




router.route('/').get(getAllLocations)
router.route('/add').post(addLocation)
router.route('/:id').delete(deleteLocation)
router.route('/update/:id').put(updateLocation)
router.route('/get/:id').get(getLocation)
