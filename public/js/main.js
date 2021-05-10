function $(id){return document.getElementById(id);}
function divMouseOver(id){
  $(id).style.backgroundColor='rgba(197,209,210,0.7)';
}
function divMouseOut(id){
  $(id).style.background='rgba(222,227,227,0.01)';
}

function divClick(id,stuID){
  switch (id){
    case 'b1':
      window.location.href="/student/info?id="+stuID;
      break;
    case 'b2':
      window.location.href="/student/schedule?id="+stuID;
      break;
    case 'b3':
      window.location.href="/student/achievement?id="+stuID;
      break;
    case 'b4':
      window.location.href="/student/social?id="+stuID;
      break;
  }
}