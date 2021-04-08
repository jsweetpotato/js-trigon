const playList = document.querySelector(".music");

let song
let fft
let button = document.querySelector(".play");

function preload() {
    song = loadSound('music/19th Floor - Bobby Richards.mp3');
    song.play();
    masterVolume(0.5);
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    song.loop();
    delay = new p5.Delay();
    fft = new p5.FFT(0.6, 2048);
}

function draw(){
    background(0);
    stroke(255);
    strokeWeight(5);
    strokeJoin(ROUND);
    noFill();

   let wave = fft.analyze();

   translate(width/2, height/2);

   for(let t = -1; t <= 1; t+=2){

        beginShape();
        for(let i = 0; i <= 180; i+= 0.5){
            let index = wave[i]
            
            let r = map(index, 0, 1024, 200, 800);
            
            let x = r * sin(i) * t;
            let y = r * cos(i);
            vertex(x, y);
            vertex(x * 1.3, y * 1.3)
        }
        endShape();
    }

    stroke("rgba(255,255,255,0.5)");

    for(let t = -1; t <= 1; t+=2){

        beginShape();
        for(let i = 0; i <= 180; i+= 0.5){
            let index = wave[i]
            
            let r = map(index, 0, 256, 1200, 550);
            
            let x = r * sin(i) * t;
            let y = r * cos(i);
            vertex(x, y);
            vertex(x * 3, y * 3)
        }
        endShape();
    }
}

function toggleSong(){
    if (song.isPlaying()) {
        song.pause();
//      delay.process(song, 0.1, .2, 15000);
        button.value = "PLAY";
    } else {
        song.play();
//      delay.process(song, 0, .0, 22050);
        button.value = "PAUSE";
    }
}

if(button){
    button.addEventListener("click", toggleSong);
}


