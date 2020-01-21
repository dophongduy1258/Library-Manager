var express = require('express');
var router = express.Router();
var controller = require('../controllers/employee.controller');


router.get('',controller.mainEmployee);
router.get('/create',controller.createEmployee);
router.post('/create',controller.postCreateEmployee);
router.get('/edit',controller.editEmployee);

module.exports = router;