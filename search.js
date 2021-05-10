var fs =require('fs')

var dbPath = './db.json'
var gradesPath = './grades.json'

exports.StudentfindById = function(id,callback){
  fs.readFile(dbPath,'utf8',function(err,data){
    if(err){
      console.log('file errorcode:0001')
      return  callback(err)
    }
    var students = JSON.parse(data).students
    var ret = students.find(function(item){
      return item.id === id;
    })
    callback(null,ret)
  })
}

exports.ScheduleAllfindById = function(id,callback){
  fs.readFile(dbPath,'utf8',function(err,data){
    if(err){
      console.log('file errorcode:0001')
      return  callback(err)
    }
    var classes = JSON.parse(data).classes
    var ret01 = classes.find(function(item){
      return item.id === id;
    })
    var classBefore = JSON.parse(data).classBefore
    var ret02 = classBefore.find(function (item){
      return item.id === id;
    })
    callback(null,ret01,ret02)
  })
}

exports.gradesByID = function(id,callback){
  fs.readFile(gradesPath,'utf8',function (err,data){
    if (err){
      console.log('grades file reading error.')
      return callback(err)
    }
    var grades = JSON.parse(data).grades
    var ret = grades.find(function (item){
      return item.id === id ;
    })
    callback(null,ret)
  })
}

exports.save = function (student, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students;
    var classes = JSON.parse(data).classes;
    var classBefore = JSON.parse(data).classBefore;
    var stu = students.find(function (item){
      return item.id==student.id;
    })

    for(var key in stu){
      stu[key] = student[key]
    }

    // 把对象数据转换为字符串
    var fileData = JSON.stringify({
      students: students,
      classes:classes,
      classBefore:classBefore
    })

    // 把字符串保存到文件中
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        // 错误就是把错误对象传递给它
        return callback(err)
      }
      // 成功就没错，所以错误对象是 null
      callback(null)
    })
  })
}
