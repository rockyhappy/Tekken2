const canvas =document.getElementById("game");
const ctx=canvas.getContext("2d");
canvas.width=2000;
canvas.height=1000;
canvas.fillStyle="transparent"

// variable to define state
let walk =false;
let punch =false;
let kick=false;
let block =false;
let backWalk=false;
let eKeyDown =false;
let eKeyUp=false;
let rKeyDown =false;
let rKeyUp=false;
let i=1;
let j=1
let posX=10;

//functions deciding the state when key is pressed
function keydown(event)
{
    switch(event.code)
    {
        case "KeyD":
            walk=true;
            break;
        case "KeyA":
            backWalk=true;
            break;
        case "KeyE":
            eKeyDown=true;
            break;
        case "KeyR":
            rKeyDown=true;
            break;
            }
        }
        
function keyup(event)
        {
            switch (event.code)
            {
                case "KeyD":
                    walk=false;
                    posX+=j*40;
                    j=1
                    break;
                case "KeyA":
                    backWalk=false;
                    posX-=j*40;
                    j=1;
                    break;
                case "KeyE":
                    i=1;
                    eKeyUp=true;
                    break;
                case "KeyR":
                    i=1;
                    rKeyUp=true;
                    break;
        }
    }

   
    //Applying Event Listener
    document.addEventListener("keydown",keydown);
    document.addEventListener("keyup",keyup);
    // document.addEventListener("keypress",keypress)


//loading walking images
var walkImages=[];
walkImages.length=9;
for(let i =1;i<=9;i++)
{
    walkImages[i]=new Image();
    walkImages[i].src=`./assets/sprites/walk/walk0${i}.png`;
}

//loading running images
var runImages=[];
runImages.length=12;
for(let i=1;i<=12;i++)
{
    runImages[i]=new Image();
    runImages[i].src=`./assets/sprites/run/run${i}.png`;
}

//loading stance images
var stanceImages=[];
stanceImages.length=12;
for(let i=1;i<=12;i++)
{
    stanceImages[i]=new Image();
    stanceImages[i].src=`./assets/sprites/stance/stance0${i}.png`;
}

//loading punch images
var punchImages=[];
punchImages.length=11;
for(let i=1;i<=11;i++)
{
    punchImages[i]=new Image();
    punchImages[i].src=`./assets/sprites/punch/punch0${i}.png`;
}

//loading kick images
var kickImages=[];
kickImages.length=14;
for(let i=1;i<=14;i++)
{
    kickImages[i]=new Image();
    kickImages[i].src=`./assets/sprites/kick/kick0${i}.png`;
}

//loading block images
var blockImages=[];
blockImages.length=3;
for(let i=1;i<=3;i++)
{
    blockImages[i]=new Image();
    blockImages[i].src=`./assets/sprites/block/block0${i}.png`;
}

function walkFunction()
{
    if(i>=9){
        i=1;
    }
    ctx.drawImage(walkImages[i],posX+(j*40),10,400,400);
    console.log(j);
    i+=1;
    j+=1;
}
function backWalkFunction()
{
    if(i>=9){
        i=1;
    }
    ctx.drawImage(walkImages[i],posX-(j*40),10,400,400);
    i+=1;
    j+=1;
}
function stanceFunction()
{
    if(i>12){
        i=1;
    }
    ctx.drawImage(stanceImages[i],posX,10,400,400);
    i+=1;
}
function punchFunction()
{
    if(i>=11)
    {
        i=1;
        punch=false;
    }
    ctx.drawImage(punchImages[i],posX,10,400,400);
    i+=1;
}
function kickFunction()
{
    if(i>14)
    {
        i=1;
        kick=false;
    }
    ctx.drawImage(kickImages[i],posX,10,400,400);
    i+=1;
}
function blockFunction()
{
    if(i>3)
    {
        i=3;
    }
    ctx.drawImage(blockImages[i],posX,10,400,400);
    i+=1;
}
function gameloop()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)

    //checking for what state the controller wants to be 
    if(eKeyDown&&rKeyDown&&!eKeyUp&&!rKeyUp)
    {
        block=true;
    }
    else if(eKeyDown&&eKeyUp&&!rKeyDown&&!rKeyUp)
    {
        punch=true;
        eKeyDown=false;
        rKeyDown=false;
        eKeyUp=false;
        rKeyUp=false;
    }
    else if(!eKeyDown&&!eKeyUp&&rKeyDown&&rKeyUp)
    {
        kick=true;
        eKeyDown=false;
        rKeyDown=false;
        eKeyUp=false;
        rKeyUp=false;
    }
    else if(eKeyDown&&eKeyUp&&rKeyDown&&rKeyUp)
    {
        block=false;
        eKeyDown=false;
        rKeyDown=false;
        eKeyUp=false;
        rKeyUp=false;
    }
    if(walk)
    {
        //console.log("hi")
        walkFunction();
    }
    else if(backWalk)
    {
        backWalkFunction();
    }
    else if(block)
    {
        blockFunction();
    }
    else if(punch)
    {
        punchFunction();
    }
    else if(kick)
    {
        kickFunction();
        ctx.clearRect(0,0,canvas.width,canvas.height)
        kickFunction();
    }
    else{
        stanceFunction()
    }
}
setInterval(gameloop,80);