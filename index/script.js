//文字打字机
text = '稍等，Loading...';
        i = 0;
         function type(){ 
            str  = text.substr(0,i);
            txt.innerHTML = str + "_";
            i++;
            if (i>text.length){
                txt.style.display="none";
                zero.style.display="block";
            }
          setTimeout("type()",200);
         }
var bg1024 = document.querySelector('.bg-1024');
var list1024 = document.querySelector('.list-1024');
var hide = true;
var hide1 = true;

function list1024show() {
    if( hide ) {
       list1024.style.display = "block"; 
        bg1024.style.transform = "rotateZ(90deg)";
        bg1024.style.backgroundPosition="3px 3px"
       hide = false;
    } else {
        list1024.style.display = "none";
         bg1024.style.transform = "rotateZ(0deg)";
         bg1024.style.backgroundPosition=" 0 4px";
        hide = true;
    }
}

var bg1366 = document.querySelector('.bg-1366');
var list1366 = document.querySelector('.list-1366');
function list1366show() {
    if( hide1 ) {
       list1366.style.display = "block"; 
        bg1366.style.transform = "rotateZ(90deg)";
       hide1 = false;
    } else {
        list1366.style.display = "none";
         bg1366.style.transform = "rotateZ(0deg)";
        hide1 = true;
    }
}
