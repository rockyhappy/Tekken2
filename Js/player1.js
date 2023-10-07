const canvas =document.getElementById("game");
const ctx=canvas.getContext("2d");
canvas.width=1200;
canvas.height=800;
canvas.fillStyle="transparent"

const playerHeight=400
const playerWidht=200


// variable to define state of radien 
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
let j=0
let posX=10;





//variables to define the state of reptile 

let reptileWalk =false;
let reptilePunch =false;
let reptileKick=false;
let reptileBlock =false;
let reptileBackWalk=false;
let reptilePunchKeyDown =false;
let reptilePunchKeyUp=false;
let reptileKickKeyDown =false;
let reptileKickKeyUp=false;
let reptilei=1;
let reptilej=0
let reptilePosX=990;





//functions deciding the state when key is pressed
function keydown(event)
{
    //console.log(event.code)
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
        case "ArrowRight":
            reptileBackWalk=true;    
            break;
        case "ArrowLeft":
            reptileWalk=true;
            break;
        case "Period":
            reptilePunchKeyDown=true;
            break;
        case "Slash":
            reptileKickKeyDown=true;
            break;
            }
        }
        
function keyup(event)
        {
            //console.log(event.code)
            switch (event.code)
            {
                case "KeyD":
                    walk=false;
                    posX+=j*40;
                    j=0
                    break;
                case "KeyA":
                    backWalk=false;
                    posX-=j*40;
                    j=0;
                    break;
                case "KeyE":
                    i=1;
                    eKeyUp=true;
                    break;
                case "KeyR":
                    i=1;
                    rKeyUp=true;
                    break;
                case "ArrowRight":
                    reptileBackWalk=false;
                    reptilePosX+=reptilej*40;
                    reptilej=0;
                    break;
                case "ArrowLeft":
                    reptileWalk=false;
                    reptilePosX-=reptilej*40;
                    reptilej=0;
                    break;
                case "Period":
                    reptilePunchKeyUp=true;
                    reptilei=1;
                    break;
                case "Slash":
                    reptileKickKeyUp=true;
                    reptilei=1;
                    break;

        }
    }

   
    //Applying Event Listener
    document.addEventListener("keydown",keydown);
    document.addEventListener("keyup",keyup);
    // document.addEventListener("keypress",keypress)


//loading walking images radien
var walkImages=[];
walkImages.length=9;
for(let i =1;i<=9;i++)
{
    walkImages[i]=new Image();
    walkImages[i].src=`./assets/sprites/walk/walk0${i}.png`;
}

//loading stance images Radien
var stanceImages=[];
stanceImages.length=12;
for(let i=1;i<=12;i++)
{
    stanceImages[i]=new Image();
    stanceImages[i].src=`./assets/sprites/stance/stance0${i}.png`;
}

//loading punch images Radien
var punchImages=[];
punchImages.length=11;
for(let i=1;i<=11;i++)
{
    punchImages[i]=new Image();
    punchImages[i].src=`./assets/sprites/punch/punch0${i}.png`;
}

//loading kick images Radien 
var kickImages=[];
kickImages.length=14;
for(let i=1;i<=14;i++)
{
    kickImages[i]=new Image();
    kickImages[i].src=`./assets/sprites/kick/kick0${i}.png`;
}

//loading block images Radien 
var blockImages=[];
blockImages.length=3;
for(let i=1;i<=3;i++)
{
    blockImages[i]=new Image();
    blockImages[i].src=`./assets/sprites/block/block0${i}.png`;
}


// loading reptile walk images
var reptileWalkImages=[];
reptileWalkImages.length=9;
for(let i=1;i<=9;i++)
{
    reptileWalkImages[i]=new Image();
    reptileWalkImages[i].src=`./assets/reptile/walk/walk0${i}.png`;
}

// loading reptile Punch images
var reptilePunchImages=[];
reptilePunchImages.length=12;
for(let i=1;i<=12;i++)
{
    reptilePunchImages[i]=new Image();
    reptilePunchImages[i].src=`./assets/reptile/punch/punch0${i}.png`;
}

// loading reptile Stance Images
var reptileStanceImages=[];
reptileStanceImages.length=7;
for(let i=1;i<=7;i++)
{
    reptileStanceImages[i]=new Image();
    reptileStanceImages[i].src=`./assets/reptile/stance/stance0${i}.png`;
}

// Loading Reptile Kick Images
var reptileKickImages=[];
reptileKickImages.length=14
for(let i=1;i<=14;i++)
{
    reptileKickImages[i]=new Image();
    reptileKickImages[i].src=`./assets/reptile/kick/kick0${i}.png`
}

//Loading Reptile Block Images
var reptileBlockImages=[];
reptileBlockImages.length=3;
for(let i =1;i<=3;i++)
{
    reptileBlockImages[i]=new Image();
    reptileBlockImages[i].src=`./assets/reptile/block/block0${i}.png`;
}

