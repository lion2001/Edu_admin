var fs = require('fs')
var search = require('./search')
var check = require('./logCheck')
var express = require('express')

var router = express.Router()

router.get('/',function (req,res){
  res.render('log.html',{
    check:0
  })
})

router.post('/log',function (req,res){
  check.Check(req.body.stuID,function (err,password){
    if(err){
      return res.status(500).send('Server error.')
    }
    if(password != req.body.password){
      return res.render('log.html',{
        check:1
      })
    }
    res.redirect('/student/page?id='+req.body.stuID)
  })
})

router.get('/student/page',function (req,res){-
  search.StudentfindById(req.query.id,function (err,student){
    if(err){
      return res.status(500).send('Server error.'+req.query.id.toString())
    }
    res.render('text_4.html',{
      student:student
    })
  })
})

router.get('/student/info',function (req,res){
  search.StudentfindById(req.query.id,function (err,student){
    if(err){
      return res.status(500).send('Server error.'+req.query.id.toString())
    }
    res.render('info.html',{
      student:student
    })
  })
})

router.get('/',function (rep,res){
  res.render('log.html')
})

router.get('/student/schedule',function (req,res){
  search.ScheduleAllfindById(req.query.id,function (err,schedule,classBefore){
    if(err){
      return res.status(500).send('Server error.'+req.query.id.toString())
    }
    res.render('schedule.html',{
      classTable:schedule,
      classBefore:classBefore
    })
  })
})

router.get('/student/main',function (req,res){
  var stuID = req.query.id
  res.render('main.html',{
    stuID:stuID
  })
})

router.get('/student/edit',function (req,res){
  search.StudentfindById(req.query.id,function (err,student){
    if(err){
      return res.status(500).send('Server error.'+req.query.id.toString())
    }
    res.render('edit.html',{
      student:student
    })
  })
})

router.post('/student/edit',function (req,res){
  search.save(req.body, function (err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/student/info?id='+req.body.id)
  })
})

router.get('/student/achievement',function (req,res){
  search.gradesByID(req.query.id,function (err,grades){
    if(err){
      return res.status(500).send('Server error.')
    }
    console.log(grades)
    var ret = grades.grade
    var classes = []
    for (var key in ret){
      let chengji = []
      chengji.push(key)
      chengji.push(ret[key])
      classes.push(chengji)
    }
    res.render('achievement.html',{
      grades:classes,
    })
  })
})

router.get('/student/social',function (req,res){
  var social = {}
  res.render('social.html',{
    social:social
  })
})



module.exports = router;