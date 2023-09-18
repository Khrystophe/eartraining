var repeatButton = document.getElementById("repeatButton");

repeatButton.setAttribute("disabled", "disabled");

// Gestionnaire d'événements pour le bouton "Répéter l'interval"
repeatButton.addEventListener("click", function () {
  var indice1 = gammeChromatique.indexOf(initialNote1);
  var indice2 = gammeChromatique.indexOf(initialNote2);

  var distance = Math.abs(indice2 - indice1);

 if (distance != 0) {
    if (mode === "ascendante") {
      playAscending(initialNote1, initialNote2);
      currentMode = "ascendante";
    } else if (mode === "descendante") {
      playDescending(initialNote1, initialNote2);
      currentMode = "descendante";
    } else if (mode === "harmonique") {
      playSimultaneous(initialNote1, initialNote2);
      currentMode = "harmonique";
    } else {

      if (currentMode === "ascendante") {
        playAscending(initialNote1, initialNote2);
        currentMode = "ascendante";
      } else if (currentMode === "descendante") {
        playDescending(initialNote1, initialNote2);
        currentMode = "descendante";
      } else if (currentMode === "harmonique") {
        playSimultaneous(initialNote1, initialNote2);
        currentMode = "harmonique";
      }
    }
  } else {
    //Pour que la répétition en mode aléatoire quand la réponse n'a pas été encore révélée se fasse dans le même mode
    if (mode === "ascendante") {
      playAscending(initialNote1, initialNote2);
      currentMode = "repété";
    } else if (mode === "descendante") {
      playDescending(initialNote1, initialNote2);
      currentMode = "repété";
    } else if (mode === "harmonique") {
      playSimultaneous(initialNote1, initialNote2);
      currentMode = "harmonique";
    } else {

      if (currentMode === "ascendante" || currentMode === "repété") {
        playAscending(initialNote1, initialNote2);
        currentMode = "repété";
      } else if (currentMode === "descendante") {
        playDescending(initialNote1, initialNote2);
        currentMode = "repété";
      } else if (currentMode === "harmonique") {
        playSimultaneous(initialNote1, initialNote2);
        currentMode = "harmonique";
      }
    }
  }
  
  // Si la réponse est révélé l'utilisateur peut jouer l'intervalle dans le mode qu'il veut
  if(answerRevealed){

    if (distance != 0) {
       if (mode === "ascendante") {
         playAscending(initialNote1, initialNote2);
         currentMode = "ascendante";
       } else if (mode === "descendante") {
         playDescending(initialNote1, initialNote2);
         currentMode = "descendante";
       } else if (mode === "harmonique") {
         playSimultaneous(initialNote1, initialNote2);
         currentMode = "harmonique";
       } else {
         // Mode aléatoire
         var randomModes = ["ascendante", "descendante", "harmonique"];
         var randomMode = randomModes[Math.floor(Math.random() * randomModes.length)];
         if (randomMode === "ascendante") {
           playAscending(initialNote1, initialNote2);
           currentMode = "ascendante";
         } else if (randomMode === "descendante") {
           playDescending(initialNote1, initialNote2);
           currentMode = "descendante";
         } else if (randomMode === "harmonique") {
           playSimultaneous(initialNote1, initialNote2);
           currentMode = "harmonique";
         }
       }
     } else {
       if (mode === "ascendante") {
         playAscending(initialNote1, initialNote2);
         currentMode = "repété";
       } else if (mode === "descendante") {
         playDescending(initialNote1, initialNote2);
         currentMode = "repété";
       } else if (mode === "harmonique") {
         playSimultaneous(initialNote1, initialNote2);
         currentMode = "harmonique";
       } else {
         // Mode aléatoire
         var randomModes = ["ascendante", "descendante", "harmonique"];
         var randomMode = randomModes[Math.floor(Math.random() * randomModes.length)];
         if (randomMode === "ascendante") {
           playAscending(initialNote1, initialNote2);
           currentMode = "repété";
         } else if (randomMode === "descendante") {
           playDescending(initialNote1, initialNote2);
           currentMode = "repété";
         } else if (randomMode === "harmonique") {
           playSimultaneous(initialNote1, initialNote2);
           currentMode = "harmonique";
         }
       }
     }
    
    clearStaves();

    displayNotesOnStave(initialNote1, initialNote2);
  }
});
