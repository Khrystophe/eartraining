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

  if (userResponse === interval && autoReading) {
    clearStaves();

    // Affichage des portées
    if (displayStaves) {
      var note1 = gammeChromatique.indexOf(initialNote1);
      var note2 = gammeChromatique.indexOf(initialNote2);
      var distance = Math.abs(note2 - note1);

      // Afficher à l'utilisateur
      octave = Math.floor(distance / 12);
      interval = getIntervalName(distance);

      displayNotesOnStave(initialNote1, initialNote2);
    }
    // Générer de nouvelles notes après une réponse correcte
    generateNewNotes();

    score++;
    numberOfAnswers++;
    scoreDiv.textContent = Math.round((score / numberOfAnswers) * 100) + "%";
  } else if (userResponse === interval && !autoReading) {
    clearStaves();

    // Désactiver les boutons de réponses pour que le score ne se remette pas a zero quand l'utilisateur clique au hasard avant de générer un nouvel intervalle
    reponseButtons.forEach(function (button) {
      button.setAttribute("disabled", "disabled");
    });

    showReponseButton.setAttribute("disabled", "disabled");

    if (displayStaves) {
      var note1 = gammeChromatique.indexOf(initialNote1);
      var note2 = gammeChromatique.indexOf(initialNote2);
      var distance = Math.abs(note2 - note1);

      // Afficher à l'utilisateur
      octave = Math.floor(distance / 12);
      interval = getIntervalName(distance);

      displayNotesOnStave(initialNote1, initialNote2);
    }

    var playButton = document.getElementById("playButton");

    playButton.classList.remove("play-stop");
    playButton.classList.add("play-ok");

    playButton.removeAttribute("disabled");

    for (let i = 1; i <= 12; i++) {
      const selectButton = document.getElementById(`select-interval-${i}`);
      selectButton.removeAttribute("disabled");
    }

    score++;
    numberOfAnswers++;
    scoreDiv.textContent = Math.round((score / numberOfAnswers) * 100) + "%";
  } else {
    
    numberOfAnswers++;
    scoreDiv.textContent = Math.round((score / numberOfAnswers) * 100) + "%";

    button.classList.add("reponse-incorrecte");
    button.setAttribute("disabled", "disabled");
  }
}
