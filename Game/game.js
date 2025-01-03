var player = document.getElementById("player");
var timer = document.getElementById("timer");
var idk = document.getElementById("idk");
let score = 0;
var realtimer = 60;
let scores = [];
let restart = document.getElementById("restart");
var maxScore = parseInt(localStorage.getItem("maxScore")) || 0; // Retrieve or initialize maxScore
let maxScoretxt = document.getElementById("maxscore");

maxScoretxt.innerText = `Your max score is ${maxScore}`;

let interval; // Declare interval variable globally

function handlePlayerClick() {
    timer.innerText = realtimer;
    score++;
    idk.innerText = "Score: " + score;

    var randomposX = Math.ceil(Math.random() * 450);
    var randomposY = Math.ceil(Math.random() * 450);
    var randomsize = Math.ceil(Math.random() * 100);

    if (randomsize < 20) {
        randomsize = 20;
    }
    player.style.width = randomsize + "px";
    player.style.height = randomsize + "px";

    player.style.marginTop = randomposY + "px";
    player.style.marginLeft = randomposX + "px";

    if (score == 20) {
        var megacube = document.getElementById("megacube");
        megacube.style.width = randomsize + "px";
        megacube.style.height = randomsize + "px";

        megacube.style.marginTop = Math.random() * 200 + "px";
        megacube.style.marginLeft = Math.random() * 200 + "px";

        megacube.addEventListener("click", function () {
            score += 10;
            idk.innerText = "Score: " + score;

            if (this.click = true) {
                megacube.style.width = "0px";
                megacube.style.height = "0px";
            }
        });
    }
}

function startGame() {
    // Reset variables
    realtimer = 60;
    score = 0;

    idk.innerText = `Score: ${score}`;
    timer.innerText = realtimer;

    // Add click listener
    player.addEventListener("click", handlePlayerClick);

    // Start the timer
    interval = setInterval(() => {
        realtimer--;
        timer.innerText = realtimer;

        if (realtimer < 1) {
            swal("Time is over! Your score: " + score);
            clearInterval(interval);
            scores.push(score);

            // Update maxScore if needed
            maxScore = Math.max(maxScore, score);
            localStorage.setItem("maxScore", maxScore);

            idk.innerText = `Score: ${score}`;
            maxScoretxt.innerText = `Your max score is ${maxScore}`;

            // Remove the event listener
            player.removeEventListener("click", handlePlayerClick);
        }
    }, 1000);
}

// Start the initial game
startGame();

// Restart button logic
restart.addEventListener("click", function () {
    clearInterval(interval); // Stop the current game timer
    player.removeEventListener("click", handlePlayerClick); // Remove any existing listeners
    startGame(); // Restart the game logic
});
