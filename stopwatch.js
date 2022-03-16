window.onload=function(){
    var seconds=0;
    var tens=0;
    var append_tens=document.getElementById("tens");
    var append_seconds=document.getElementById("seconds");
    var button_start=document.getElementById("button-start");
    var button_stop=document.getElementById("button-stop");
    var button_reset=document.getElementById("button-reset");
    var interval;

button_start.onclick=function(){
    clearInterval(interval);
    interval=setInterval(startTimer,10);
}

button_stop.onclick=function(){
    clearInterval(interval);

}

button_reset.onclick=function(){
    clearInterval(interval);
    tens="00";
    seconds="00";
    append_tens.innerHTML=tens;//00
    append_seconds.innerHTML=seconds;//00


};

function startTimer(){
    tens++;
    if(tens<=9){
        append_tens.innerHTML="0"+tens;
    }
    if(tens>9){
        append_tens.innerHTML=tens;
    }
    if(tens>99){
        console.log("seconds");
        seconds++;
        append_seconds.innerHTML="0"+seconds;
        tens=0;
        append_tens.innerHTML="0"+0;
    }
}
if(seconds>9){
    append_seconds.innerHTML=seconds;
}
}