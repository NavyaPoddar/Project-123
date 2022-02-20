function setup(){
    canvas = createCanvas(500,500);
    canvas.position(700,200);
    video = createCapture(VIDEO);
    video.size(600,500);
    video.position(100,200);
    posenetmodel = ml5.poseNet(video ,modelloaded);
    posenetmodel.on("pose" , getresults);
    
}

function modelloaded(){
    console.log("model has loaded")
}

function getresults(resultsaaray){
    if(resultsaaray.lenght > 0 ){
        console.log(resultsaaray);
    }
}