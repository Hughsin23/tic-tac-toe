console.log(`wow a game!`)

//var img1 = document.querySelector('span img').src = '' //this lets you change the images source if the img is inside the span

var boardSpaces = document.querySelectorAll('.board')
var topLeft = document.getElementById('top-left')
var topMid = document.getElementById('top-mid')
var topRight = document.getElementById('top-right')
var midLeft = document.getElementById('mid-left')
var midMid = document.getElementById('mid-mid')
var midRight = document.getElementById('mid-right')
var botLeft = document.getElementById('bot-left')
var botMid = document.getElementById('bot-mid')
var botRight = document.getElementById('bot-right')
var msg = document.querySelector('.msg')
var whichPlayersTurn = document.querySelector('#which-players-turn')
var playerOWincountDisplay = document.querySelector('.player-o-wincount')
var playerXWincountDisplay = document.querySelector('.player-x-wincount')
var drawCount = document.querySelector('.draw-count')
var resetButton = document.querySelector



var rounds = 0
var turn = 0
var player = 'O'
var playerONumberOfWins = 0
var playerXNumberOfWins = 0
var numberOfDraws = 0

function checkIfWin(){
    // rows
    if (topLeft.textContent == player && topLeft.textContent == topMid.textContent && topLeft.textContent == topRight.textContent){
        return true
    }
    if (midLeft.textContent == player && midLeft.textContent == midMid.textContent && midLeft.textContent == midRight.textContent){
        return true
    }
    if (botLeft.textContent == player && botLeft.textContent == botMid.textContent && botLeft.textContent == botRight.textContent){
        return true
    }
    // columns
    if (topLeft.textContent == player && topLeft.textContent == midLeft.textContent && topLeft.textContent == botLeft.textContent){
        return true
    }
    if (topMid.textContent == player && topMid.textContent == midMid.textContent && topMid.textContent == botMid.textContent){
        return true
    }
    if (topRight.textContent == player && topRight.textContent == midRight.textContent && topRight.textContent == botRight.textContent){
        return true
    }
    // diagonals
    if (topLeft.textContent == player && topLeft.textContent == midMid.textContent && topLeft.textContent == botRight.textContent){
        return true
    }
    if (botLeft.textContent == player && botLeft.textContent == midMid.textContent && botLeft.textContent == topRight.textContent){
        return true
    }
    return false
}

function handlePlayerMove(event){
    if (event.target.textContent !== '' || msg.classList.contains('winner')){
        return
    } 
    if (turn % 2 == 0){
        player = 'O'
    }else player = 'X'
    var playerSpaceChoice = event.target
    
    playerSpaceChoice.textContent = player

    turn++
    if(checkIfWin()){
        msg.textContent = `Player ${player} wins!`
        msg.classList.add('winner')
        rounds++
        if (player == 'O') {
            playerONumberOfWins++
        }else {
            playerXNumberOfWins++
        }
        playerOWincountDisplay.textContent = playerONumberOfWins
        playerXWincountDisplay.textContent = playerXNumberOfWins
        
    }

    if (turn >= 9){
        msg.textContent = `No one wins, it's a draw`
        msg.classList.add('draw')
        numberOfDraws++
        drawCount.textContent = numberOfDraws
        rounds++
    }
};

function handleReset(){

}

boardSpaces.forEach(function(space){
    space.addEventListener('click', handlePlayerMove)
});









//top row. mid row, bottom row classes and win check
//left column, mid column, right column
//to do the diagonals, i could make a class top-left-to-bottom-right-diag and a bottom-left-to-top-right-diag
//then queryselectorAll in those classes, then make a foreach loop for those to check if they all work