let time;
let endTime;

let date;
let now;

function changeTime(){
    now = new Date();
    date = (new Date(endTime - now.getTime())).getTime();
    if(date > 0){
        let milliseconds = addZeroes((date % 1000), 3);
        let seconds = addZeroes(((date / 1000) % 60), 2);
        let minutes = addZeroes((date / 60000 % 60), 2);
        let hours = addZeroes((date / 3600000 % 24), 2);
        let days = addZeroes((date / 86400000), 2);
        document.getElementById("time").innerHTML = days + "." + hours + ":" + minutes + ":" + seconds + "<div id=\"ms\">." + milliseconds + "</div>";
        requestAnimationFrame(changeTime);
    } else {
        document.getElementById("time").innerHTML = "Всё!";
        myAudio = new Audio('./sound/alarm.mp3'); 
        myAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        myAudio.play();
    }
}

function addZeroes(num, len){
    num = Math.floor(num);
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

function start(){
    time = parseInt(document.getElementById("in").value) * 1000;
    endTime = new Date().getTime() + time;
    document.getElementById("black").style.display = "none";
    document.getElementById("time").style.display = "block";
    changeTime();
}