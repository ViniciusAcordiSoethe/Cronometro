"use strict"

var h = 20;
var m = 60;
var s = 0;

var data = new Date();

var horaatual = data.getHours();          
var minatual = data.getMinutes();        
var segatual = data.getSeconds(); 


var segundosContador = horaatual * 3600 + minatual * 60 + segatual;
segundosContador = 72000 + 86400 -  segundosContador;

var seconds = segundosContador;

var days        = Math.floor(seconds/24/60/60);
var hoursLeft   = Math.floor((seconds) - (days*86400));
var hours       = Math.floor(hoursLeft/3600);
var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
var minutes     = Math.floor(minutesLeft/60);
var remainingSeconds = seconds % 60;

var hh = hours;
var mm = minutes;
var ss = remainingSeconds;


var tempo = 1000;
var cron;


function Horaagora(){
    var data = new Date();

    var horaatual = data.getHours();          
    var minatual = data.getMinutes();        
    var segatual = data.getSeconds(); 

    var format = (horaatual == -1 ? '00' : horaatual < 10 ? '0' + horaatual : horaatual) + ':' + (minatual == 60 ? '00' : minatual < 10 ? '0' +  minatual :minatual) + ':' + (segatual == 60 ? '00' : segatual < 10 ? '0' + segatual:segatual);
    document.getElementById('counter').innerText = format;
}


function Start(){
       cron = setInterval(() => { timer();}, tempo);
}

function Pause(){
    clearInterval(cron);
}

function Stop(){

    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    document.getElementById('counter').innerText = "00:00:00";     
}

function timer(){
    if (hh == -1){
        clearInterval(cron);
        document.getElementById('counter').innerText = "é elden RING AMIGOS ";
    }else{

    ss--;

    if( ss == -1){
        ss = 60;
        mm--;

        if(mm == -1){
            mm=60;
            hh--;
        }
    }


    var format = (hh == -1 ? '00' : hh < 10 ? '0' + hh : hh) + ':' + (mm == 60 ? '00' : mm < 10 ? '0' +  mm :mm) + ':' + (ss == 60 ? '00' : ss < 10 ? '0' + ss:ss);
    document.getElementById('counter').innerText = format;
}
}
