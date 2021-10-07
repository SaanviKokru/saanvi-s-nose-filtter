noseX=0
noseY=0
function preload(){
   nose_image=loadImage("https://i.postimg.cc/5NfgLWGB/download-1.png");
}


function setup(){
    console.log("inside_setup")
Canvas=createCanvas(300,300)
Canvas.center();
video=createCapture(VIDEO);
video.hide()
poseNet=ml5.poseNet(video,model_loaded)
poseNet.on('pose',gotposes)
}
function gotposes(result){
    if (result.length>0)
    {
        console.log(result);
        noseX = result[0].pose.nose.x-15;
         noseY= result[0].pose.nose.y-15;
    }

}
function model_loaded(){

}
function draw(){
image(video,0,0,300,300)
image(nose_image,noseX,noseY,20,20)
}
function takesnap()
{
    save("my_Photo.png")
}