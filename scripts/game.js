let game = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    choices: ["button1", "button2", "button3", "button4"]
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    showScore();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

// Any new fucntion created needs to be added her from the js file
// This exports the game script to the game.text.js file
module.exports = { game, newGame };