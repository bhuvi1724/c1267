song1="";
song2="";
song="";
leftwristx="";
rightwristy="";
leftwristy="";
rightwristx="";
function setup()
{
    video=createCapture(VIDEO);
    video.hide();

    canvas=createCanvas(550,450);
    canvas.center();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded()
{
    console.log("posenet is initilized");
}
function preload()
{
    song1=loadsound("music.mp3");
    song2=loadsound("music2.mp3");

}
function draw()
{
    image(video,0,0,550,450);
    fill("#800080");
    stroke("#800080");
if (scoreleftwristx>0.2) {
    circle(leftwristx,leftwristy,20);
    innumber_leftwristy=Number(leftwristy);
    remove_decimal=floor(innumber_leftwristy);
    volume=remove_decimal/500;
    song.setVolume(volume);
}
function play()
{
    song1.play();
    song2.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results)
{
if (results.length >0) {
    console.log(results);
    console.log(results[0].pose.keypoints);
    scoreleftwristx=results[0].pose.keypoints[9].score;
    console.log("scoreleftwristx= "+scoreleftwristx);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    console.log("leftwristx= "+leftwristx+ "leftwristy= "+leftwristy);
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    console.log("rightwristx= "+rightwristx+ "rightwristy= "+rightwristy);

}
}
    


   



