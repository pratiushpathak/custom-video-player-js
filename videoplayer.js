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
  return true;
}

// set video time to progress
function setVideoprogress()
{
  return true
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
