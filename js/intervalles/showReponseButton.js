var showReponseButton = document.getElementById("showReponseButton");

showReponseButton.setAttribute("disabled", "disabled");

showReponseButton.addEventListener("click", function () {
  clearStaves();

  reponseButtons.forEach(function (button) {
    button.setAttribute("disabled", "disabled");
  });

  showReponseButton.setAttribute("disabled", "disabled");

  playButton.classList.remove("play-stop");
  playButton.classList.add("play-ok");

  playButton.removeAttribute("disabled");

  for (let i = 1; i <= 12; i++) {
    const selectButton = document.getElementById(`select-interval-${i}`);
    selectButton.removeAttribute("disabled");
  }

  answerRevealed = true;

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

  if (displayStaves) {
    var note1 = gammeChromatique.indexOf(initialNote1);
    var note2 = gammeChromatique.indexOf(initialNote2);
    var distance = Math.abs(note2 - note1);

    // Afficher à l'utilisateur
    octave = Math.floor(distance / 12);
    interval = getIntervalName(distance);

    displayNotesOnStave(initialNote1, initialNote2);
  }
});
