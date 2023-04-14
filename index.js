var totalButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < totalButton; i++) {

  
  // EVENT LISTENER , IF YOU WANT TO IMPLEMENT USING CLICK EVENT
  // detecting button press
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    animationDrum(this.innerHTML);
  });
}
  

  // EVENT LISTENER , IF YOU WANT TO IMPLEMENT USING KEY PRESS EVENT
      // 1. now press any character displayed to play drum.
  // detecting key press
document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  animationDrum(event.key);
});

function makeSound(key) {
switch (key) {
      case 'w':
        var tom1 = new Audio('/sounds/tom-1.mp3');
        tom1.play();
        break;
      case 'a':
        var tom2 = new Audio('/sounds/tom-2.mp3');
        tom2.play();
        break;
      case 's':
        var tom3 = new Audio('/sounds/tom-3.mp3');
        tom3.play();
        break;
      case 'd':
        var tom4 = new Audio('/sounds/tom-4.mp3');
        tom4.play();
        break;
      case 'j':
        var snare = new Audio('/sounds/snare.mp3');
        snare.play();
        break;
      case 'k':
        var crash = new Audio('/sounds/crash.mp3');
        crash.play();
        break;
      case 'l':
        var kickBass = new Audio('/sounds/kick-bass.mp3');
        kickBass.play();
            break;
          default:
            console.log(event);
            break;
    }
}


// animation to drum

function animationDrum(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(() => {
    document.querySelector("." + currentKey).classList.remove("pressed");
  },300);

}