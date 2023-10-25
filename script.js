let timer=60;
let score=0;
let hit=0;
let bubble='';

function timerMaker(){
let ti=setInterval(function(){
if(timer>0){
    timer--;
    document.querySelector("#timer").textContent=timer;
}
else{
    clearInterval(ti);
    document.querySelector("#panelBottom").innerHTML=` <h1  class="timeOver">Time Is Over</h1> 
 <button id="newGame">Try Again</button>
    `;
    document.querySelector("#newGame").addEventListener("click",function(){
        location.reload();
    })
  
}
},1000)
}
function hitMaker(){
    hit= Math.floor(Math.random() * 114)+1 ;
 

    document.querySelector("#hit").textContent=hit;
}
function bubbleMaker(){

    for (let i = 1; i < 115; i++) {
     
        bubble+=` <div class="bubble">${i}</div>`
 
       
    }
    document.querySelector("#panelBottom").innerHTML=bubble;
    }
function scoreMaker(){
score+=10;
document.querySelector("#score").textContent=score
}

document.querySelector("#panelBottom").addEventListener("click",function(details){
   let clickEle=Number(details.target.textContent);
   if(clickEle===hit){
    scoreMaker();
    hitMaker();
    details.target.style.background="#f19fd0a9";
  
   }

  
});
document.querySelector("#reset").addEventListener("click",function(){
    location.reload();
    
});

bubbleMaker();
timerMaker();
hitMaker();

