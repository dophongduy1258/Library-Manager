var express = require('express');
var router = express.Router();
var controller = require('../controllers/employee.controller');

// router.get('/home',controller.home);
router.get('',controller.mainEmployee);
router.post('',controller.postDeleteEmployee);
router.get('/create',controller.createEmployee);
router.post('/create',controller.postCreateEmployee);
router.get('/edit/:id',controller.editEmployee);
router.post('/edit/:id',controller.postEditEmployee);

module.exports = router;