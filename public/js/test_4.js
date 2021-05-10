function $(id){return document.getElementById(id);}
function ulMouseOver(id){
  $(id).style.background='#3C5890';
}
function ulMouseOut(id){
  $(id).style.background='#2E4165';
}

function rightClick(id,stuID){
  let element = document.getElementById('frame');
  switch (id){
    case 'ul01':
      element.src="/student/main?id="+stuID;
      break;
    case 'ul02':
      element.src="/student/info?id="+stuID;
      break;
    case 'ul03':
      element.src="/student/schedule?id="+stuID;
      break;
    case 'ul04':
      element.src="/student/achievement?id="+stuID;
      break;
    case 'ul05':
      element.src="/student/social?id="+stuID;
      break;
  }
}
