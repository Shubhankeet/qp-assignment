const express = require('express');
const userRoute = require('./user.route');
const adminRoute = require('./admin.route')
const router = express.Router();

router.use('/admin',adminRoute);
router.use('/user',userRoute);


module.exports = router;