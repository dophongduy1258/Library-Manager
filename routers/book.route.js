var express = require('express');
var router = express.Router();
var controller = require('../controllers/book.controller');

router.get('',controller.mainBook);
router.get('/create',controller.createBook);
router.post('/create',controller.postCreateBook);
router.get('/edit/:id',controller.editBook);

module.exports = router;