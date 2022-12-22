for(var i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click", hello);
}
function hello(){
    switch(this.innerHTML){
    case "w":
        var audio= new Audio('crash.mp3');
        audio.play();
     case "a":
        var audio= new Audio('kick-bass.mp3');
        audio.play();
     case "s":
        var audio= new Audio('snare.mp3');
        audio.play();
     case "d":
        var audio= new Audio('tom-1.mp3');
        audio.play();
  case "j":
        var audio= new Audio('tom-2.mp3');
        audio.play();
     case "k":
        var audio= new Audio('tom-3.mp3');
        audio.play();
     case "l":
        var audio= new Audio('tom-4.mp3');
        audio.play();

        
    }
    btnanim(this.innerHTML);
    this.style.color="white";
    var j=this;
    setTimeout(function(){
        j.style.color= "#DA0463";

    },100)
}

     
    document.addEventListener("keydown", function(e){

        switch(e.key){
            case "w":
                var audio= new Audio('crash.mp3');
                audio.play();
             case "a":
                var audio= new Audio('kick-bass.mp3');
                audio.play();
             case "s":
                var audio= new Audio('snare.mp3');
                audio.play();
             case "d":
                var audio= new Audio('tom-1.mp3');
                audio.play();
          case "j":
                var audio= new Audio('tom-2.mp3');
                audio.play();
             case "k":
                var audio= new Audio('tom-3.mp3');
                audio.play();
             case "l":
                var audio= new Audio('tom-4.mp3');
                audio.play();
                
            }
            btnanim(e.key);
            
    })

    function btnanim(a){
       var f= document.querySelector("."+a);
       f.classList.add("pressed");
        setTimeout(function(){
            f.classList.remove("pressed");

        },100);
    }
    
        

    
   
