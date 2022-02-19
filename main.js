// tady je místo pro náš program
let l = document.querySelector('.lion');
let fontSize = 16;

//onmouseover
function priNajeti() {
    l.style.fontWeight = "bold";
}

function priOdjeti() {
    l.style.fontWeight = "normal";
}

//obarvení textu
function isRed() {
    l.classList.toggle('red');
}

//zvětšování písma
function isBigger() {
    l.style.fontSize = ++fontSize + "px";
}

//AUDIO
let audioFile = document.getElementById('sound');

function playAudio() {
    audioFile.play();
}

function pauseAudio() {
    audioFile.pause();
}

function minAudio() {
    audioFile.volume = 0;
}

function mediumAudio() {
    audioFile.volume = 0.5;
}

function maxAudio() {
    audioFile.voluem = 1;
}

function replayAudio() {
    audioFile.currentTime = 0;
}
