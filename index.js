for(var i=0;i<document.getElementsByClassName('drum').length; i++)
{
  document.getElementsByClassName('drum')[i].addEventListener("click",function(){
    var button=this.innerHTML;
    makesound(button);
    animation(button);
  })
}
document.addEventListener("keydown",function(event){
  makesound(event.key);
  animation(event.key);
})

function makesound(key)
{
  switch (key) {
    case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:

  }
}
function animation(key)
{
  var activebutton=document.getElementsByClassName(key)[0];
  activebutton.classList.add("pressed");
  activebutton.style.color="white";
  setTimeout(function(){
    activebutton.classList.remove("pressed");
    activebutton.style.color="#DA0463";
  },100);
}
