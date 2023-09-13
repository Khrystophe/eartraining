// Fonction pour vérifier la réponse de l'utilisateur
function checkAnswer(userResponse) {
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
      alert("Correct ! La réponse est " + interval);
      // Générer de nouvelles notes après une réponse correcte
      var [newNote1, newNote2] = generateNewNotes();
      var modes = ["ascendante", "descendante", "harmonique"];
      var randomMode = modes[Math.floor(Math.random() * modes.length)];
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
      score++;
      scoreDiv.textContent = score;
      isScoreDisplayed = true; // Mettre à jour l'état de l'affichage de la portée
    } else {
      score = 0;
      scoreDiv.textContent = score;
      alert("Incorrect. Réessayez !");
    }
  }