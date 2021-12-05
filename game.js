
var boardSpaces = document.querySelectorAll('.board');
var row1 = document.querySelectorAll('.row-1');
var row2 = document.querySelectorAll('.row-2');
var row3 = document.querySelectorAll('.row-3');
var row4 = document.querySelectorAll('.row-4');
var row5 = document.querySelectorAll('.row-5');
var column1 = document.querySelectorAll('.column-1');
var column2 = document.querySelectorAll('.column-2');
var column3 = document.querySelectorAll('.column-3');
var column4 = document.querySelectorAll('.column-4');
var column5 = document.querySelectorAll('.column-5');
var threeByThreeDiagonalsTop2Bottom = document.querySelectorAll('.grid-3x3-diag-t2b');
var threeByThreeDiagonalsBottom2Top = document.querySelectorAll('.grid-3x3-diag-b2t');
var fiveByFiveDiagonalsTop2Bottom = document.querySelectorAll('.grid-5x5-diag-t2b');
var fiveByFiveDiagonalsBottom2Top = document.querySelectorAll('.grid-5x5-diag-b2t');
var resetBtn = document.querySelector('.reset-btn');
var threeByThreeBtn = document.querySelector('.grid-3x3-btn');
var fiveByFiveBtn = document.querySelector('.grid-5x5-btn');
var gridContainer = document.querySelector('.grid-container');
var msg = document.querySelector('.msg');
var whichPlayersTurn = document.querySelector('#which-players-turn');
var playerOWincountDisplay = document.querySelector('.player-o-wincount');
var playerXWincountDisplay = document.querySelector('.player-x-wincount');
var drawCount = document.querySelector('.draw-count');
var grid3x3Background = document.querySelector('.three');
var grid5x5Background = document.querySelector('.five');

var audioX = new Audio('./audio/hughsaysX.m4a');
var audioO = new Audio('./audio/hughsaysO.m4a');
var audioWin = new Audio('./audio/youWon.m4a');
var audioReset = new Audio('./audio/reset.m4a');
var audioDraw = new Audio('./audio/draw.m4a');
var audio3x3 = new Audio('./audio/threegrid.m4a');
var audio5x5 = new Audio('./audio/fivegrid.m4a');


var player = 'O';
var turn = 0;
var gridType = '5x5';
var isBoardClear = true;
var rounds = 0;
var playerONumberOfWins = 0;
var playerXNumberOfWins = 0;
var numberOfDraws = 0;


function checkWin(){
    
    checkTiles(checkRow1);
    
    checkTiles(checkRow2);
    
    checkTiles(checkRow3);
    
    if (gridType == '5x5'){
        checkTiles(checkRow4);
    };
    if (gridType == '5x5'){
        checkTiles(checkRow5);
    };
    checkTiles(checkColumn1);
    checkTiles(checkColumn2);
    checkTiles(checkColumn3);
    if (gridType == '5x5') {
        checkTiles(checkColumn4);
    };
    if (gridType == '5x5') {
        checkTiles(checkColumn5);
    };
    if (gridType == '5x5') {
        checkTiles(check5x5DiagTopToBottom);
    };
    if (gridType == '5x5'){
        checkTiles(check5x5DiagBottomToTop);
    };
    if(gridType == '3x3'){
        checkTiles(check3x3DiagTopToBottom);
    };
    if(gridType == '3x3'){
        checkTiles(check3x3DiagBottomToTop);
    };
};


boardSpaces.forEach(function(box){
    box.addEventListener('click', handlePlayerMove)
})

resetBtn.addEventListener('click', handleReset)
threeByThreeBtn.addEventListener('click', handle3x3Grid)
fiveByFiveBtn.addEventListener('click', handle5x5Grid)

function checkTiles(fn){ //this gets passed a function that will return true or false, if it's true, it gives the msg element the winner class, which will trigger all the winner events.
    if (fn() == true){
        msg.classList.add('winner')
    }
}


//all of these check functions do the same thing, but for different "win combos"
function checkColumn1(){
    var testArray = []
    var allTrue = false
    column1.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}
function checkColumn2(){
    var testArray = []
    var allTrue = false
    column2.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}
function checkColumn3(){
    var testArray = []
    var allTrue = false
    column3.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}
function checkColumn4(){
    var testArray = []
    var allTrue = false
    column4.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}
function checkColumn5(){
    var testArray = []
    var allTrue = false
    column5.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}
