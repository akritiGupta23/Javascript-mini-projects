var input=document.getElementById('input');
var buttn=document.getElementById('submitbtn');
var box=document.getElementsByClassName('box');
var idInterval;

var tot=0;
var tot2=0;
var tot3=0;
var tot4=0;
var tot5=0;
function increaseCount(count){
    tot++;
    var totStr=tot.toString();
  
    if(totStr.length>4 && parseInt(totStr.charAt(totStr.length-5))!=tot5){
      box[1].innerHTML=parseInt(box[0].innerHTML)+1;
      box[3].innerHTML=0;
      box[5].innerHTML=0;
      box[7].innerHTML=0;
      box[9].innerHTML=0;

      for(let j=1;j<=9;j+=2){
        box[j].classList.add("next");
      }
    
      setTimeout(function(){
        for(let j=0;j<=8;j+=2){
          box[j+1].classList.remove("next");
          box[j].innerHTML=box[j+1].innerHTML;
        }
       
      },500);
      tot5++;
      tot2=0;
      tot3=0;
      tot4=0;
    
    }else if(totStr.length>3 && parseInt(totStr.charAt(totStr.length-4))!=tot4){
      box[3].innerHTML=parseInt(box[2].innerHTML)+1;
      box[5].innerHTML=0;
      box[7].innerHTML=0;
      box[9].innerHTML=0;

      for(let j=3;j<=9;j+=2){
        box[j].classList.add("next");
      }
    
      setTimeout(function(){
        for(let j=2;j<=8;j+=2){
          box[j+1].classList.remove("next");
          box[j].innerHTML=box[j+1].innerHTML;
        }
       
      },500);
      tot4++;
      tot2=0;
      tot3=0;
    
    }else if(totStr.length>2 && parseInt(totStr.charAt(totStr.length-3))!=tot3){
      box[5].innerHTML=parseInt(box[4].innerHTML)+1;
      box[7].innerHTML=0;
      box[9].innerHTML=0;
      box[5].classList.add("next");
      box[7].classList.add("next");
      box[9].classList.add("next");
      setTimeout(function(){
        for(let j=4;j<=8;j+=2){
          box[j+1].classList.remove("next");
          box[j].innerHTML=box[j+1].innerHTML;
        }
       
      },500);
      tot3++;
      tot2=0;

    }else if(totStr.length>1 && parseInt(totStr.charAt(totStr.length-2))!=tot2){
      box[7].innerHTML=parseInt(box[6].innerHTML)+1;
      box[9].innerHTML=0;
      box[7].classList.add("next");
      box[9].classList.add("next");
      setTimeout(function(){
        
        box[7].classList.remove("next");
        box[6].innerHTML=box[7].innerHTML;
        box[9].classList.remove("next");
        box[8].innerHTML=box[9].innerHTML;
      },500);
      tot2++;

    }else{
      box[9].innerHTML=(tot%10);
      box[9].classList.add("next");
      setTimeout(function(){
        
        
        box[9].classList.remove("next");
        box[8].innerHTML=box[9].innerHTML;
      },500);

    }
      
      


      if(tot>=count){
        clearInterval(idInterval);
      }


}

buttn.addEventListener('click',function(event){
    event.preventDefault();
    let count=input.value;
  
    if(count==""){
        alert("Enter a valid number.");
        clearInterval(idInterval);
        for(let j=0;j<=9;j++){
          box[j].innerHTML=0;
        }
        tot=0;
        tot2=0;    
        tot3=0;
        tot4=0;
        tot5=0;
    }else{
        idInterval=setInterval(increaseCount,1000,count);
        for(let j=0;j<=9;j++){
          box[j].innerHTML=0;
        }
        tot=0;
        tot2=0;    
        tot3=0;
        tot4=0;
        tot5=0;

    }
});