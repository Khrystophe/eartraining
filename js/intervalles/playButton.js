// Gestionnaire d'événements pour le bouton "Jouer un interval"
document.getElementById("playButton").addEventListener("click", function () {
  if (answerGiven || !isScoreDisplayed || answerRevealed) {
    console.log(answerGiven);
    console.log(answerRevealed);
    console.log(isScoreDisplayed);
    generateNewNotes();
 
    if (answerRevealed) {
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
      answerRevealed = false;
    }
    // On génère un nouvel intervalle donc l'utilisateur doit donner une réponse
    answerGiven = false;
    // La portée à la possibilité de s'afficher car un interval a été généré
    isScoreDisplayed = true;
  } else {
    alert("Veuillez donner la bonne réponse ou la révéler");
  }
});