function checkRow1(){
    var testArray = []
    var allTrue = false
    row1.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}
function checkRow2(){
    var testArray = []
    var allTrue = false
    row2.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}
function checkRow3(){
    var testArray = []
    var allTrue = false
    row3.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}
function checkRow4(){
    var testArray = []
    var allTrue = false
    row4.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}
function checkRow5(){
    var testArray = []
    var allTrue = false
    row5.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}
function check5x5DiagTopToBottom(){
    var testArray = []
    var allTrue = false
    fiveByFiveDiagonalsTop2Bottom.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}
function check5x5DiagBottomToTop(){
    var testArray = []
    var allTrue = false
    fiveByFiveDiagonalsBottom2Top.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}
function check3x3DiagTopToBottom(){
    var testArray = []
    var allTrue = false
    threeByThreeDiagonalsTop2Bottom.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}
function check3x3DiagBottomToTop(){
    var testArray = []
    var allTrue = false
    threeByThreeDiagonalsBottom2Top.forEach(function(box){
        if (box.textContent == player){
            testArray.push(true)
        } else {
            testArray.push(false)
        }
    });
    for (let i = 0; i<testArray.length; i++){
        if(testArray[i] == false){
            allTrue = false
            return allTrue
        } else{
            allTrue = true
        }
    }
    return allTrue
}

function handle3x3Grid(){
    if (!isBoardClear){
        alert(`Please reset before changing grids!`)
        return
    }
    audio5x5.pause();
    audio5x5.currentTime = 0;
    audioReset.pause();
    audioReset.currentTime = 0;
    audio3x3.play();
    turn = 0
    gridType = '3x3'
    gridContainer.classList.remove('five')
    gridContainer.classList.add('three')
    gridContainer.innerHTML = `
        <span class="board row-1 column-1 grid-3x3-diag-t2b"></span>
        <span class="board row-1 column-2"></span>
        <span class="board row-1 column-3 grid-3x3-diag-b2t"></span>
        <span class="board row-2 column-1"></span>
        <span class="board row-2 column-2 grid-3x3-diag-t2b grid-3x3-diag-b2t"></span>
        <span class="board row-2 column-3"></span>
        <span class="board row-3 column-1 grid-3x3-diag-b2t"></span>
        <span class="board row-3 column-2"></span>
        <span class="board row-3 column-3 grid-3x3-diag-t2b"></span>
    `;
    row1 = document.querySelectorAll('.row-1');
    row2 = document.querySelectorAll('.row-2');
    row3 = document.querySelectorAll('.row-3');
    column1 = document.querySelectorAll('.column-1');
    column2 = document.querySelectorAll('.column-2');
    column3 = document.querySelectorAll('.column-3');
    threeByThreeDiagonalsTop2Bottom = document.querySelectorAll('.grid-3x3-diag-t2b');
    threeByThreeDiagonalsBottom2Top = document.querySelectorAll('.grid-3x3-diag-b2t');
    boardSpaces = document.querySelectorAll('.board');
    
    row3.forEach(function(space){
        space.style.borderTop = '2px solid white'
        space.style.borderBottom = 'none'
    })
    column3.forEach(function(space){
        space.style.borderLeft = '2px solid white'
        space.style.borderRight = 'none'
    })



    boardSpaces.forEach(function(box){
        box.addEventListener('click', handlePlayerMove)
        box.style.fontSize = '8.5rem'
    });
}

