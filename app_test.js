var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')

var app = express();

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html',require('express-art-template'))

// 配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// app.get('/',function (req,res){
//   var classTable = {
//     "id": "201900300000",
//     "classOne": ["数据结构","大学物理",null,"大学物理","计算机组织与结构",null,null],
//     "classTwo": ["体育","概率与统计","计算机组成与结构","离散数学",null,null,null],
//     "classThree": ["web技术",null,"数据结构","概率与统计",null,null,null],
//     "classFour": [null,null,null,"形势与政策",null,null,null],
//     "classFive": ["中国学术思想史","中华主要传统节日文化","传统文学修养",null,null,null,null]
// //   }
//   var classBefore = {
//     "id": "201900300000",
//     "classes": [
//       ["2019-2020","sd00920120","高等数学","5.0","必修"],
//       ["2019-2020","sd00920630","体育","1.0","必修"],
//       ["2019-2020","sd00920118","新生研讨","2.0","必修"],
//       ["2019-2020","sd00921180","高级程序设计语言","4.5","必修"],
//       ["2020-2021","sd00920120","高等数学","5.0","必修"],
//       ["2020-2021","sd00920630","体育","1.0","必修"],
//       ["2020-2021","sd00920118","新生研讨","2.0","必修"],
//       ["2020-2021","sd00921180","高级程序设计语言","4.5","必修"]
//     ]
//   }
//   console.log(classTable.classOne)
//   res.render('schedule.html',{
//     classTable : classTable,
//     classBefore: classBefore,
//   } )
// })

app.get('/',function (req,res){
  // var student ={
  //   "name":"李小二",
  //   "id":"201900300000",
  //   "campus": "济南",
  //   "major": "软件工程",
  //   "class": "2019级5班",
  //   "gender": "男",
  //   "birth": "2001-9-21",
  //   "Tel": "100000000",
  //   "Email": "AXXXXX2001@gmail.com",
  //   "Englishlevel": "CET-4"
  // }
  res.render('log.html')
})

app.post('/edit',function (req,res){
  console.log(req.body)
})

app.listen(3001,function (){
  console.log('running 3000 ...')
})
