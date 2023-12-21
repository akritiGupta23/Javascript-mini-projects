const ball = document.getElementById("ball");
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
const position=ball.getBoundingClientRect();
let initialWidth=position.x;
let initialHeight=position.y;
let h=0;
let y=0;
let posright=initialWidth+120;
let posleft=initialWidth-20;
function moveTheBall(event){
    if(event.key === "d"){
        if(posright+h<=winWidth){
            h+=20;
            ball.style.transform=`translate(${h}px,${y}px)`;
          
          
            ball.style.transition=" all 0.3s";
        }
       
       
       
    }else if(event.key==="a"){
        if(posleft+h>0){
            h-=20;
            ball.style.transform=`translate(${h}px,${y}px)`;
           
          
            ball.style.transition=" all 0.3s";
        }
    }else if(event.key==="s"){
        if(initialHeight+120+y<winHeight){
            y+=20;
            ball.style.transform=`translate(${h}px,${y}px)`;
          
            ball.style.transition=" all 0.3s";
        }
    }else if(event.key==="w"){
        if(initialHeight-20+y>0){
            y-=20;
            ball.style.transform=`translate(${h}px,${y}px)`;
          
            ball.style.transition=" all 0.3s";
        }
        
    }
}
document.addEventListener('keypress',moveTheBall);