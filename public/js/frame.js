function $(id){return document.getElementById(id);}

function ulMouseOver(id){
    $(id).style.background='#517192';
}
function ulMouseOut(id){
    $(id).style.background='#3C5890';
}

let ulState = false;

function ulMouseClick(id){
    ulState = !ulState;
    let elements = document.getElementsByClassName('myul2')
    if (ulState){
        elements[0].style.height= '150px'
    }else {
        elements[0].style.height= 0
    }
}


function liMouseOver(id){
    $(id).style.color='#D2EFD5';
}
function liMouseOut(id){
    $(id).style.color='#84CAD8';
}
