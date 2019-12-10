var express = require('express');
var router = express.Router();
var hobbiesCtlr = require('../controllers/hobbies');

/* GET users listing. */
router.get('/', hobbiesCtlr.index);
router.post('/', hobbiesCtlr.create);

module.exports = router;
