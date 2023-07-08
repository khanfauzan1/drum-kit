// 137. Adding Event Listeners to button ----    .addEventListener("click", functionName);
// 142. How to use Switch statements in JavaScript 
function makeSound(key){
    switch(key){
      case 'w':
          var crash= new Audio('./sounds/crash.mp3');
          crash.play();
          break;
      case 'a':
          var kickBass= new Audio('./sounds/kick-bass.mp3');
          kickBass.play();
          break;
      case 's':
          var snare= new Audio('./sounds/snare.mp3');
          snare.play();
          break;
      case 'd':
          var tom1= new Audio('./sounds/tom-1.mp3');
          tom1.play();
          break;
      case 'j':
          var tom2= new Audio('./sounds/tom-2.mp3');
          tom2.play();
          break;
      case 'k':
          var tom3= new Audio('./sounds/tom-3.mp3');
          tom3.play();
          break;
      case 'l':
          var tom4= new Audio('./sounds/tom-4.mp3');
          tom4.play();
          break;
      default:
          console.log(buttonInnerHTML);
    }
  }
//  Detecting Button Press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //    console.log(this.innerHTML);
         var buttonInnerHTML=this.innerHTML;
         makeSound(buttonInnerHTML);

         buttonAnimation(buttonInnerHTML);
     //  what to do when click detected
          });
}

// 145. Using Keyboard Event Listeners to Check for Key Presses 
// Detecting Keyboard Press
    document.addEventListener("keydown",function(event){
    
    makeSound(event.key);
    buttonAnimation(event.key);
  });











// function handleClick (){
//     alert("I got clicked");
// }

// 138. Higher Order Functions and Passing Functions as Arguments
//   debugger;  shift and then enter
// function add(num1,num2){
//     return num1+num2;
// }
// function multiply(num1,num2){
//     return num1*num2;
// }
// function add(num1,num2,operator){
//     return operator(num1,num2);     ////   we can call add(3,4)   or multiply(5,4)
// }

// 140. How to play sounds on a website
// var audio= new Audio('./sounds/tom-1.mp3');
// audio.play();


// 141. A Deeper Understanding of JavaScript Objects    143. Objects, their Methods and the Dot Notation
//  constructor function
// function HouseKeeper(name,yearOfExperience,cleaningRepertoire){
//     this.name=name;
//     this.yearOfExperience=yearOfExperience;
//     this.cleaningRepertoire=cleaningRepertoire;
//     this.clean=function() {
//     alert("ok,cleaning in progress");
//     }
// }
// var houseKeeper1=new HouseKeeper("fauzan",5,["house","befroom"]);
// houseKeeper1.clean();     ----   gives an alert "ok,cleaning in progress"

//  146.Understanding Callbacks and How to Respond to Events
//    document.querySelector("h1").addEventListener("click",function(event){
//         console.log(event);
//    });



//   function anotherAddEventListener(typeOfEvent,callBack){

//     //   Detect Event Code
//     var eventThatHappened={
//         eventType:"keypress",
//         keys:"p",
//         durationOfEvent: 2
//     }
//      if(eventThatHappened.eventType===typeOfEvent)
//      callBack(eventThatHappened);

//   }
//    anotherAddEventListener("keypress",function(event){
//     console.log(event);
//    });

// 147. Adding Animations to Websites

  function buttonAnimation(currentKey) {

    var activeButton =document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 300);
    
  }



