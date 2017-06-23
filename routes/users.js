var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
 })
router.get('/welcome', function(req, res, next) {
    res.send('Users connected');
});
router.get('/:id',function (req,res,next) {
    res.send('respond with a resource '+req.params.id);
})
module.exports = router;
