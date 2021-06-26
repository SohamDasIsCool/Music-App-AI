song_1="";
song_2="";
leftWrist_score=0;
rightWrist_score=0;
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
function preload(){
    song_1=loadSound("music.mp3");
    song_2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Posenet is Initialized");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    leftWrist_score=results[0].pose.keypoints[9].score;
    rightWristX=results[0].pose.rightWrist.x;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    leftWristY=results[0].pose.leftWrist.y;
}
}
function draw(){
    image(video,0,0,400,300);
    fill("#FF0000");
    stroke("#FF0000");
    x=song_1.isPlaying;
if(x==true){
    if(leftWrist_score>0.2){
        circle(leftWristX,leftWristY,20);
        song_1.play();
        song_2.stop();
    }
    else{
        circle(rightWristX,rightWristY,20);
        song_2.play();
        song_1.stop();
    }
}
}