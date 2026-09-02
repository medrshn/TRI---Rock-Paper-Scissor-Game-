const playerName = document.getElementById("player-name");
const startGame = document.getElementById("start-game");
const nameAlert = document.getElementById("name-alert");

startGame.addEventListener("click", function () {
    const name = playerName.value.trim();

    if (name === "") {
        nameAlert.textContent = "Please enter your name to start the game.";
        playerName.focus();
        return;
    }

    localStorage.setItem("playerName", name);
    window.location.href = "rps.html";
});

playerName.addEventListener("input", function () {
    nameAlert.textContent = "";
});