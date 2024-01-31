const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.post('/addItem',adminController.addItem);
router.get('/getGrocery',adminController.getGrocery);
router.get('/removeGrocery',adminController.removeGrocery);
router.post('/updateItem',adminController.updateItem);

module.exports=router;