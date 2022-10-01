import {Router} from "express";
const router = Router()
const distanceController = require('../controlers/distanceController')

router.post('/', distanceController.create)
router.get('/', distanceController.get)

module.exports = router
