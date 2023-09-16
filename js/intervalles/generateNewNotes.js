
function generateNewNotes() {
  clearStaves();

  reponseButtons.forEach(function (button) {
    if (button.classList.contains("reponse-incorrecte")) {
      button.classList.remove("reponse-incorrecte");
    }
  });

  if (displayStaves) {
    var note1 = gammeChromatique.indexOf(initialNote1);
    var note2 = gammeChromatique.indexOf(initialNote2);
    var distance = Math.abs(note2 - note1);

    // Afficher à l'utilisateur
    octave = Math.floor(distance / 12);
    interval = getIntervalName(distance);

    displayNotesOnStave(initialNote1, initialNote2);
  }

  var startTessiture = parseInt(tessitureSlider.value);
  var endTessiture = parseInt(tessitureSlider2.value);

  var validIntervalFound = false;

  while (!validIntervalFound) {
    var indice1 =
      Math.floor(Math.random() * (endTessiture - startTessiture + 1)) +
      startTessiture;
    var indice2 =
      Math.floor(Math.random() * (endTessiture - startTessiture + 1)) +
      startTessiture;

    var newNote1 = gammeChromatique[indice1];
    var newNote2 = gammeChromatique[indice2];
    initialNote1 = newNote1;
    initialNote2 = newNote2;
    console.log("notes " + newNote1, newNote2);

    var indice1 = gammeChromatique.indexOf(newNote1);
    var indice2 = gammeChromatique.indexOf(newNote2);

    var distance = Math.abs(indice2 - indice1);
    console.log("distance " + distance);

    // Transformer intervalIndices en un tableau d'entiers
    var intervalIndicesArray = intervalIndices.split(",").map(Number);
    console.log(intervalIndicesArray);
    // Vérifier si l'intervalle correspond à l'un des intervalles sélectionnés
    if (intervalIndicesArray.includes(distance)) {
      validIntervalFound = true;
      break;
    }
  }

  console.log(mode);
  if (distance != 0) {
    if (mode === "ascendante") {
      playAscending(newNote1, newNote2);
      currentMode = "ascendante";
    } else if (mode === "descendante") {
      playDescending(newNote1, newNote2);
      currentMode = "descendante";
    } else if (mode === "harmonique") {
      playSimultaneous(newNote1, newNote2);
      currentMode = "harmonique";
    } else {
      // Mode aléatoire
      var randomModes = ["ascendante", "descendante", "harmonique"];
      var randomMode = randomModes[Math.floor(Math.random() * randomModes.length)];
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
    }
  } else {
    if (mode === "ascendante") {
      playAscending(newNote1, newNote2);
      currentMode = "repété";
    } else if (mode === "descendante") {
      playDescending(newNote1, newNote2);
      currentMode = "repété";
    } else if (mode === "harmonique") {
      playSimultaneous(newNote1, newNote2);
      currentMode = "harmonique";
    } else {
      // Mode aléatoire
      var randomModes = ["ascendante", "descendante", "harmonique"];
      var randomMode = randomModes[Math.floor(Math.random() * randomModes.length)];
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
  }
}
