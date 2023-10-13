const canvas =document.getElementById("game");
const ctx=canvas.getContext("2d");
canvas.width=1200;
canvas.height=800;
canvas.fillStyle="transparent"

const playerHeight=400
const playerWidht=200

const gameOverSound=document.getElementById("GameOver")
const bgSound=document.getElementById("BackGround")
const punchAudio=document.getElementById("punch")
const kickAudio=document.getElementById("kick")
const bgMusic=document.getElementById("start")

bgMusic.volume=0.9;
//bgMusic.play();
//variable to check if game is over or not 
let gameover=false;
let playerLife=0;
let flag1=0;
let flag2=0;
let timer=60;
let counter=0;


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
let radienFall=false;
let radienDown=false;
let radienJump=false;
let i=1;
let j=0
let posX=10;
let RadienLife=playerLife;


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
let reptileFall=false;
let reptileDown =false;
let reptilei=1;
let reptilej=0
let reptilePosX=990;
let ReptileLife=playerLife;


//To reset all the values for the variables                            
function reset()
{
    timer=60;
    bgMusic.volume=0.9
    playerLife=5000;
    bgMusic.currentTime=0;
    bgMusic.play();
    gameover=false;
    flag1=0;
    flag2=0;
    //These are the variables for the Radien to reset
    walk =false;
    punch =false;
    kick=false;
    block =false;
    backWalk=false;
    eKeyDown =false;
    eKeyUp=false;
    rKeyDown =false;
    rKeyUp=false;
    radienFall=false;
    radienDown=false;
    radienJump=false;
    i=1;
    j=0
    posX=10;
    RadienLife=playerLife;

    //These are the variables for the reptile to reset
    reptileWalk =false;
    reptilePunch =false;
    reptileKick=false;
    reptileBlock =false;
    reptileBackWalk=false;
    reptilePunchKeyDown =false;
    reptilePunchKeyUp=false;
    reptileKickKeyDown =false;
    reptileKickKeyUp=false;
    reptileFall=false;
    reptileDown=false;
    reptilei=1;
    reptilej=0
    reptilePosX=990;
    ReptileLife=playerLife;

}


//functions deciding the state when key is pressed
function keydown(event)
{
    if(!gameover)
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
            case "KeyS":
                radienDown=true;
                break;
            case "ArrowDown":
                reptileDown=true;
                break;
            // case "KeyW":
            //     radienJump=true;
            //     break;
        }
    }

}
        
function keyup(event)
        {
            if(!gameover)
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
                    case "KeyS":
                        radienDown=false;
                        break;
                    case "ArrowDown":
                        reptileDown=false;
                        break;
                    case "KeyW":
                        radienJump=true;
                        i=1;
                        break;
                    case "Enter":
                        reset();
                        break;
    
                }
            }
            if(event.code=="Enter")
            {
                reset();
            }
    }

   
    //Applying Event Listener
    document.addEventListener("keydown",keydown);
    document.addEventListener("keyup",keyup);
    // document.addEventListener("keypress",keypress)


//Loading Jump images for Radien 
var radienJumpImages=[];
radienJumpImages.length=3;
for(let i=1;i<=3;i++)
{
    radienJumpImages[i]=new Image();
    radienJumpImages[i].src=`./assets/sprites/duckjump/duckjumpj0${i}.png`
}

// loading Down Images for Radien 
var radienDownImages=[];
radienDownImages.length=3;
for(let i=1;i<=3;i++)
{
    radienDownImages[i]=new Image();
    radienDownImages[i].src=`./assets/sprites/block/blockd0${i}.png`;
}

//Loading Fall Images for Radien
var fallImages=[];
fallImages.length=9;
for(let i=1;i<=9;i++)
{
    fallImages[i]=new Image();
    fallImages[i].src=`./assets/sprites/fall/fallf0${i}.png`
}


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

