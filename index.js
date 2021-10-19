// Create an Array of at least 3 losing messages
var messages = [
    'Wow, that was rough.',
    'My dog could have done better.',
    'What an embarassing attempt.',
]

// Create variables to count wins and losses

var wins = 0
var losses = 0

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var messageEl = document.getElementById('message')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')


// target all .box elements and attach a click event listener to each one using a loop
var boxElements = document.querySelectorAll('.box')

for (var i = 0; i < boxElements.length; i++) {
  var boxElement = boxElements[i];
  // console.log(boxElement)

    // within each click event...
    // determine which box was clicked with 'this.textContent' or event.target.textContent
    // convert that value to a Number and store it to a variable
boxElement.onclick = function(event) {
  var numWasClicked = Number(event.target.textContent)

  // console.log(Number(numWasClicked))

  var winningBox = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  // console.log(winningBox)

  if (winningBox == boxElement.onclick) {
    messageEl.textContent = "Good job!"
    winsEl.textContent = wins++
  } else {
    function randomMessage(messages) {
      return messages[Math.floor(Math.random() * messages.length)];
    }
    lossesEl.textContent = losses++
  }
  }
}



// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
// var winningBox = function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }
// console.log(winningBox(1, 3))


// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
// console.log(messageEl.textContent)

// if (winningBox == boxElement.onclick) {
//   messageEl.textContent = "Good job!"
//   winsEl.textContent = wins++
// } else {
//   function randomMessage(messages) {
//     return messages[Math.floor(Math.random() * messages.length)];
//   }
//   lossesEl.textContent = losses++
// }
  

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
