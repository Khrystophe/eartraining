// Gestionnaire d'événements pour le bouton "Jouer un interval"
document.getElementById("playButton").addEventListener("click", function () {
    var [newNote1, newNote2] = generateNewNotes();
    var modes = ["ascendante", "descendante", "harmonique"];
    var randomMode = modes[Math.floor(Math.random() * modes.length)];
    console.log(randomMode);
  
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
    isScoreDisplayed = true;
  });