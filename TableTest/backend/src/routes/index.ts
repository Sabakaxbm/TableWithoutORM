const Router = require('express')
const router = new Router()
const distanceRouter = require('./distanceRouter')

router.use('/distance', distanceRouter)

module.exports = router
