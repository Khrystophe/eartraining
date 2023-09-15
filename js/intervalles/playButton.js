// Gestionnaire d'événements pour le bouton "Jouer un interval"
document.getElementById("playButton").addEventListener("click", function () {
  if (answerGiven || !isScoreDisplayed || answerRevealed) {
    console.log(answerGiven);
    console.log(answerRevealed);
    console.log(isScoreDisplayed);
    var [newNote1, newNote2] = generateNewNotes();
    var modes = ["ascendante", "descendante", "harmonique"];
    var randomMode = modes[Math.floor(Math.random() * modes.length)];
    console.log(randomMode);

    var indice1 = gammeChromatique.indexOf(initialNote1);
    var indice2 = gammeChromatique.indexOf(initialNote2);

    var distance = Math.abs(indice2 - indice1);
    console.log("distance " + distance);

    if (distance != 0) {
      if (randomMode === "ascendante") {
        playAscending(newNote1, newNote2);
        currentMode = "ascendante";
      } else if (randomMode === "descendante") {
        playDescending(newNote1, newNote2);
        currentMode = "descendante";
      } else if (randomMode === "harmonique") {
        playSimultaneous(newNote1, newNote2);
        currentMode = "harmonique";
      }
    } else {
      if (randomMode === "ascendante") {
        playAscending(newNote1, newNote2);
        currentMode = "repété";
      } else if (randomMode === "descendante") {
        playDescending(newNote1, newNote2);
        currentMode = "repété";
      } else if (randomMode === "harmonique") {
        playSimultaneous(newNote1, newNote2);
        currentMode = "harmonique";
      }
    }
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
