const video=document.getElementById('video');
const play=document.getElementById('play');
const stops=document.getElementById('stop');
const progress=document.getElementById('progress');
const timestamp=document.getElementById('timestamp');
const icon= document.getElementsByClassName('play')
//play& pause video
function toggleVideoStatus()
{
  if(video.paused)
  {
    video.play();
  }
  else
  {
    video.pause();
  }
}
//update play/pause icon
function updatePlayIcon(){
 if(video.paused)
 {
  play.innerHTML='<img src="play-button-arrowhead.png" alt="Play" width="24">';
 }
 else
 {
  play.innerHTML='<img src="pause.png" alt="Pause" width="24">';
 }

}
//update progeess & timestamp
function updateProgress(){
  // console.log(video.currentTime)
  // console.log(video.duration)
  progress.value=(video.currentTime/video.duration)*100;

// get minutes
let mins=Math.floor(video.currentTime/60);
if(mins<0)
{
  mins='0'+String(mins);
}
//get Seconds
let secs=Math.floor(video.currentTime%60);
if(secs<0)
{
  secs='0'+String(mins);
}

timestamp.innerHTML=`${mins}:${secs}`;

}

// set video time to progress
function setVideoprogress()
{
  video.currentTime=+(progress.value*video.duration)/100;
}

// stop video
function stopVideo()
{
video.currenTime=0;
video.pause()
}




//event listeners
video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);



play.addEventListener('click', toggleVideoStatus);

stops.addEventListener('click',stopVideo);
progress.addEventListener('change',setVideoprogress);
