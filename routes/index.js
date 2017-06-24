var express = require('express');
var router = express.Router();
var url="mongodb://radhikasood1006:meena24@ds131782.mlab.com:31782/training";
const db= require("monk")(url);
const docs=db.get('abc');
/* GET users listing. */
router.get('/we', function(req, res, next) {
    //res.send('respond with a resource');
    docs.find({},function(err,docs)
    {
        if(err)console.log(err);
        else res.json(docs[0]);
    })
});

router.get('/wel', function(req, res, next) {
    docs.insert({"name":"","age":""},function (err,docs) {
        if(err)
            console.log(err);
        else
            res.send("successful");
    })
});
router.get('/w', function(req, res, next) {
    docs.update(
            { "name": "radhika"
            },
        {
            $push: {
                "group":{"name":"user 3"}
            }
        },
                function(err,docs) {
                    if (err)
                        console.log(err);
                    else
                        res.send("user added");
                }
    )
});


/* GET home page. */
router.get('/welcome', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', function(req, res, next) {
    res.send('hi!Radhika');
});

module.exports = router;
