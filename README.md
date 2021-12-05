# tick_tac_toe


You can play it [here](https://hughsin23.github.io/tic-tac-toe/)

## approach 
I wanted to make the game using mostly knowledge that I already have, to test my limits for what I've learned in the last few weeks. 

### technologies used
I decided to make a bunch of functions and have those functions call each other, as this was a way that I could make the handle buttons nice and simple. I used some of the work I had done on the homework to make all my boxes green to check along each row, and each culumn.



I didn't know how to make it check them all together, so I ended up having to make one for each row and column, but as the function was the same it was a lot of copy pasting. These functions all result in a true or false, and then are passed into a function that, if that row or column are all the same text content, adds a class to the msg.
To check each row or column, I created 2 variables (1 of which I realise now is not really needed), an empty array and a boolean (this one isn't needed). The function then uses a forEach loop to check all spaces in that row/column, and pushes true or false into the array depending on if the text content matches the player whos turn it is. I then run a for loop to check whether all of the array is true. If it isn't, the boolean variable becomes false, and the function stops and returns false. If it is, the boolean becomes true and the function returns true. 

Using DOM manipulation for the win condition and grid re-organising was difficult but rewarding. 

I then wanted to make the grid adjust to a 3x3 or 5x5 on a button click. The speedhump there being that I had to re-create the entire innerHTML of the game container whenever the buttons were pressed. I also didn't realise that this would mean I have to redefine ALL of my board variables upon each click of those buttons too. 
The grid can only be changed of the game board is blank. 

A problem that I ran into is that if i wanted to make the player's symbols rather than simple O or X text, I would have to redo my entire code, which seemed too time consuming, as I didn't get to work on my code over the weekend much at all. 

I also got entirely confused when trying to read up on the local/session storage, so gave up on trying to add those to the game. 

I have discovered that CSS is truely a weakness, and something that I need to work much more on to entirely understand. Huge thank you to Hannah for walking me through some of the CSS stuff and being patient with all my questions.

All in all the code is messy, with lots of room for improvement, but I'm very proud of myself and quite satisfied with the end result.