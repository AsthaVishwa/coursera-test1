var video= document.getElementbyId("video");
var butn = document.getElementbyId("ibtn");

function myfunction(){
	if(video.pause){
		video.play();
	}
	else{
		video.pause();
	}
}

