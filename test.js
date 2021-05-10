var grades = {
  "id": "201900300000",
  "grade": {
    "高级程序语言(Java)01": 97,
    "C++01": 93,
    "数据结构(C++)01": 89,
    "Web技术01": 94,
    "高等数学01": 91,
    "高级程序语言(Java)02": 97,
    "C++02": 93,
    "数据结构(C++)02": 89,
    "Web技术02": 94,
    "高等数学02": 91,
    "高级程序语言(Java)03": 97,
    "C++03": 93,
    "数据结构(C++)03": 89,
    "Web技术03": 94,
    "高等数学03": 91
  }
}

var grade = grades.grade

console.log(grade)
var classes = []

for (var key in grade){
  let chengji = []
  chengji.push(key)
  chengji.push(grade[key])
  classes.push(chengji)
}

console.log(classes)