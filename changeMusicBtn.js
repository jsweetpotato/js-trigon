const leftBtn = document.querySelector(".prev");
const rightBtn = document.querySelector(".next");

const Music = ['19th Floor - Bobby Richards.mp3', 'Hologram - Bobby Richards.mp3','Calvin Harris - josh pan.mp3','Lofi Mallet - Kwon.mp3'];

let num = Music.length - 1
let PlayNum = 0;

let nowPlay

function nextMusic(e) {
    e.preventDefault();
    console.log("next");
    if (num > PlayNum) {
        PlayNum = PlayNum + 1;
    } else {
        PlayNum = 0;
    }
    handleMusic();
}

function prevMusic(e) {
    e.preventDefault();
    console.log("prev");
    if (0 < PlayNum) {
        PlayNum = PlayNum -1
    } else{
        PlayNum = num;
    }
    handleMusic();
}


function handleMusic() {
  nowPlay = `music/${Music[PlayNum]}`
  let music = document.querySelector(".music")
  music.innerHTML = nowPlay;
}


function changeMusic() {
    leftBtn.addEventListener("click", prevMusic);
    rightBtn.addEventListener("click", nextMusic);
}

function init() {
    changeMusic();
}

init();


