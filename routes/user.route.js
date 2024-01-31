const express = require('express');
const router = express.Router();

router.post('/getAvailableItems',adminController.getAvailableGrocery);
router.get('/bookgrocery',adminController.bookgrocery);

module.exports=router;