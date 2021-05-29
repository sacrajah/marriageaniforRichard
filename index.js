const btn =document.querySelector('#btn')
btn.addEventListener('click', playAudio)
const audioChange = document.querySelector(".richjemima");

audioChange.addEventListener('click', changeAudio)

// {/* <button onclick="playAudio()" type="button">Play Audio</button> */}

var x = document.getElementById("myAudio");

function playAudio() {
y.pause()
    x.play();
}

function pauseAudio() {
  x.pause();
}
    

var y = document.getElementById("myAudio1");

function changeAudio() {
 x.pause()
    y.play();
}

function pauseAudio() {
  y.pause();
}
    
// stop music

var z = document.getElementById("btn2");
z.addEventListener('click', stpAudio)
function stpAudio() {
  x.pause();
  y.pause();
}