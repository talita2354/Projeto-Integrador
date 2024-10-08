const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');


router.post('/', projectController.create)
router.get('/', projectController.findAll);
router.get('/:id', projectController.findById);


module.exports = router;
