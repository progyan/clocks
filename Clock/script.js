let date;

function changeTime(){
    date = new Date();
    let milliseconds = addZeroes(date.getMilliseconds(), 3);
    let seconds = addZeroes(date.getSeconds(), 2);
    let minutes = addZeroes(date.getMinutes(), 2);
    let hours = addZeroes(date.getHours(), 2);
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds + "<div id=\"ms\">." + milliseconds + "</div>";
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

setInterval(changeTime, 5);