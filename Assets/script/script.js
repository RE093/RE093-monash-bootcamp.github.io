

// Animates the portfolio containers when the cursor floats over it 

class containerAnimate {
  constructor (container, inner) {

      this.container = container;
      this.inner = inner;

      var containerOne = document.getElementById(`${container}`);
      var innerOne = document.getElementById(`${inner}`);

      var mouse = {
          _x: 0,
          _y: 0,
          x: 0,
          y: 0,
          updatePosition: function(event) {
              var e = event || window.event;
              this.x = e.clientX - this._x;
              this.y = (e.clientY - this._y) * -1;
          },
          setOrigin: function(e) {
              this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
              this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
          },
          show: function() { return '(' + this.x + ', ' + this.y + ')'; }
      }

      var update = function(event) {
          mouse.updatePosition(event);
          updateTransformStyle(
              (mouse.y / innerOne.offsetHeight/2).toFixed(2),
              (mouse.x / innerOne.offsetWidth/2).toFixed(2)
          );
      };

      var updateTransformStyle = function(x, y) {
          var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
          innerOne.style.transform = style;
          innerOne.style.webkitTransform = style;
          innerOne.style.mozTransform = style;
          innerOne.style.msTransform = style;
          innerOne.style.oTransform = style;
      };

      mouse.setOrigin(containerOne);

      var counter = 0;
      var updateRate = 10;

      var isTimeToUpdate = function() {
          return counter++ % updateRate === 0;
      };

      isTimeToUpdate()
              
      var onMouseEnterHandler = function(event) {
          update(event);
      };
      var onMouseLeaveHandler = function() {
          innerOne.style = "";
      };
      var onMouseMoveHandler = function(event) {
          if (isTimeToUpdate()) {
              update(event);
          }
      };

      containerOne.onmouseenter = onMouseEnterHandler;
      containerOne.onmouseleave = onMouseLeaveHandler;
      containerOne.onmousemove = onMouseMoveHandler;

  }
}

const IamContainerOne = new containerAnimate("containerOne", "innerOne");
const IamContainerTwo = new containerAnimate("containerTwo", "innerTwo");
const IamContainerThree = new containerAnimate("containerThree", "innerThree");
const IamContainerFour = new containerAnimate("containerFour", "innerFour");



// function that spins the "I code..." letters --------------------------------------------


// class SpinningLetter {
//     constructor() {
//         console.log("I have been called")
//     };

//     scrambleWord(word, tagType) {
//         let words = word;
//         let wordSplit = words.split("");
//         let index = Math.round(Math.random() * word.length);
//         let newElem = $(`#${tagType}`)

//         const letterOne = setInterval(function() {
//             index = Math.round(Math.random() * word.length);
//             $(newElem).text(wordSplit[index]);
//         }, 100);

//         setTimeout(function() {
//             clearInterval(letterOne)
//         }, 500)

//         const following = function() {
//             const letterTwo = setInterval(function() {
//                 index = Math.round(Math.random() * word.length);
//                 $(newElem).append(wordSplit[index]);        
//                 setTimeout(function() {
//                     clearInterval(letterTwo)
//                 }, 450);
//             }, 100);
//         }
//         for (let i=0; i<7; i++) {
//             following();
//         }
//         setInterval(function() {
//             $(newElem).text(` ${word}`)
//         },300)  
//     }
// }

// setTimeout(function() {
//     const wordsTwo = new SpinningLetter();
//     wordsTwo.scrambleWord("<p> Full Stack Developer </p>", "code");
// },3500)

// Function to type the "I design" out ---------------------------------------------------

var i = 0;
var txt = "UI/ UX Designer & "
var speed = 100;
function typeWriter() {
        if (i < txt.length) {
        document.getElementById("design").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
}
typeWriter();

// Function to show and hide the navbar --------------------------------------------------

// $(document).ready(function(){

//     // $(".navbar").hide();

//     $(function () {
//         $(window).scroll(function () {
//             if ($(this).scrollTop() > 100) {
//                 // $(".navbar").show("slow");
//             } else {
//                 // $(".navbar").hide("slow");
//             }
//         });
//     });
// });

// Function to do the flashing cursor effect ---------------------------------------------

var cursor = true;
var speed = 200;
setInterval(() => {
  if(cursor) {
    document.getElementById('line').style.opacity = 0;
    cursor = false;
  }else {
    document.getElementById('line').style.opacity = 1;
    cursor = true;
  }
}, speed);

// show full stack developer ---------------------------------

setTimeout(function() {
    $("#code-image").css("visibility", "visible")
},4000)

// Activates tool tips --------------------------------
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


//Project Modals --------------------------------------------------
$("#containerOne").on("click", function() {
    $('.rsl-modal').modal('toggle')
})

$('.carousel').carousel()

$("#containerTwo").on("click", function() {
    $('#better-modal').modal('toggle')
})

$("#containerThree").on("click", function() {
    $('#weather-modal').modal('toggle')
})

$("#containerFour").on("click", function() {
    $('#workday-modal').modal('toggle')
})