// Reptile Down Images Loading 
var reptileDownImages=[];
reptileDownImages.length=3;
for(let i=1;i<=3;i++)
{
    reptileDownImages[i]=new Image();
    reptileDownImages[i].src=`./assets/reptile/block/blockd0${i}.png`
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
//loading reptile fall images
var reptileFallImages=[];
reptileFallImages.length=7;
for(let i=1;i<=7;i++)
{
    reptileFallImages[i]=new Image();
    reptileFallImages[i].src=`./assets/reptile/fall/fallf0${i}.png`;
}

//Fall Function for reptile
function reptileFallFunction()
{
    if(reptilei>=7)
    {
        reptilei=7;
    }
    if(reptilei==6 && flag1==0)
    {
        bgMusic.volume=0;
        gameOverSound.volume=1;
        gameOverSound.currentTime=0;
        gameOverSound.play();
        bgSound.volume=0.7;
        bgSound.play();
        flag1=1;
    }
    ctx.drawImage(reptileFallImages[reptilei],reptilePosX,600,playerHeight,150);
    reptilei+=1;
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
    // if(reptilePosX+(reptilej*40)+200>=1200)
    // reptilej-=1;
    ctx.drawImage(reptileWalkImages[10-reptilei],reptilePosX+40,300,playerWidht,playerHeight);
    if(reptilePosX+40<1000)
    reptilePosX+=40;

    reptilei+=1;
    // reptilej+=1;
}

//function for reptile punch

function reptilePunchFunction()
{
    if(reptilei>12)
    {
        reptilei=1;
        reptilePunch=false;
        reptilePunchKeyDown=false;
        reptilePunchKeyUp=false;
    }
    if(reptilei==2)
    {
        punchAudio.volume=0.9;
        punchAudio.currentTime=0;
        punchAudio.play();
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
        reptileKickKeyDown=false;
        reptileKickKeyUp=false;
    }
    if(reptilei==2||reptilei==3)
    {
        kickAudio.volume=0.9;
        kickAudio.currentTime=0;
        kickAudio.play();
    }
    console.log("kick")
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
//reptile down Function
function reptileDownFunction ()
{
    if(reptilei>3)
    {
        reptilei=3;
    }
    ctx.drawImage(reptileDownImages[reptilei],reptilePosX,400,playerWidht,300);
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
    // if(posX-(j*40)<=0)
    // j-=1;
    ctx.drawImage(walkImages[10-i],posX-40,300,playerWidht,playerHeight);
    if(posX>0)
    posX-=40;
    
    i+=1;
    // j+=1;
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
        eKeyDown=false;
        eKeyUp=false;
    }
    if(i==2)
    {
        punchAudio.volume=0.9;
        punchAudio.currentTime=0;
        punchAudio.play();
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
        rKeyDown=false;
        rKeyUp=false;
    }
    if(i==2||i==3)
    {
        kickAudio.volume=0.9;
        kickAudio.currentTime=0;
        kickAudio.play();
    }
    ctx.drawImage(kickImages[i],posX,300,playerWidht,playerHeight);
    i+=2;
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
//Down Function for radien 
function radienDownFunction()
{
    if(i>3)
    {
        i=3;
    }
    ctx.drawImage(radienDownImages[i],posX,400,playerWidht,300);
    i+=1;
}
//Fall function for Radien 
function fallFunction()
{
    if(i>=8)
    {
        i=8;
    }
    if(i==8 && flag2==0)
    {
        bgMusic.volume=0;
        gameOverSound.volume=1;
        gameOverSound.currentTime=0;
        gameOverSound.play();
        bgSound.volume=0.7;
        bgSound.play();
        flag2=1;
        console.log("check");
    }
    ctx.drawImage(fallImages[i],posX,600,playerHeight,150);
    i+=1;
}
// Jump Function for Radien
function radienJumpFunction()
{
    if(Math.ceil(i/3)>=4)
    {
        radienJump=false;
        i=1;
    }
    if(Math.ceil(i/3)==2)
        ctx.drawImage(radienJumpImages[Math.ceil(i/3)],posX,100,playerWidht,300);
    else 
        ctx.drawImage(radienJumpImages[Math.ceil(i/3)],posX,400,playerWidht,300);
        //console.log(i);
    console.log(Math.ceil(i/3));
    i+=1;
}
function gameloop()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.strokeStyle = "White";
    ctx.lineWidth = 5; 

    // Timer Functionality
    if(playerLife!=0 && !gameover)
    {
        
        ctx.font="100px Impact, sans-serif"
        ctx.fillStyle="white"
        ctx.textAlign = "center";
        var text = timer;
        var x = canvas.width / 2;
        var y = canvas.height / 7;
        ctx.fillText(text, x, y);
        if(counter%12==0)
        {
            counter=0
            timer-=1;
        }
        counter+=1;
    }
    if(RadienLife>0&&ReptileLife>0)
    {
        ctx.strokeRect(50, 50, 333, 50); 
        ctx.strokeRect(1150, 50, -333, 50); 

        if(RadienLife>4000)
        {
            ctx.fillStyle="#00ff00"
        }
        else if(RadienLife>3000)
        {
            ctx.fillStyle="#90ff00"
        }
        else if(RadienLife>2000)
        {
            ctx.fillStyle="#ffff00"
        }
        else 
        {
            ctx.fillStyle="#ff0000"
        }
        ctx.fillRect(50,52.5,RadienLife/15,45)
        
        if(ReptileLife>4000)
        {
            ctx.fillStyle="#00ff00"
        }
        else if(ReptileLife>3000)
        {
            ctx.fillStyle="#90ff00"
        }
        else if(ReptileLife>2000)
        {
            ctx.fillStyle="#ffff00"
        }
        else 
        {
            ctx.fillStyle="#ff0000"
        }
        ctx.fillRect(1150,52.5,-(ReptileLife/15),45)
    }
    else{
        if(RadienLife<0)
        {
            radienFall=true;
            ReptileLife=playerLife;
            RadienLife=0;
            gameover=true;
        }
        else if(ReptileLife<0)
        {
            reptileFall=true;
            RadienLife=playerLife;
            ReptileLife=0;
            gameover=true;
        }
    }

    //This is to sync the timer with the lifes of the player 
    if(timer==0)
    {
        bgMusic.currentTime=0;
        bgMusic.play();
        if(RadienLife==ReptileLife)
        {
            timer+=10;
        }
        else if(RadienLife>ReptileLife)
        {
            reptileFall=true;
            RadienLife=playerLife;
            ReptileLife=0;
            gameover=true;
        }
        else 
        {
            radienFall=true;
            ReptileLife=playerLife;
            RadienLife=0;
            gameover=true;
        }
    }

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
    //function TO implement the judged state of radien
    if(radienFall)
    {
        fallFunction();
    }
    else if(punch)
    {
        //console.log("hi")
        punchFunction();
    }
    else if(kick)
    {
        kickFunction();
    }
    else if(block)
    {
        blockFunction();
    }
    else if(walk)
    {
        walkFunction();
    }
    else if(backWalk)
    {
        backWalkFunction();
    }
    else if(radienDown)
    {
        radienDownFunction();
    }
    else if(radienJump)
    {
        //console.log(i);
        radienJumpFunction();
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



    //This is the condition to check the state of reptile
    if(reptileFall)
    {
        console.log(reptilei)
        reptileFallFunction();
    }
    else if(reptilePunch)
    {
        reptilePunchFunction();
    }
    else if(reptileKick)
    {
        reptileKickFunction()
    }
    else if(reptileBlock)
    {
        reptileBlockFunction();
    }
    else if(reptileWalk)
    {
        reptileWalkFunction();
    }
    else if(reptileBackWalk)
    {
        reptileBackWalkFunction();
    }
    else if(reptileDown)
    {
        reptileDownFunction();
    }
    else{

        reptileStanceFunction();
    }


    //Changing the life of the charecters
    if(reptilePosX-posX<200)
    {
        //console.log("Collision Condition")
        if((reptilePunch && radienDown)||(punch&&reptileDown))
        {   
            console.log("punch duck succes")
        }
        else if(block && reptileBlock)
        {
            console.log("both block")
        }
        else if(block &&(reptilePunch||reptileKick)) 
        {
            RadienLife-=20;
            if(posX-10>=0)
            posX-=10;
        }
        else if((punch||kick)&&reptileBlock)
        {
            ReptileLife-=20;
            if(reptilePosX+10<990)
            reptilePosX+=10
        }
        else if((punch||kick)&&(reptileKick||reptilePunch))
        {
            RadienLife-=75;
            ReptileLife-=75;
            if(posX-10>=0)
            posX-=5;
            if(reptilePosX+10<990)
            reptilePosX+=5
        }
        else if(punch||kick)
        {
            ReptileLife-=50;
            if(kick)ReptileLife-=10;
            if(reptilePosX+10<990)
            reptilePosX+=5
        }
        else if(reptilePunch||reptileKick)
        {
            RadienLife-=50;
            if(reptileKick)RadienLife-=10;
            if(posX-10>=0)
            posX-=5;
        }
        //console.log(`RadienLife: ${RadienLife}`)
        //console.log(`ReptileLife: ${ReptileLife}`)

    }
}
setInterval(gameloop,75);