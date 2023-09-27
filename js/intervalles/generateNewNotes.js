function generateNewNotes() {
  reponseButtons.forEach(function (button) {
    if (button.classList.contains("reponse-incorrecte")) {
      button.classList.remove("reponse-incorrecte");
    }
  });

  if (noteIndex1 < noteIndex2) {
    var startTessiture = noteIndex1;
    var endTessiture = noteIndex2;
  } else {
    var startTessiture = noteIndex2;
    var endTessiture = noteIndex1;
  }

  var validIntervalFound = false;

  while (!validIntervalFound) {
    var indice1 =
      Math.floor(Math.random() * (endTessiture - startTessiture + 1)) +
      startTessiture;
    console.log("11", indice1);
    var indice2 =
      Math.floor(Math.random() * (endTessiture - startTessiture + 1)) +
      startTessiture;
    console.log("22", indice2);

    var newNote1 = gammeChromatique[indice1];
    var newNote2 = gammeChromatique[indice2];

    initialNote1 = newNote1;
    initialNote2 = newNote2;

    var distance = Math.abs(indice2 - indice1);

    // Transformer intervalIndices en un tableau d'entiers
    var intervalIndicesArray = intervalIndices.split(",").map(Number);

    // Vérifier si l'intervalle correspond à l'un des intervalles sélectionnés
    if (intervalIndicesArray.includes(distance)) {
      validIntervalFound = true;
      break;
    }
  }

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
      var randomMode =
        randomModes[Math.floor(Math.random() * randomModes.length)];
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
      var randomMode =
        randomModes[Math.floor(Math.random() * randomModes.length)];
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
