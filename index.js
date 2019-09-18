// Your code here
const dodger = document.getElementById('dodger')

console.log(dodger.style.left)

function moveDodgerLeft(){
    dodger.style.left = `${parseInt(dodger.style.left) - 1}px`
}   
function moveDodgerRight(){
    dodger.style.left = `${parseInt(dodger.style.left) + 1}px`
}   