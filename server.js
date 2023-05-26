// routes/user.js
const express = require('express');

const router = express.Router();

router.get('/upload', function(req, res){
  res.render('upload');
});

router.post('/upload', function(req,res){
    res.send("성공")
});

module.exports = router;