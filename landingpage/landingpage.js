
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const quitButton = document.getElementById('quit-button');


function playGame() {
    
    alert('Game is playing.');
}


function pauseGame() {
   
    alert('Game is paused.');
}


function quitGame() {
  
    alert('Game is quitting.');
}

// Add click event listeners to the buttons
playButton.addEventListener('click', playGame);
pauseButton.addEventListener('click', pauseGame);
quitButton.addEventListener('click', quitGame);