function handle5x5Grid(){
    if (!isBoardClear){
        alert(`Please reset before changing grids!`)
        return
    }
    audioReset.pause();
    audioReset.currentTime = 0;
    audio3x3.pause();
    audio3x3.currentTime = 0;
    audio5x5.play();
    turn = 0
    gridType = '5x5'
    gridContainer.classList.remove('.three')
    gridContainer.classList.add('five')
    gridContainer.innerHTML = `
    <span class="board row-1 column-1 grid-5x5-diag-t2b"></span>
    <span class="board row-1 column-2"></span>
    <span class="board row-1 column-3"></span>
    <span class="board row-1 column-4"></span>
    <span class="board row-1 column-5 grid-5x5-diag-b2t"></span>
    <span class="board row-2 column-1"></span>
    <span class="board row-2 column-2 grid-5x5-diag-t2b"></span>
    <span class="board row-2 column-3"></span>
    <span class="board row-2 column-4 grid-5x5-diag-b2t"></span>
    <span class="board row-2 column-5"></span>
    <span class="board row-3 column-1"></span>
    <span class="board row-3 column-2"></span>
    <span class="board row-3 column-3 grid-5x5-diag-t2b grid-5x5-diag-b2t"></span>
    <span class="board row-3 column-4"></span>
    <span class="board row-3 column-5"></span>
    <span class="board row-4 column-1"></span>
    <span class="board row-4 column-2 grid-5x5-diag-b2t"></span>
    <span class="board row-4 column-3"></span>
    <span class="board row-4 column-4 grid-5x5-diag-t2b"></span>
    <span class="board row-4 column-5"></span>
    <span class="board row-5 column-1 grid-5x5-diag-b2t"></span>
    <span class="board row-5 column-2"></span>
    <span class="board row-5 column-3"></span>
    <span class="board row-5 column-4"></span>
    <span class="board row-5 column-5 grid-5x5-diag-t2b"></span>
    `;
    boardSpaces = document.querySelectorAll('.board')
    row1 = document.querySelectorAll('.row-1')
    row2 = document.querySelectorAll('.row-2')
    row3 = document.querySelectorAll('.row-3')
    row4 = document.querySelectorAll('.row-4')
    row5 = document.querySelectorAll('.row-5')
    column1 = document.querySelectorAll('.column-1')
    column2 = document.querySelectorAll('.column-2')
    column3 = document.querySelectorAll('.column-3')
    column4 = document.querySelectorAll('.column-4')
    column5 = document.querySelectorAll('.column-5')
    fiveByFiveDiagonalsTop2Bottom = document.querySelectorAll('.grid-5x5-diag-t2b')
    fiveByFiveDiagonalsBottom2Top = document.querySelectorAll('.grid-5x5-diag-b2t')

    boardSpaces.forEach(function(box){
        box.addEventListener('click', handlePlayerMove)
    });
}
function handlePlayerMove(event){
    if (event.target.textContent !== '' || msg.classList.contains('winner')){
        return
    } 
    if (turn % 2 == 0){
        player = 'O'
    }else {
        player = 'X'
    }
    
    
    var playerSpaceChoice = event.target
    playerSpaceChoice.textContent = player
    if (player == 'O'){
        audioX.pause();
        audioX.currentTime = 0;
        audioO.play();
    } else {
        audioO.pause();
        audioO.currentTime = 0;
        audioX.play();
    }
    playerSpaceChoice.classList.add('occupied')
    whichPlayersTurn.textContent = 'O'
    isBoardClear = false

    checkWin();

    if (msg.classList.contains('winner')){
        msg.textContent = `Player ${player} wins!`
        rounds++
        if (player == 'O') {
            playerONumberOfWins++
        }else {
            playerXNumberOfWins++
        }
        audioWin.play();
        playerOWincountDisplay.textContent = playerONumberOfWins
        playerXWincountDisplay.textContent = playerXNumberOfWins
        return
    }
    if (gridType == '3x3'){
            if (turn >= 8){
            msg.textContent = `No one wins, it's a draw`
            msg.classList.add('draw')
            numberOfDraws++
            drawCount.textContent = numberOfDraws
            rounds++
            audioO.pause();
            audioO.currentTime = 0;
            audioX.pause();
            audioX.currentTime = 0;
            audioDraw.play();
            return
        }
    }
    if (gridType == '5x5'){
        if (turn >= 24){
        msg.textContent = `No one wins, it's a draw`
        msg.classList.add('draw')
        numberOfDraws++
        drawCount.textContent = numberOfDraws
        rounds++
        audioO.pause();
        audioO.currentTime = 0;
        audioX.pause();
        audioX.currentTime = 0;
        audioDraw.play();
        return
    }
}
    turn++
    if (turn % 2 == 0){
        player = 'O'
    }else {
        player = 'X'
    }
    whichPlayersTurn.textContent = player
}

function handleReset(){
    boardSpaces.forEach(function(space){
        space.textContent = ''
        space.style.backgroundColor = ''
        space.classList.remove('occupied')
    })
    audioWin.pause();
    audioWin.currentTime = 0;
    audioO.pause();
    audioO.currentTime = 0;
    audioX.pause();
    audioX.currentTime = 0;
    audioReset.play();
    player = 'O'
    whichPlayersTurn.textContent = player
    turn = 0
    msg.textContent = ''
    msg.classList.remove('winner')
    msg.classList.remove('draw')
    isBoardClear = true
}