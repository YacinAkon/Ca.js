/*
     All copy right reserved To Si Nou V0.1.81.013
*/
// Say Hello In Web Page
alert ("Hello");
var s;   //value s Lable
var g;   //value g use to chosse background color by hours day
var f;   //value f use to chosse fonts color by hours day
var x=new Date();     //value x to a new time script
var time=x.getHours();     //value time use to get hours only from value x
var OK = 'Click To Sing in';
var OKC;
var input = document.getElementById('e-mail');
if (time<109) {
  f= '#000000';
  g= '#DDD';
  s="<h2>&nbsp;Game Download1</h2>";
  OKC = '#999';
 // document.getElementById('OK').style.backgroundColor='#F00';
}
else {
  f= '#FFFFFF';
  g= '#000000';
  s= "<h2>&nbsp;Game Download1"+"&nbsp;"+"<n>Night Mode</n>";
  OKC = '333';
}
document.write(s);
document.fgColor=f;
document.bgColor=g;

function show() {
    document.getElementById('Bd').style.display='block';
}
function clos() {
    document.getElementById('Bd').style.display='none';
}



function Si() {
    if (document.getElementById("e-mail").value=='yacinakon@gmail.com'&document.getElementById("password").value) {
    document.getElementById("demo").innerHTML='Correct';
}
    else if (input===''){
        
    }
    else {
    document.getElementById("demo").innerHTML='Worng Password Or E-mail';
}
}

window.onload = function(event) {
var model = document.getElementById('B0d');
         if (event.target == model) {
        model.style.display = 'none';
}
};

// BUTTON to reload


window.onload = function() {
     document.getElementById('OK').title=OK;
     document.getElementById('OK').style.backgroundColor=OKC;
  //your script here
if (time<13) {
      if (time<11) {
document.getElementById("demo1").innerHTML='صباح الخير';
}
      else {
      if (time<12) {
document.getElementById("demo1").innerHTML='اقترب موعد الفطور';
}
      else {
document.getElementById("demo1").innerHTML='موعد الفطور';
      }
      }
}
else { 
      if (time<20) {
document.getElementById("demo1").innerHTML='مساء الخير';
      }
      else {
     document.getElementById("demo1").innerHTML='ليلة سعيدة';
}    //This script use to Hours bey
}

//ستتقلى تحيات مختلفة تعتمد على اليوم الذي انت فيه اليوم
var theDay=x.getDay();
switch (theDay)
{
case 5:
document.getElementById("demo2").innerHTML='وأخيراً يوم الجمعة';
break;

case 6:
document.getElementById("demo2").innerHTML='السبت هو بداية يوم العمل';
break;

case 0:
document.getElementById("demo2").innerHTML='الأحد يوم آخر من العمل';
break;

default:
document.getElementById("demo2").innerHTML='انك بانتظار يوم العطلة';
}         
// When the user clicks anywhere outside of the modal, close it
};