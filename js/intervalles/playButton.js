var playButton = document.getElementById("playButton");

// Gestionnaire d'événements pour le bouton "Jouer un interval"
playButton.addEventListener("click", function () {

  if ( !displayStaves || answerRevealed) {
    this.classList.remove("play-ok");
    this.classList.add("play-stop");

    playButton.setAttribute("disabled", "disabled");

    for (let i = 1; i <= 12; i++) {
      const selectButton = document.getElementById(`select-interval-${i}`);
      selectButton.setAttribute("disabled", "disabled");
    }

    generateNewNotes();

    // On remet l'attribut answerRevealed à false pour ne pas povoir rejouer
    if (answerRevealed) {
      answerRevealed = false;
    }
    // La portée à la possibilité de s'afficher car un interval a été généré
    displayStaves = true;
  } else {
    alert("Veuillez donner la bonne réponse ou la révéler");
  }
});
