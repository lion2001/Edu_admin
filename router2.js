var fs = require('fs')
var express = require('express')

var router = express.Router()

router.get('/',function (req,res){
  res.render('frame.html',{
    check:0
  })
})

router.get('/result',function (req,res){
  res.render('test.html',{
    check:0,
  })
  console.log("456456")
})



module.exports = router;