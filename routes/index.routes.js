const express = require('express');
const router = express.Router();


function requireLogin(req, res, next) {
    if (req.session.currentUser) {  // we are logged in - req.session.currentUser
      next(); // this will allow this next route to run
    } else {
      res.redirect('/login');
    }
}
/* GET home page */

router.get('/', (req, res, next) => {
    res.render('index', { user: req.session.currentUser});
  });
  
  router.get('/private', requireLogin, (req, res) => {
    res.render('private')
  });

  router.get('/main', requireLogin, (req, res) => {
    res.render('cutepic')
  });

module.exports = router;