// Stance function for reptile
function reptileStanceFunction()
{
    if(reptilei>7){
        reptilei=1;
    }
    ctx.drawImage(reptileStanceImages[reptilei],reptilePosX,300,playerWidht,playerHeight);
    reptilei+=1;
}

//walk function for Reptile
function reptileWalkFunction()
{
    if(reptilei>9)
    {
        reptilei=1;
    }
    ctx.drawImage(reptileWalkImages[reptilei],reptilePosX,300,playerWidht,playerHeight);
    reptilei+=1;
    if(reptilePosX-180>posX)
    reptilePosX-=40;
}

//back walk function for Reptile
function reptileBackWalkFunction()
{
    if(reptilei>=9){
        reptilei=1;
    }
    if(reptilePosX+(reptilej*40)+200>=1200)
    reptilej-=1;
    ctx.drawImage(reptileWalkImages[10-reptilei],reptilePosX+(reptilej*40),300,playerWidht,playerHeight);
    reptilei+=1;
    reptilej+=1;
}

//function for reptile punch

function reptilePunchFunction()
{
    if(reptilei>12)
    {
        reptilei=1;
        reptilePunch=false;
    }
    ctx.drawImage(reptilePunchImages[reptilei],reptilePosX,300,playerWidht,playerHeight);
    reptilei+=1;
}


//function for the kick of reptile
function reptileKickFunction()
{
    if(reptilei>14)
    {
        reptilei=1;
        reptileKick=false;
    }
    ctx.drawImage(reptileKickImages[reptilei],reptilePosX,300,playerWidht,playerHeight);
    reptilei+=2;
}

// Function for the block of Reptile
function reptileBlockFunction()
{
    if(reptilei>3)
    {
        reptilei=3;
    }
    ctx.drawImage(reptileBlockImages[reptilei],reptilePosX,300,playerWidht,playerHeight);
    reptilei+=1;
}
//walk function for radien
function walkFunction()
{
    if(i>=9){
        i=1;
    }
    ctx.drawImage(walkImages[i],posX+40,300,playerWidht,playerHeight);
    //console.log(j);
    i+=1;
    if(posX+180<reptilePosX)
    posX+=40;
    
}
function backWalkFunction()
{
    if(i>=9){
        i=1;
    }
    if(posX-(j*40)<=0)
    j-=1;
    ctx.drawImage(walkImages[10-i],posX-(j*40),300,playerWidht,playerHeight);
    i+=1;
    j+=1;
}
function stanceFunction()
{
    if(i>12){
        i=1;
    }
    ctx.drawImage(stanceImages[i],posX,300,playerWidht,playerHeight);
    i+=1;
}
function punchFunction()
{
    if(i>=11)
    {
        i=1;
        punch=false;
    }
    ctx.drawImage(punchImages[i],posX,300,playerWidht,playerHeight);
    i+=1;
}
function kickFunction()
{
    if(i>14)
    {
        i=1;
        kick=false;
    }
    ctx.drawImage(kickImages[i],posX,300,playerWidht,playerHeight);
    i+=1;
}
function blockFunction()
{
    if(i>3)
    {
        i=3;
    }
    ctx.drawImage(blockImages[i],posX,300,playerWidht,playerHeight);
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
        stanceFunction();
    }


    //conditions to judge the the state of the reptile
    if(reptilePunchKeyDown&&reptileKickKeyDown&&!reptilePunchKeyUp&&!reptileKickKeyUp)
    {
        reptileBlock=true;
    }
    else if(reptilePunchKeyDown&&reptilePunchKeyUp&&!reptileKickKeyDown&&!reptileKickKeyUp)
    {
        reptilePunch=true;
        reptileKickKeyDown=false;
        reptilePunchKeyDown=false;
        reptilePunchKeyUp=false;
        reptileKickKeyUp=false;
    }
    else if(!reptilePunchKeyDown&&!reptilePunchKeyUp&&reptileKickKeyDown&&reptileKickKeyUp)
    {
        reptileKick=true;
        reptilePunchKeyDown=false;
        reptileKickKeyDown=false;
        reptilePunchKeyUp=false;
        reptileKickKeyUp=false;
    }
    else if(reptilePunchKeyDown&&reptilePunchKeyUp&&reptileKickKeyDown&&reptileKickKeyUp)
    {
        reptileBlock=false;
        reptileKickKeyDown=false;
        reptilePunchKeyDown=false;
        reptilePunchKeyUp=false;
        reptileKickKeyUp=false;
    }




    if(reptileWalk)
    {
        reptileWalkFunction();
    }
    else if(reptileBackWalk)
    {
        reptileBackWalkFunction();
    }
    else if(reptileBlock)
    {
        reptileBlockFunction();
        //console.log("reptileBlock");
    }
    else if(reptilePunch)
    {
        reptilePunchFunction();
        //ctx.clearRect(0,0,canvas.width,canvas.height)
        //reptileKickFunction();
    }
    else if(reptileKick)
    {
        reptileKickFunction();
    }
    else{

        reptileStanceFunction();
    }
}
setInterval(gameloop,80);