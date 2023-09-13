// Gestionnaire d'événements pour les boutons de réponse
var reponseButtons = document.querySelectorAll(".reponse");
reponseButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var distance = parseInt(button.getAttribute("data-distance"));
    interval = getIntervalName(distance);
    // Pour que l'utilisateur génére une nouvelle note à l'ouverture de l'exercice
    if (isScoreDisplayed && !answerRevealed) {
      checkAnswer(interval);
    } else {
      // Suppression du score précedent
      var scoreDiv = document.getElementById("scoreValue");

      while (scoreDiv.firstChild) {
        scoreDiv.removeChild(scoreDiv.firstChild);
      }

      // Création div score
      var scoreDiv = document.createElement("div");
      document.getElementById("scoreValue").appendChild(scoreDiv);
      score = 0;
      scoreDiv.textContent = score;
      alert("Veuillez jouer un intervalle");
    }
  });
});
