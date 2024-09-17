const express = require('express');
const router = express.Router();
const developerController = require('../controllers/developerController');


router.post('/', developerController.create)
router.get('/', developerController.findAll);
router.get('/:id', developerController.findById);


module.exports = router;
