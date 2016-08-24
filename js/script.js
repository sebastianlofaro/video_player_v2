var video = document.getElementById("video");
var mute = document.getElementById('mute')
var fullscreen = document.getElementById('fullscreen');
var progressBar = document.getElementById('progress');
var transcriptLine = document.getElementsByClassName('transcriptLine');
var transcriptWrapper = document.getElementById('transcript-wrapper');

var changeButtonState = function(type) {
   // Play/Pause button
   if (type == 'playpause') {
      if (video.paused || video.ended) {
         playpause.setAttribute('data-state', 'play');
      }
      else {
         playpause.setAttribute('data-state', 'pause');
      }
   }
   // Mute button
   else if (type == 'mute') {
      mute.setAttribute('data-state', video.muted ? 'unmute' : 'mute');
   }
}

video.addEventListener('play', function() {
  console.log('play clicked');
   changeButtonState('playpause');
}, false);
video.addEventListener('pause', function() {
   changeButtonState('playpause');
   console.log('pause clicked');
}, false);

mute.addEventListener('click', function() {
   video.muted = !video.muted;
   changeButtonState('mute');
});

fullscreen.addEventListener('click', function() {
  video.webkitEnterFullscreen();
});

playpause.addEventListener('click', function() {
   if (video.paused || video.ended) video.play();
   else video.pause();
});

progressBar.addEventListener('click', function(event) {
  var progressBarWidth = event.target.clientWidth;
  var cursorPosition = event.offsetX;
  var percentOfVideoClicked = cursorPosition/progressBarWidth;

  video.currentTime = (video.duration * percentOfVideoClicked);
  console.log(progressBarWidth);
});



// Handle clicks on transcript lines.

document.getElementById('t1').addEventListener('click', function(){
  video.currentTime = 0.000;
})
document.getElementById('t2').addEventListener('click', function(){
  video.currentTime = 4.130;
})
document.getElementById('t3').addEventListener('click', function(){
  video.currentTime = 7.535;
})
document.getElementById('t4').addEventListener('click', function(){
  video.currentTime = 11.270;
})
document.getElementById('t5').addEventListener('click', function(){
  video.currentTime = 13.960;
})
document.getElementById('t6').addEventListener('click', function(){
  video.currentTime = 17.940;
})
document.getElementById('t7').addEventListener('click', function(){
  video.currentTime = 22.370;
})
document.getElementById('t8').addEventListener('click', function(){
  video.currentTime = 26.880;
})
document.getElementById('t9').addEventListener('click', function(){
  video.currentTime = 32.100;
})
document.getElementById('t10').addEventListener('click', function(){
  video.currentTime = 34.730;
})
document.getElementById('t11').addEventListener('click', function(){
  video.currentTime = 39.430;
})
document.getElementById('t12').addEventListener('click', function(){
  video.currentTime = 42.350;
})
document.getElementById('t13').addEventListener('click', function(){
  video.currentTime = 46.300;
})
document.getElementById('t14').addEventListener('click', function(){
  video.currentTime = 49.270;
})
document.getElementById('t15').addEventListener('click', function(){
  video.currentTime = 53.760;
})
document.getElementById('t16').addEventListener('click', function(){
  video.currentTime = 57.780;
})



//handle highlighting the text
function clearSlate() {
  for (var i = 0; i < 16; i++) {
    document.getElementsByClassName('transcriptLine')[i].classList.remove('highlight');
  }
}

video.ontimeupdate = function() {
  //set the progress bar
  var percentComplete = (video.currentTime/video.duration)*100;
  document.getElementById('progress').value = percentComplete;

  //set the time
  var vCurrentSeconds = ('0' + Math.floor(video.currentTime) % 60).slice(-2);
  var vCurrentMinutes = ('0' + (Math.floor(video.currentTime) - parseInt(vCurrentSeconds)))
  var vTotalSeconds = ('0' + Math.floor(video.duration) % 60).slice(-2);
  var vTotalMinutes = ('0' + (Math.floor(video.duration) - parseInt(vTotalSeconds)))
  document.getElementById('time').innerHTML = `${vCurrentMinutes}:${vCurrentSeconds} / ${vTotalMinutes}:${vTotalSeconds}`;

  if (video.currentTime >= 0.000 && video.currentTime < 4.130) {
    clearSlate();
    document.getElementById('t1').classList.add('highlight');
  }
  if (video.currentTime >= 4.130 && video.currentTime < 7.535) {
    clearSlate();
    document.getElementById('t2').classList.add('highlight');
  }
  if (video.currentTime >= 7.535 && video.currentTime < 11.270) {
    clearSlate();
    document.getElementById('t3').classList.add('highlight');
  }
  if (video.currentTime >= 11.270 && video.currentTime < 13.960) {
    clearSlate();
    document.getElementById('t4').classList.add('highlight');
  }
  if (video.currentTime >= 13.960 && video.currentTime < 17.940) {
    clearSlate();
    document.getElementById('t5').classList.add('highlight');
  }
  if (video.currentTime >= 17.940 && video.currentTime < 22.370) {
    clearSlate();
    document.getElementById('t6').classList.add('highlight');
  }
  if (video.currentTime >= 22.370 && video.currentTime < 26.880) {
    clearSlate();
    document.getElementById('t7').classList.add('highlight');
  }
  if (video.currentTime >= 26.880 && video.currentTime < 30.920) {
    clearSlate();
    document.getElementById('t8').classList.add('highlight');
  }
  if (video.currentTime >= 32.100 && video.currentTime < 34.730) {
    clearSlate();
    document.getElementById('t9').classList.add('highlight');
  }
  if (video.currentTime >= 34.730 && video.currentTime < 39.430) {
    clearSlate();
    document.getElementById('t10').classList.add('highlight');
  }
  if (video.currentTime >= 39.430 && video.currentTime < 41.190) {
    clearSlate();
    document.getElementById('t11').classList.add('highlight');
  }
  if (video.currentTime >= 42.350 && video.currentTime < 46.300) {
    clearSlate();
    document.getElementById('t12').classList.add('highlight');
  }
  if (video.currentTime >= 46.300 && video.currentTime < 49.270) {
    clearSlate();
    document.getElementById('t13').classList.add('highlight');
  }
  if (video.currentTime >= 49.270 && video.currentTime < 53.760) {
    clearSlate();
    document.getElementById('t14').classList.add('highlight');
  }
  if (video.currentTime >= 53.760 && video.currentTime < 57.780) {
    clearSlate();
    document.getElementById('t15').classList.add('highlight');
  }
  if (video.currentTime >= 57.780 && video.currentTime < 60.150) {
    clearSlate();
    document.getElementById('t16').classList.add('highlight');
  }
};
