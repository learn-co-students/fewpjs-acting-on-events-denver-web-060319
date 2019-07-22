var dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

dodger.style.left;

dodger.style.right;


// document.addEventListener("keydown", function(e) {
//     console.log(e.key);
//   });

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       var leftNumbers = dodger.style.left.replace("px", "");
//       var left = parseInt(leftNumbers, 10);
   
//       dodger.style.left = `${left - 1}px`;
//     }
//   });

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        console.log(left)
        dodger.style.left = `${left - 1}px`;
    }
  }

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowRight") {
//         moveDodgerRight();
//     }
//   });

function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    
    if (left < 360) {
        console.log(left)
        dodger.style.left = `${left + 1}px`;
    }
  }