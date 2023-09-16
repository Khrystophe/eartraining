// Fonction pour vérifier la réponse de l'utilisateur
function checkAnswer(userResponse, button) {
  var note1 = gammeChromatique.indexOf(initialNote1);
  var note2 = gammeChromatique.indexOf(initialNote2);
  var distance = Math.abs(note2 - note1);
  interval = getIntervalName(distance);

  // Suppression du score précedent
  var scoreDiv = document.getElementById("scoreValue");

  while (scoreDiv.firstChild) {
    scoreDiv.removeChild(scoreDiv.firstChild);
  }

  // Création div score
  var scoreDiv = document.createElement("div");
  document.getElementById("scoreValue").appendChild(scoreDiv);

  if (userResponse === interval) {
    // Générer de nouvelles notes après une réponse correcte
    generateNewNotes();

    score++;
    scoreDiv.textContent = score;
  } else {
    score = 0;
    scoreDiv.textContent = score;
    
    button.classList.add("reponse-incorrecte");
  }
}
