document.getElementById("showReponseButton").addEventListener("click", function () {
    clearStaves();

    var playButton = document.getElementById("playButton");

    playButton.classList.remove("play-stop");
    playButton.classList.add("play-ok");

    answerRevealed = true;
  
    if (isScoreDisplayed) {
      var note1 = gammeChromatique.indexOf(initialNote1);
      var note2 = gammeChromatique.indexOf(initialNote2);
      var distance = Math.abs(note2 - note1);
  
      // Afficher à l'utilisateur
      octave = Math.floor(distance / 12);
      interval = getIntervalName(distance);
  
      displayNotesOnStave(initialNote1, initialNote2);
    }
});