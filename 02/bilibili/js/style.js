/*----主站样式----*/
	var nowImg=4;
	var maxImg=4;
function containt(){
	var nextImg=nowImg+1;
	if(nextImg==maxImg+1){
		nextImg=1;
	}
	document.getElementById("img"+nextImg).style.width="422px";
	document.getElementById("img"+nowImg).style.width="0px";
	document.getElementById("img"+nextImg).style.height="237px";
	document.getElementById("img"+nowImg).style.height="0px";
	document.getElementById("img"+nextImg).style.transition="0.5s"
	document.getElementById("bottom"+nextImg).style.display="";
	document.getElementById("bottom"+nowImg).style.display="none";
	if(nowImg==maxImg){
		nowImg=1;
	}else{
		nowImg++;
	}
	setTimeout("containt()",2000);
}
function zc(){
	document.getElementById('zhuce').style.display="block";
	document.getElementById('con').style.display="none";
}
function rt(){
	document.getElementById('rt2').style.display="block";
}
function rb(){
	document.getElementById('rb2').style.display="block";
}
function rt0(){
	document.getElementById('rt2').style.display="none";
}
function rb0(){
	document.getElementById('rb2').style.display="none";
}
function gc(){
	document.getElementById('gc').style.display="block";
}
function gcx(){
	document.getElementById('gc').style.display="none";
}
function zb(){
	document.getElementById('zb').style.display="block";
}
function zbx(){
	document.getElementById('zb').style.display="none";
}



function checkName(){
			var a=document.getElementById("name").value;
			if(a==""){
				document.getElementById("span").innerHTML="用户名不能为空哦";
			}else if(a.length<4){
				document.getElementById("span").innerHTML="姓名不能少于4位啦";
			}else if(a.length<10){
				document.getElementById("span").innerHTML="bingo，阁下格式正确哦";
			}else if(a.length>10){
				document.getElementById("span").innerHTML="亲，字符太多了哦(oﾟvﾟ)ノ";
			}
		}
function checkPwd(){
			var a=document.getElementById("pwd").value;
			if(a==""){
				document.getElementById("span").innerHTML="密码不能为空哦";
			}else if((a.length<6)||(a.length>16)){
				document.getElementById("span").innerHTML="密码不能小于6位或大于16位的哟";
			}else if(!isNaN(a)){
				document.getElementById("span").innerHTML="不能为纯数字啦";
			}else{
				document.getElementById("span").innerHTML="bingo，阁下格式正确哦";
			}
		}
function checkPwd2(){
			var a=document.getElementById("pwd2").value;
			var b=document.getElementById("pwd").value;
			var c=document.getElementById("pwd").value.length;
			if(a==b){
				document.getElementById("span").innerHTML="bingo，阁下格式正确哦";
			}else if(a.length==c){
				document.getElementById("span").innerHTML="阁下竟然真的忘记了自己输的密码";
			}else{
				document.getElementById("span").innerHTML="阁下不会不记得自己输入过的密码吧";
			}
		}
function checkEmail(){
			var a=document.getElementById("email").value;
			var b=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.([c])+([o])+([m])$)|(.([c])+([n])$)/;
			if(b.test(a)){
				document.getElementById("span").innerHTML="bingo，阁下格式正确哦";
			}else{
				document.getElementById("span").innerHTML="请输入正确的邮箱格式哦";
			}
		}
/*----主站样式----*/

/*----画友样式----*/
	var hy1=1;
function hyPic(){
	hy1--;
	document.getElementById('pic').style.backgroundPosition=hy1+'px';
	setTimeout("hyPic()",50);
}
function yemian(){
	window.open("Yiman.html");
}
/*----画友样式----*/

/*----直播样式----*/
function zb1(){
	document.getElementById('ximg1').style.display="block";
}
function zb2(){
	document.getElementById('ximg2').style.display="block";
}
function zb3(){
	document.getElementById('ximg3').style.display="block";
}
function zb4(){
	document.getElementById('ximg4').style.display="block";
}
function zb5(){
	document.getElementById('ximg5').style.display="block";
}
function zb6(){
	document.getElementById('ximg1').style.display="none";
}
function zb7(){
	document.getElementById('ximg2').style.display="none";
}
function zb8(){
	document.getElementById('ximg3').style.display="none";
}
function zb9(){
	document.getElementById('ximg4').style.display="none";
}
function zb10(){
	document.getElementById('ximg5').style.display="none";
}
function zbtj1(){
	document.getElementById('tjzb1').style.marginTop="0";
	document.getElementById('tjzb1').style.transition="0.6s";
}
function zbtj11(){
	document.getElementById('tjzb1').style.marginTop="96px";
	document.getElementById('tjzb1').style.transition="0.6s";
}
function zbtj2(){
	document.getElementById('tjzb2').style.marginTop="0";
	document.getElementById('tjzb2').style.transition="0.6s";
}
function zbtj22(){
	document.getElementById('tjzb2').style.marginTop="96px";
	document.getElementById('tjzb2').style.transition="0.6s";
}
function zbtj3(){
	document.getElementById('tjzb3').style.marginTop="0";
	document.getElementById('tjzb3').style.transition="0.6s";
}
function zbtj33(){
	document.getElementById('tjzb3').style.marginTop="96px";
	document.getElementById('tjzb3').style.transition="0.6s";
}
function zbtj4(){
	document.getElementById('tjzb4').style.marginTop="0";
	document.getElementById('tjzb4').style.transition="0.6s";
}
function zbtj44(){
	document.getElementById('tjzb4').style.marginTop="96px";
	document.getElementById('tjzb4').style.transition="0.6s";
}
function zbtj5(){
	document.getElementById('tjzb5').style.marginTop="0";
	document.getElementById('tjzb5').style.transition="0.6s";
}
function zbtj55(){
	document.getElementById('tjzb5').style.marginTop="96px";
	document.getElementById('tjzb5').style.transition="0.6s";
}
function zbtj6(){
	document.getElementById('tjzb6').style.marginTop="0";
	document.getElementById('tjzb6').style.transition="0.6s";
}
function zbtj66(){
	document.getElementById('tjzb6').style.marginTop="96px";
	document.getElementById('tjzb6').style.transition="0.6s";
}
/*----直播样式----*/