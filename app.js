var song
var fft


function preload() {
    song = loadSound('19th Floor - Bobby Richards.mp3');
    masterVolume(0.5);
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    delay = new p5.Delay();
    fft = new p5.FFT(0.6, 2048);
}

function draw(){
    background(0);
    stroke(255);
    strokeWeight(4);
    strokeJoin(ROUND);
    noFill();

   var wave = fft.analyze();

    translate(width/2, height/2 -100);

   for(var t = -1; t <= 1; t+=2){

        beginShape();
        for(var i = 0; i <= 180; i+= 0.5){
            var index = wave[i]
            
            var r = map(index, 0, 1024, 150, 700);
            
            var x = r * sin(i) * t;
            var y = r * cos(i);
            vertex(x, y);
            vertex(x * 1.3, y * 1.3)
        }
        endShape();
    }
}

function mouseClicked(){
    if (song.isPlaying()) {
        song.pause();
        delay.process(song, 0.1, .3, 1500);
    } else {
        song.play();
        delay.process(song, 0, .0, 22050);
    }
}