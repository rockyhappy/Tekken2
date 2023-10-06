const canvas =document.getElementById("game");
const ctx=canvas.getContext("2d");
canvas.width=2000;
canvas.height=1000;
canvas.fillStyle="traansparent"


//variables that decide the factors 
let jump=false;
let walk=false;


fetch('assets/subzero_controller.json')
  .then(response => response.json())
  .then(stanceData => {
    
    //console.log(stanceData); 
    console.log(stanceData[]);
    console.log(stanceData[action]);
  })
  .catch(error => {
    console.error('Error loading "stance.json":', error);
  });


function keydown(event)
{
    switch(event.code)
    {
        case "KeyW":
            jump=true;
            break;
        case "KeyD":
            walk=true;
            break;
    }
}
function keyup(event)
{
    switch(event.code)
    {
        case "KeyD":
            walk=false;
            break;
        case "KeyW":
            jump=false;
            break;
    }
}

document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);

let player =new Image();
player.src=`assets/images/playerSprite.png`;
//player.src=`assets/images/subzero.png`;

function jumpPressed()
{
    console.log("HIII");
    ctx.drawImage(player,526/1.6669,137/1.6669,52/1.6669,120/1.6669,0,0,200,400)
    //ctx.drawImage(player,526,137,52,120,0,0,200,400)
    
}
// "x": 526,
//       "y": 137,
//       "w": 52,
//       "h": 120

function gameloop()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)

    if(jump)
    {
        jumpPressed();
    }
}
setInterval(gameloop, 100)