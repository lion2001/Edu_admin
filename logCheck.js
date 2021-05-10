var fs =require('fs')

var dbPath = './password.json'

exports.Check = function (id,callback){
  fs.readFile(dbPath,'utf8',function (err,data){
    if(err){
      return callback(err)
    }
    var students = JSON.parse(data).students
    var password = students.find(function(item){
      return item.id === id
    })
    callback(null,password.password)
  })
}