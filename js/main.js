console.log("Up and running!");

var cards = 
[
    {
        rank:"queen",
        suit:"hearts",
        cardImage:"images/queen-of-hearts.png"
    },
    
    {
        rank:"queen",
        suit:"diamonds",
        cardImage:"images/queen-of-diamonds.png"
    },
    
    {
        rank:"king",
        suit:"hearts",
        cardImage:"images/king-of-hearts.png"
    },
    
    {
        rank:"king",
        suit:"diamonds",
        cardImage:"images/king-of-diamonds.png"
    },
    
    ];
    
    
    


var cardsInPlay = [];
var win = 1;
var loose = 1;


function checkForMatch() {
    
    if (cardsInPlay[0] === cardsInPlay[1]) {
        
        
alert("You found a match!");
document.getElementById("win").innerHTML = win++;

} 

else {
    
alert("Sorry, try again.");
document.getElementById("loose").innerHTML = loose++;
        }
    }




var flipCard = function() {
var cardId = this.getAttribute("data-id");
console.log('data-id');
// console.log("User flipped " + cardId.rank);
// console.log(cardId.suit);
// console.log(cardId.cardImage);
cardsInPlay.push(cards[cardId].rank);
// console.log(cardId);
this.setAttribute("src", cards[cardId].cardImage);
// console.log(cardId.cardImage);

if(cardsInPlay.length === 2){
checkForMatch();  
    }
};

var gameBoard = document.getElementById('game-board');

//function createBoard (){
var createBoard = function(){
    
    for(var i =0; i <cards.length; i++){
        var cardElement = document.createElement('img');

cardElement.setAttribute("src", "images/back.png");

cardElement.setAttribute("data-id", i);

cardElement.addEventListener("click", flipCard);

gameBoard.appendChild(cardElement);

    }
};





function reset() {
    alert("RESET");
    var element = document.getElementById("game-board");
element.innerHTML = "";
console.log(cardsInPlay);
cardsInPlay.splice(0,cardsInPlay.length)
    //gameBoard = document.getElementById('game-board');
    createBoard();
}
                                                                                                                                                                                        
createBoard();