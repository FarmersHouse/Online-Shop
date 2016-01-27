var express = require('express');
var router = express.Router();

var path = require('path');

/* Set static relative path for content requests */
router.use(express.static(path.join(__dirname, '../../client/')));

/* Page entry point. */
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve('./client/shared/index.html'));
  
});

/* Alternative entry point. */
router.get('/index.html', function(req, res){
    res.sendFile(path.resolve('./client/shared/index.html'));
});


module.exports = router;
