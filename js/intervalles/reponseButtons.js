// Gestionnaire d'événements pour les boutons de réponse
var reponseButtons = document.querySelectorAll(".reponse");

reponseButtons.forEach(function (button) {
  button.setAttribute("disabled", "disabled");
});

reponseButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var distance = parseInt(button.getAttribute("data-distance"));
    console.log(distance);
    var userResponse = getIntervalName(distance);

    // Vérification de la réponse seuelemnent si un interval a été généré et que la reponse n'a pas été révélée
    if (displayStaves && !answerRevealed) {
      checkAnswer(userResponse, button);
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

// Fonction pour mettre à jour l'état des boutons de réponse en fonction des intervalles sélectionnés
function updateResponseButtons() {
  reponseButtons.forEach(function (button) {
    var distancesString = button.getAttribute("data-distance");
    var distances = distancesString.split(", ").map(Number);

    if (intervalIndices.includes(distances)) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "disabled");
    }
  });
}
