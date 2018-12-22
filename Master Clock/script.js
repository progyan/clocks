let BASE = 10;

let date;

function changeTime(){
    date = new Date();
    let milliseconds = addZeroes(date.getMilliseconds().toString(BASE), 3);
    let seconds = addZeroes(date.getSeconds().toString(BASE), 2);
    let minutes = addZeroes(date.getMinutes().toString(BASE), 2);
    let hours = addZeroes(date.getHours().toString(BASE), 2);
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds + "<div id=\"ms\">." + milliseconds + "</div>";
    requestAnimationFrame(changeTime);
}

function addZeroes(num, len){
    if(len == 2)
        return ('0' + num).slice(-2);
    else if(len < 2)
        return num;
    else
        return (makeNZeroes(len) + num).slice(0 - len);
}

function makeNZeroes(n){
    let str = "";
    for(let i = 0; i < n; i++)
        str += "0";
    return str;
}

function setBase(){
    BASE = parseInt(document.getElementById("input").value);
}

changeTime();