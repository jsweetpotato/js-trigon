var song

function preload() {
    song = loadSound("Bobby Richards.mp3");
}

function setup(){
    cnv = createCanvas(windowWidth, windowHeight);
    fill(100);
}

function draw(){
    background(0);
}

function mouseClicked(){
    if (song.isPlaying) {
        song.pause();
    } else {
        song.play();
    }
}