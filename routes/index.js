var express = require('express');
var OpenTok = require('opentok');
var router = express.Router();

const API_KEY= 45842272;
const  API_SECRET= "dca4eb15b39bd692fa39755f503494d55a864eb1"

var opentok = new OpenTok(API_KEY, API_SECRET);
var sessionId;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createSession', function (req, res) {
  opentok.createSession({mediaMode:"routed"}, function(error, session) {
    if (error) {

    } else {
      sessionId = session.sessionId;
      res.send(sessionId);
    }
  });
});
router.get('/createToken/:session',function (req,res) {
  var s= req.params.session ;
  res.send(opentok.generateToken(s));
});

module.exports = router;
