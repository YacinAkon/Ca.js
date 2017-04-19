   //All Copy Right Reserved 2017 © to Game Download.lnc
       /*    this script as suported from gamedownload.tk and FB profile https://fb.me/Yacine.Dj1 
       */
 
var x = new Date();
var Ali = new Object();
var Years = x.getFullYear();
var no0;
     //document.write(Years);
window.onload = function () {  
    var Lang = window.prompt("Enter your Lang eg: 'ar' or 'en' or ...");
    var N;
    var C;
    var ar = 'ar';
    var Ar = 'Arabic';
    var aR = 'arabic';
    var AR = 'عربية';
    var en = 'en';
    var En = 'English';
    var eN = 'english';
    var fr = 'fr';
    var Fr = 'Francais';
    var fR = 'francais';
        //error = window.confirm("Do You Want Repeat again");
       /* if (NoLang===true) {
              window.location.reload();
        }
        else {
            window.location.reload();
        }   */
    //var lang = navigator.browserLanguage();
    if (Lang==ar || Lang==Ar || Lang==aR || Lang==AR) {   
        // THis Place to arebic LANGUAGE
        year0 = 'سنة الميلاد';
        cale = 'حساب';
        reloade = 'اعادة';
        calet = 'انقر لحساب عمرك';
        reloadet = 'انقر لاعادة البدء من جديد';
        title = 'حسابة العمر ';
        X0 = 'عمرك:';
        N = "ادخل اسمك";
        C = "مرحبا بك في صفحتي لـ حساب العمر";
        no0 = 'ادخل عمرك';
        span = 'انقر للاغلاق';
        show = 'ابدا';
        show0 = 'انقر لبدء حساب عمرك';
    }
    else if(Lang==fr || Lang==Fr || Lang==fR) {
        year0 = 'Année de naissance';
        cale = 'Calculer';
        reloade = 'Recharger';
        calet = 'Calculer';
        reloadet = 'Recharger';
        title = 'Année Calculer';
        X0 = 'Votre Année:';
        N = "Entrez votre nom";
        C = "Bienvenue sur ma page À propos de votre année Calculer";
        no0 = 'Entrez Votre Année';
        span = 'Cliquez Pour Fermer';
        show = 'Début';
        show0= 'Cliquez Pour Début Année Calculer';
    }
    else if(Lang==en || Lang==En || Lang==eN) {
        year0 = 'Your Brith Year';
        cale = 'Calculate';
        reloade = 'Reload';
        calet = 'Click hir To Calculate your age';
        reloadet = 'Click hir To Reload';
        title = 'Calculate Year';
        X0 = 'Your Year:';
        N = "Enter your name";
        C = "Welcome To My Page About your year Calculate";
        no0 = 'Enter Your Year';
        span = 'Click To Close';
        show = 'Start';
        show0 = 'Click hir To Start Calculate your age';
    }
    else {
        NoLang = window.alert('Please enter Your Language');
        ag = window.confirm("Do you want repeat again");
        if (ag===true) {
        window.location.reload();
        }
        else {
        document.write('You Must Chose Your Language <br /><button id="reload" onClick="reload()"></button>');
        document.getElementById('reload').innerHTML='Reload';
        }
    }
     if (Lang==ar || Lang==Ar || Lang==aR || Lang==AR || Lang==fr || Lang==Fr || Lang==fR || Lang==en || Lang==En || Lang==eN) {
      window.alert(C);
     name = window.prompt(N);
     document.getElementById('X1').innerHTML=name;
     document.getElementById('X0').innerHTML=X0;
     document.getElementById('years').innerHTML=year0;
     document.getElementById('Cal').innerHTML=cale;
     document.getElementById('reload').innerHTML=reloade;
     document.getElementById('show').innerHTML=show;
     document.getElementById('show').title=show0;
     document.getElementById('Cal').title=calet;
     document.getElementById('reload').title=reloadet;
     document.getElementById('span').title=span;
     document.getElementsByTagName('title')[0].innerHTML=title;
     }
};

var modal = document.getElementById('Calc');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
//document.write(navigator.DeviceLanguage);
 function Do() {
     var c = document.getElementById('Yeo').value;
    if (c<=2017 & c>=1940) {
        document.getElementById('XI').innerHTML=Years-c;
    }
    else {
        document.getElementById('XI').innerHTML=no0;
    }
} 
function Show() {
    document.getElementById('Calc').style.display='block';
}
function Close() {
    document.getElementById('Calc').style.display='none';
}
function reload() {
    window.location.reload();
} 
