const toggle=document.querySelector('.play');
const video=document.querySelector('.player');
const progressBar = document.getElementById('file');
const fullscreen=document.querySelector('.fullscreen');
toggle.addEventListener('click',()=>{
  if(video.paused)
  {
  video.play()
 toggle.innerHTML="pause"
  }
  else
  {
    video.pause()
    toggle.innerHTML="play";
   
  }

})
video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.value = progress;
});
fullscreen.addEventListener('click',()=>{
  video.requestFullscreen();
})
