song_1="";
song_2="";
function preload(){
    song_1=loadSound("");
    song_2=loadSound("");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500)
}
function song1(){
    song_1.play();
}
function song2(){
    song.play();
}