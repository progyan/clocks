let startDate = null;
let millis = 0;

let change = null;

function changeTime(){
    if(startDate)
        millis = Math.floor(new Date().getTime() - startDate);
    let milliseconds = addZeroes(millis % 1000, 3);
    let seconds = addZeroes(Math.floor(millis / 1000) % 60, 2);
    let minutes = addZeroes(Math.floor(millis / 60000) % 60, 2);
    let hours = addZeroes(Math.floor(millis / 3600000), 2);
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds + "<div id=\"ms\">." + milliseconds + "</div>";
}

function addZeroes(num, len){
    if(len < 2)
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

function start(){
    change = setInterval(changeTime, 5);
    startDate = new Date().getTime();
    let button = document.getElementById("button");
    button.innerHTML = "Стоп";
    button.onclick = stop;
}

function stop(){
    clearInterval(change);
    startDate = 0;
    let button = document.getElementById("button");
    button.innerHTML = "Старт";
    button.onclick = start;
}