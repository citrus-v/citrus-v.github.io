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